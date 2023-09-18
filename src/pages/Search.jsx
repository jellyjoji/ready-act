import {pb} from '@/api/pocketbase';
import Input from '@/components/Input';
import Spinner from '@/components/Spinner';
import {debounce} from '@/utils/debounce';
import {getPbImageURL} from '@/utils/getPbImageURL';
import {numberWithComma} from '@/utils/numberWithComma';
import {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';

function Search() {
  const {id} = useParams();
  const [data, setData] = useState();
  const [searchData, setSearchData] = useState();

  useEffect(() => {
    async function searchProducts() {
      const searchList = await pb.collection('products').getFullList({
        filter: `title~'${searchData}'`,
      });
      setData(searchList);
    }

    searchProducts();
  }, [searchData]);

  if (data) {
    return (
      <>
        <Input
          placeholder="검색"
          className="authInput"
          defaultValue={searchData}
          onChange={debounce((e) => {
            setSearchData(e.target.value);
          }, 100)}
        />
        <h3 className="font-semibold mt-6 mb-3">검색 결과</h3>
        {data.length > 0 ? (
          <ul>
            {data.map((products) => (
              <Link to={`/products/${id}`} key={products.id}>
                <li>
                  <div className="bg-primary-200 p-4 rounded-2xl mb-4">
                    <figure className="flex gap-4 h-[100px]">
                      <img
                        src={getPbImageURL(products, 'uploadImage')}
                        alt={products.title}
                        className="w-[100px] h-full rounded-2xl"
                      />
                      <figcaption>
                        <h2 className="text-sm text-greenishgray-700 font-semibold">
                          {products.title}
                        </h2>
                        <div className="text-xs flex flex-col">
                          <span className="mt-1 mb-5">
                            {numberWithComma(products.price)}원
                          </span>
                          <span className="max-w-xl text-ellipsis	line-clamp-2">
                            {products.content}
                          </span>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        ) : (
          <span className="text-greenishgray-600">검색 결과가 없습니다.</span>
        )}
      </>
    );
  } else {
    <Spinner />;
  }
}

export default Search;
