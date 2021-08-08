import Head from "next/head";

import ListCardBuy from "../../containers/card/ListCardBuy";
import MiniCardBuy from "../../containers/card/MiniCardBuy";
import SumBuy from "../../containers/card/SumBuy";
import ShopLayout from "../../components/shopLayout";
import CheckOutSteps from "../../components/CheckOutSteps/CheckOutSteps";
export default function Cart() {
  return (
    <div className="all">
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
          integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
          crossorigin="anonymous"
        ></link>
      </Head>
      <section className="container container--mob pb-5 ">
        <CheckOutSteps step="1" />
        <MiniCardBuy />

        <div className="row mx-auto mt-4" style={{ maxWidth: "72rem" }}>
          <ListCardBuy />
          <SumBuy />
        </div>
      </section>
    </div>
  );
}

Cart.Layout = ShopLayout;
