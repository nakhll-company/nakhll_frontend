import React from "react";
import ProductCard from "../../components/ProductCart/ProductCard";
import Head from "next/head";
import CustomSlider from "../../components/custom/customSlider";
const index = () => {
  let product = {
    imageUrl: "/image/faile.webp",
    url: "/hamzeh",
    title: "نبات گیاهی متبرک مشهد با نی چوبی 1 کیلویی برکت هشتم",
    chamberTitle: "گالری سنگ و نقره شاپرک",
    chamberUrl: "/azizzadeh",
    rate: 10,
    commentCount: 102,
    discount: 25,
    price: 107000,
    discountNumber: 190000,
    // sales: 52,
    city: "کرمان",
  };
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
          integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
          crossOrigin="anonymous"
        ></link>
      </Head>


      <div className="container p-2 ">
        <div className="row">
        <CustomSlider
        // model="navigation"
        slides1200={6}
          data={[
            <ProductCard col="12" product={product} />,
            <ProductCard col="12" product={product} />,
            <ProductCard col="12" product={product} />,
            <ProductCard col="12" product={product} />,
            <ProductCard col="12" product={product} />,
            <ProductCard col="12" product={product} />,
            <ProductCard col="12" product={product} />,
            <ProductCard col="12" product={product} />,
            <ProductCard col="12" product={product} />,
            <ProductCard col="12" product={product} />,
            <ProductCard col="12" product={product} />,
            <ProductCard col="12" product={product} />,
            <ProductCard col="12" product={product} />,
            <ProductCard col="12" product={product} />,
            <ProductCard col="12" product={product} />,
            <ProductCard col="12" product={product} />,
          ]}
        />


          <ProductCard product={product} xl="3" />
          <ProductCard product={product} xl="3" />
          <ProductCard product={product} xl="3" />
          <ProductCard product={product} xl="3" />
          <ProductCard product={product} xl="3" />
          <ProductCard product={product} xl="3" />
          <ProductCard product={product} xl="3" />
        </div>
      </div>
    </>
  );
};

export default index;
