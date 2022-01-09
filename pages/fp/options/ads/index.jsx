// node libraries
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
// components
import CustomSwitch from "../../../../components/custom/customSwitch";
// api
import { editAdvertisment } from "../../../../api/options/editAdvertisment";
import { getAdvertisement } from "../../../../api/options/getAdvertisement";
// style
import styles from "../../../../containers/options/scss/ads.module.scss";

const Ads = () => {

    const [adsData, setAdsData] = useState({});
    const activeHojreh = useSelector((state) => state.User.activeHojreh);

    useEffect(() => {
        async function getData() {
            let response = await getAdvertisement(activeHojreh);
            setAdsData(response);
        }
        activeHojreh && getData();
    }, [activeHojreh]);

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>تبلیغات</h1>
            <p className={styles.description}>حجره دار گرامی برای ارتقاء بازدید و افزایش فروش محصولات میتوانید از پلتفرم های  زیر استفاده کنید</p>
            <div className={styles.card}>
                <Link href="/fp/options/ads/yektanet">
                    <a>
                        <div className={styles.image_wrapper}>
                            <Image src="/image/ads/yektanet.png" alt="yektanet" width={53} height={47} />
                            <span className={styles.title_card}>
                                <b>یکتانت</b><br />
                                سرویس تبلیغات آنلاین ایران
                            </span>
                        </div>
                    </a>
                </Link>
                <div className={styles.switch_wrapper}>
                    {adsData && <CustomSwitch checked={adsData.yektanet_status} onClick={() => {
                        let data = {
                            yektanet_status: adsData.yektanet_status ? 0 : 1,
                            yektanet_id: adsData.yektanet_id
                        }
                        setAdsData(editAdvertisment(activeHojreh, data));
                    }} />}
                </div>
            </div>
        </div>
    );
}
// export
export default Ads;