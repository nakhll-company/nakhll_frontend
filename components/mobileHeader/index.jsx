// node libraries
import Image from 'next/image';
import { useRouter } from 'next/router';
// scss
import styles from '../../styles/components/mobileHeader/mobileHeader.module.scss';
/**
 * component mobile header
 * @param {string} title => title of header
 * @param {string} type => back | search | close | bascket
 */
function MobileHeader({
    title,
    type
}) {
    const router = useRouter();
    return (
        <div className={type === "back" ? `${styles.wrapper_header_back}` : `${styles.wrapper_header}`}
            onClick={() => router.back()}
        >
            {type === "back" && <Image src="/image/mobileHeader/back.svg" alt="header icon" width="17" height="19" />}
            <span className={styles.header_span}>{title}</span>
            {type === "search" && <Image src="/image/mobileHeader/search.svg" alt="header icon" width="18" height="18" />}
            {type === "close" && <Image src="/image/mobileHeader/close.svg" alt="header icon" width="12" height="19" />}
            {type === "bascket" && <Image src="/image/mobileHeader/bascket.svg" alt="header icon" width="25" height="25" />}
        </div>
    );
}
// export
export default MobileHeader;