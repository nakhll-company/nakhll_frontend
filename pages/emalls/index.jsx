import React, { useEffect, useState } from "react";
import { http } from "../../services/callApi/api";
import Head from "next/head";
import EmptyLayout from "../../components/layout/EmptyLayout";
import Image from "next/image";
import InfiniteScroll from "react-infinite-scroll-component";
function Emalls() {
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [pageApi, setPageApi] = useState(2);
  useEffect(async () => {
    const response = await http.get(`/api/v1/products/`, {
      params: {
        q: "",
        page_size: 100,
      },
    });

    setProducts(response?.data?.results);
  }, []);
  const handelCallAnotherPageApi = async () => {
    try {
      const response = await http.get(`/api/v1/products/`, {
        params: {
          q: "",
          page: pageApi,
          page_size: 100,
        },
      });
      if (response.status === 200) {
        const ContinueList = response.data.results;

        setProducts([...products, ...ContinueList]);

        if (ContinueList.length === 0 || ContinueList.length < 100) {
          setHasMore(false);
        }

        setPageApi(pageApi + 1);
      }
    } catch (e) {
      return false;
    }
  };

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="flex flex-col items-center pt-10 ">
        <div className="">
          <h1 className="text-2xl font-black">لیست محصولات موجود</h1>
        </div>
        <div className="mt-4">
          <InfiniteScroll
            className="row mx-auto"
            dataLength={products.length} // This is important field to render the next data
            next={handelCallAnotherPageApi}
            hasMore={hasMore}
            loader={<p>...</p>}
            endMessage={<p style={{ textAlign: "center" }}>end</p>}
          >
            {products[2] && (
              <>
                <table className="table-auto shadow-xl">
                  <thead className="border-b">
                    <tr>
                      <th className="text-center font-black">عنوان</th>
                      <th className="text-center font-black">تصویر</th>
                      <th className="mx-2 text-center font-black">قیمت</th>
                      <th className="text-center font-black">قیمت با تخفیف</th>
                    </tr>
                  </thead>

                  <tbody>
                    {products?.map((item) => (
                      <tr className="border-bottom py-4" key={item.ID}>
                        <td>
                          <a
                            className="mr-4 font-bold"
                            target="_blank"
                            rel="noreferrer"
                            href={`/shop/${item.FK_Shop.slug}/product/${item.Slug}/`}
                          >
                            {item.Title}
                          </a>
                        </td>
                        <td className="">
                          <div className="relative mx-5 my-2 h-[80px] w-[80px] rounded-lg shadow-md">
                            <Image
                              className="rounded-lg "
                              src={item.Image_medium_url}
                              layout="responsive"
                              height={50}
                              width={50}
                            />
                          </div>
                        </td>
                        <td>
                          <div className="mx-2 ">
                            {item.discount == "0"
                              ? item.Price / 10
                              : item.OldPrice / 10}
                          </div>
                        </td>
                        <td className="text-center font-semibold">
                          {item.Price / 10}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
}

export default Emalls;

Emalls.Layout = EmptyLayout;
