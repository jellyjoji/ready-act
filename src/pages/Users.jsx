import {pb} from '@/api/pocketbase';
import Header from '@/layout/Header';
import IconCrownSmall from '@/assets/icons/IconCrownSmall.svg';
import { getPbImageURL } from '@/utils/getPbImageURL';
import { ClientResponseError } from 'pocketbase';
import { useState } from 'react';
import {useEffect} from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
// import Button from '@/components/Button';



function User() {
  const {id} = useParams();
  const[data, setData] = useState()
  useEffect(() => {
    async function getUsers() {
      try {
        const readUserList = await pb.collection('products').getOne(id, {
          expand: 'creator, participate',
        });
       setData(readUserList)
      } catch (error) {
        if (!(error instanceof ClientResponseError)) {
          console.error(error);
        }
      }
    }
    getUsers();
  }, [id]);

  if (data) {
    const {expand} = data;
    const { creator, participate } = expand;

    return (
      <>
        <Helmet>
          <title>R09M - 참여자 목록</title>
        </Helmet>

       <div className="px-4 py-2">
        <Link to={`/products/${id}`}>
         <Header />
          </Link>
       </div>
        
        
        <div className='flex items-center'>
          <h2 className='text-2xl font-semibold mx-auto'>참여자 목록</h2>
        </div>
         
        
        <ul className='pl-4 mb-10 border-b border-solid border-line-400'>
          <li className="flex mb-3 mt-4 items-center font-semibold text-lg">
            <img
              src={getPbImageURL(creator, 'photo')}
              alt={creator.name}
              className="object-cover rounded-full w-14 h-14 relative"
            />
            <img src={ IconCrownSmall } alt="게시물 작성자" className='absolute mt-10 ml-10'/>
            <span className="pl-3 font-extrabold text-lg">{creator.name}</span>
            </li>
        </ul>
        
        <ul>
          {participate.map((item) => (
  
            <li key={item.id} className='flex mb-4 mt-4 items-center'>
              <img src={getPbImageURL(item, 'photo')} alt={item.name} className='object-cover rounded-full w-14 h-14 ml-4' />
              <span className='pl-3 font-bold text-lg'>{item.name}</span>
            </li>
        
          ))
          }
        </ul>
      </>
    );
  }
}

export default User;
