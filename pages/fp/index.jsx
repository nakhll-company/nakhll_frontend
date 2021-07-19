// node libraries
import Head from "next/head";
// components
import Layout from "../../components/layout/Layout";
import Dashboard from '../../containers/dashboard';

/**
 * component dashboard
 * @returns
 */
export default function DashboardMain() {

    return (
        <>
            <Head>
                <title>داشبورد</title>
                <link
                    rel="stylesheet"
                    href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
                />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <Dashboard />
        </>
    );
}
DashboardMain.Layout = Layout;
