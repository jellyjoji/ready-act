import {pb} from '@/api/pocketbase';
import Input from '@/components/Input';
import Spinner from '@/components/Spinner';
import Header from '@/layout/Header';
import Nav from '@/parts/nav/Nav';
import {debounce} from '@/utils/debounce';
import {getPbImageURL} from '@/utils/getPbImageURL';
import {numberWithComma} from '@/utils/numberWithComma';
import {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';

function Search() {
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
        <Helmet>
          <title>R09M - 검색</title>
        </Helmet>
        <h1 className="sr-only">R09M</h1>

        <div className="py-2">
          <div className="px-4">
            <Header />
            <h2 className="pageTitle">검색</h2>
          </div>
        </div>

        <label htmlFor="search" className="sr-only">
          검색
        </label>
        <Input
          id="search"
          placeholder="검색"
          className="authInput"
          defaultValue={searchData}
          onChange={debounce((e) => {
            setSearchData(e.target.value);
          }, 100)}
        />

        <h2 className="font-semibold mt-6 mb-3">검색 결과</h2>
        {data.length > 0 ? (
          <ul>
            {data.map((products) => (
              <Link to={`/products/${products.id}`} key={products.id}>
                <li>
                  <div className="bg-primary-200 p-4 rounded-2xl mb-4">
                    <figure className="flex gap-4 h-[100px]">
                      <img
                        src={getPbImageURL(products, 'uploadImage')}
                        alt={products.title}
                        className="w-[100px] h-full rounded-2xl"
                      />
                      <figcaption>
                        <h3 className="text-sm text-greenishgray-700 font-semibold">
                          {products.title}
                        </h3>
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
        <Nav />
      </>
    );
  } else {
    <Spinner />;
  }
}

export default Search;
