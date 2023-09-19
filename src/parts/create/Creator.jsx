
import { AppContext } from '@/App';
import FormInput from '../../components/FormInput';
import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { pb } from '@/api/pocketbase';
import { ClientResponseError } from 'pocketbase';



function Creator() {
  const { updateCreateRoomForm } = useContext(AppContext);
  const [idData, setIdData] = useState("");
  const [productIdData, setProductIdData] = useState("");
  const { id } = useParams();


  // localStorage에서 아이디 정보를 가져오는 함수
  const localStorageId = JSON.parse(localStorage.getItem('pocketbase_auth')).model.id;
  // console.log(localStorageId);

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

    updateCreateRoomForm('creator', idData.name);
    // console.log(idData.name);
  }, [idData.name])


  // 이제 이 비교된 결과값을 넣는 Creator input 창이 필요 
  // creator input 의 값을 context api 에서 뽑아서 사용 app context form 에 넣어서 상태 관리
  return (
    <>
      <FormInput readOnly value={idData.name || ''} label="생성자" type="text" name="creator" placeholder="생성자 정보" inputClassName="w-full defaultInput" />
    </>
  )
}
export default Creator;