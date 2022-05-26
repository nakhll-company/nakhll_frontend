import React from "react";
// node libraries
import Head from "next/head";
// components
import Layout from "../../components/layout/Layout";
import Dashboard from "../../containers/dashboard";

export default function DashboardMain() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Dashboard />
    </>
  );
}
DashboardMain.Layout = Layout;
