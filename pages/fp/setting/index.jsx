// next libraries
import Head from "next/head";
import { connect } from "react-redux";
// components
import MyLayout from "../../../components/layout/Layout";
import useViewport from '../../../components/viewPort';
import DesktopSettings from '../../../containers/settings/desktop';
import MobileSettings from '../../../containers/settings/mobile';
// methods
import { mapState } from '../../../containers/settings/methods/mapState';


function Settings({ activeHojreh }) {

  const { width } = useViewport();
  const breakpoint = 620;

  return (
    <>
      <Head>
        <title>تنظیمات</title>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
        />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>
      {width > breakpoint ? <DesktopSettings activeHojreh={activeHojreh} /> : <MobileSettings activeHojreh={activeHojreh} />}
    </>
  );
}
// export
const connector = connect(mapState);
export default connector(Settings);
Settings.Layout = MyLayout;
