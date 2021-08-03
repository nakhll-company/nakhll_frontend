import Head from "next/head";

import ListCardBuy from "../../containers/card/ListCardBuy";
import MiniCardBuy from "../../containers/card/MiniCardBuy";
import SumBuy from "../../containers/card/SumBuy";
import ShopLayout from "../../components/shopLayout"
export default function index() {
  return (
    <div className="all">
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
      </Head>
      <section className="container container--mob pb-5 position-relative">
        <MiniCardBuy />

        <div className="row mx-auto" style={{ maxWidth: "72rem" }}>
          <ListCardBuy />

          <SumBuy />
        </div>
      </section>
    </div>
  );
}
export default Cart;
Cart.Layout =ShopLayout;
