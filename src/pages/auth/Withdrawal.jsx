import {pb} from '@/api/pocketbase';
import Button from '@/components/Button';
import {useAuth} from '@/context/Auth';
import toast from 'react-hot-toast';

function Withdrawal() {
  const {isAuth} = useAuth();

  return (
    <>
      {isAuth && (
        <Button
          type="button"
          className="signOut"
          onClick={async () => {
            if (confirm('탈퇴하시겠습니까?')) {
              if (pb.authStore.model) {
                try {
                  await pb.collection('users').delete(pb.authStore.model.id);
                  toast.success('탈퇴되었습니다. 이용해 주셔서 감사합니다.', {
                    style: {
                      border: '1px solid #258D55',
                      padding: '16px',
                      color: '#1B653D',
                    },
                    iconTheme: {
                      primary: '#1B653D',
                      secondary: '#FFF',
                    },
                    ariaProps: {
                      role: 'status',
                      'aria-live': 'polite',
                    },
                    duration: 4000,
                  });
                } catch (error) {
                  toast.error('탈퇴에 실패하였습니다. 다시 시도해 주세요.', {
                    position: 'top-center',
                    ariaProps: {
                      role: 'status',
                      'aria-live': 'polite',
                    },
                  });
                }
              } else {
                toast('현재 로그인된 사용자가 없어요.', {
                  icon: '❓',
                });
              }
            }
          }}
        >
          회원탈퇴
        </Button>
      )}
    </>
  );
}

export default Withdrawal;
