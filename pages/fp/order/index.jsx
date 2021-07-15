// node libraries
import Head from "next/head";
// component
import MyLayout from "../../../components/layout/Layout";

function Order() {

  return (
    <div>
      <Head>
        <title>سفارشات</title>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
        />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>
    </div>
  )
}

export default Order;

Order.Layout = MyLayout;