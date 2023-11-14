import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { pb } from '@/api/pocketbase';
import { getPbImageURL } from '@/utils/getPbImageURL';

function Chats() {
  // 로그인 사용자
  const user = pb.authStore.model;
  // 채팅 앱 섹션 프레임 요소 참조
  const chatsFrameRef = useRef(null);

  // 채팅 앱 상태
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  // PB 데이터베이스 chats 콜렉션 데이터 요청
  useEffect(() => {
    async function getChats() {
      try {
        const data = await pb.collection('chats').getList(1, 10, {
          sord: '-created',
          expand: 'messenger',
        });

        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    }

    getChats();
  }, []);

  // chats 데이터베이스 변경 실시간 확인
  useEffect(() => {
    // 구독
    pb.collection('chats').subscribe('*', async ({ action, record }) => {
      if (action === 'create') {
        const messenger = await pb.collection('users').getOne(record.messenger);
        record.expand = { messenger };

        setData((data) => {
          return {
            ...data,
            items: [...data.items, record],
          };
        });
      }
    });

    // 구독 취소
    return () => {
      pb.collection('chats').unsubscribe('*');
    };
  }, []);

  // 섹션 프레임 높이 변경
  useEffect(() => {
    const frame = chatsFrameRef.current;
    const topPosition = frame.getBoundingClientRect().bottom + 1000;
    frame.scroll(0, topPosition);
  }, [data.items]);

  // 메시지 입력 상태 및 업데이트 함수
  const [message, setMessage] = useState('');
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  // 메시지 보내기 함수
  // 새로운 메시지 생성 요청
  const handleSendMessage = async (e) => {
    e.preventDefault();

    const newMessageInfo = {
      message,
      messenger: user.id,
    };

    try {
      await pb.collection('chats').create(newMessageInfo);
      setMessage('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2 className="text-4xl font-extralight">Chats</h2>
      <section
        ref={chatsFrameRef}
        className="overflow-auto flex flex-col gap-y-2 h-[400px] my-6 p-6 border-4 border-sky-600/20 rounded-lg"
      >
        <h3 className="sr-only">채팅 메시지</h3>
        {isLoading && (
          <div className="text-sm text-sky-700/70">메시지 로딩 중...</div>
        )}
        {isLoading ||
          data.items.map((messageInfo) => (
            <Message
              key={messageInfo.id}
              type={messageInfo.messenger === user?.id ? 'me' : 'other'}
              messageInfo={messageInfo}
            />
          ))}
      </section>
      <form
        onSubmit={handleSendMessage}
        className="flex space-x-2 items-center justify-between"
      >
        <img
          src={getPbImageURL(user, 'photo')}
          className="w-9 h-9 object-cover rounded-full"
          alt={user.name}
          title={user.name}
        />
        <input
          type="text"
          aria-label="메시지"
          placeholder="메시지를 입력하세요."
          className="flex-1 py-1 px-4 border border-sky-600 rounded-full"
          value={message}
          onChange={handleMessage}
        />
        <button
          type="submit"
          aria-label="보내기"
          className="w-8 h-8 grid place-content-center"
        >
          <motion.svg
            whileHover={{
              scale: 1.6,
            }}
            className="text-sky-700"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
          </motion.svg>
        </button>
      </form>
    </div>
  );
}

// Message 컴포넌트
function Message({ type = 'me', messageInfo }) {
  // 인터페이스 상 메시지 박스 위치 조정을 위한 조건
  const isMeMessage = type === 'me';
  const messengerTypeClasses = isMeMessage ? `justify-end` : `justify-start`;

  // 메신저 이름 및 사진
  const messenger = messageInfo.expand?.messenger;
  const messengerPhoto = getPbImageURL(messenger, 'photo');

  // 시간 정보
  const time = new Date(messageInfo.created)
    .toLocaleTimeString('ko-KR')
    .split(':')
    .slice(0, 2)
    .join(':');

  return (
    <article className={`flex gap-x-2 ${messengerTypeClasses}`}>
      <img
        src={messengerPhoto}
        alt=""
        className={`${isMeMessage ? 'sr-only' : ''
          } w-10 h-10 object-cover rounded-full`}
      />
      <div className="flex flex-col space-y-1">
        <h4 className={isMeMessage ? 'sr-only' : ''}>{messenger.name}</h4>
        <p className="flex gap-x-3 items-end justify-end">
          <span
            className={`${isMeMessage ? 'bg-sky-200 order-1' : 'bg-zinc-200'
              } inline-block py-3 px-6 max-w-[240px] rounded-full text-sm text-left`}
          >
            {messageInfo.message}
          </span>
          <time
            dateTime={messageInfo.created}
            className="text-xs text-zinc-400"
          >
            {time}
          </time>
        </p>
      </div>
    </article>
  );
}

export default Chats;