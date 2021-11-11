// node libraries
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
// component
import useViewport from '../../../../components/viewPort';
import LandingDetail from '../../../../containers/options/landingDetail';
import MobileLanding from '../../../../containers/options/mobileLanding';
import DesktopLanding from '../../../../containers/options/desktopLanding';
// methods
import { featureIsActive } from '../../../../containers/options/methods/featureIsActive';

const Landing = () => {

    const breakpoint = 620;
    const router = useRouter();
    const { id } = router.query;
    const { width } = useViewport();
    const [landingList, setLandingList] = useState([]);
    const [featureActive, setFeacureActive] = useState([]);
    const activeHojreh = useSelector((state) => state.User.activeHojreh);

    useEffect(async () => {
        setFeacureActive(await featureIsActive(id, activeHojreh, setLandingList));
    }, []);

    return (
        <>
            <Head>
                <title>لیست فرودها</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            {(featureActive.length > 0 &&
                width < breakpoint) ?
                <MobileLanding landingList={landingList} id={id} activeHojreh={activeHojreh} setLandingList={setLandingList} />
                :
                <DesktopLanding landingList={landingList} id={id} activeHojreh={activeHojreh} setLandingList={setLandingList} />
            }
        </>
    );
}
// export
export default Landing;