// node libraries
import Head from 'next/head';
// component
import useViewport from '../../../../components/viewPort';
import DesktopLanding from '../../../../containers/options/desktopLanding';
import MobileLanding from '../../../../containers/options/mobileLanding';

const Landing = () => {

    const { width } = useViewport();
    const breakpoint = 620;

    return (
        <>
            <Head>
                <title>لیست فرودها</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            {width < breakpoint ?
                <MobileLanding />
                :
                <DesktopLanding />}
        </>
    );
}
// export
export default Landing;