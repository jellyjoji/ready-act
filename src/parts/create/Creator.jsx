
import { AppContext } from '@/App';
import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { pb } from '@/api/pocketbase';
import { ClientResponseError } from 'pocketbase';
import FormInput from '@/components/FormInput';

function Creator() {
  const { updateCreateRoomForm } = useContext(AppContext);
  const [productIdData, setProductIdData] = useState("");
  const { id } = useParams();
  // localStorage에서 아이디 정보를 가져오는 함수
  // 로컬 스토리지에서 데이터를 읽어오는 것은 비동기 처리가 필요합니다. 그러므로 useState 훅을 사용해 지연된 처리가 필요
  const [localStorageId] = useState(() => JSON.parse(localStorage.getItem('pocketbase_auth')).model.id);

  const [idData, setIdData] = useState({});

  // idData 상태가 업데이트 되면 실행되는 이펙트 콜백 함수
  useEffect(() => {
    if (idData.id) {
      // idData 값이 서버로부터 가져와 업데이트 되면
      // creator 폼 필드를 { id, name } 객체 값으로 설정합니다.
      updateCreateRoomForm('creator', { id: idData.id, name: idData.name });
    }
  }, [idData])

  useEffect(() => {
    async function readUserId() {
      try {
        // 포켓 호스트에서 아이디 정보를 가져오는 함수
        const pocketHostId = await pb.collection('users').getFullList();

        // localStorageId 과 pocketHostId 두개를 비교하여 일치하는것만 setIdData 에 주입하여 렌더
        pocketHostId.filter((idList) => {
          if (idList.id === localStorageId) {
            setIdData(idList);

          }
        })

      }
      catch (error) {
        if (!(error instanceof ClientResponseError)) {
          console.error(error);
        }
      }

    }


    async function readProductId() {
      try {
        const productId = await pb.collection('products').getFullList({
          expand: 'creator',
          filter: `creator.id="${localStorageId}"`,
        });

        setProductIdData(productId);

      } catch (error) {
        if (!(error instanceof ClientResponseError)) {
          console.error(error);
        }
      }
    }


    readUserId();
    readProductId()

  }, [])


  // 이제 이 비교된 결과값을 넣는 Creator input 창이 필요 
  // creator input 의 값을 context api 에서 뽑아서 사용 app context form 에 넣어서 상태 관리
  return (
    <>
      <FormInput readOnly value={idData.name || ''} label="생성자" type="text" name="creator" placeholder="생성자 정보" inputClassName="w-full defaultInput" />
    </>
  )
}
export default Creator;