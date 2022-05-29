import React from "react";
// next libraries
import Head from "next/head";

// components
import MyLayout from "../../../components/layout/Layout";

import DesktopSettings from "../../../containers/settings/desktop";

function Settings() {
  return (
    <>
      <Head>
        <title>تنظیمات</title>
      </Head>
      <DesktopSettings />
    </>
  );
}
// export

export default Settings;
Settings.Layout = MyLayout;
