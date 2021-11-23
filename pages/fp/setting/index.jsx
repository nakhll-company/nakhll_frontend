// next libraries
import Head from "next/head";
import { connect } from "react-redux";
// components
import MyLayout from "../../../components/layout/Layout";

import DesktopSettings from "../../../containers/settings/desktop";

// methods
import { mapState } from "../../../containers/settings/methods/mapState";

function Settings({ activeHojreh }) {
  return (
    <>
      <Head>
        <title>تنظیمات</title>

        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
          integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
          crossOrigin="anonymous"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <DesktopSettings activeHojreh={activeHojreh} />
    </>
  );
}
// export
const connector = connect(mapState);
export default connector(Settings);
Settings.Layout = MyLayout;
