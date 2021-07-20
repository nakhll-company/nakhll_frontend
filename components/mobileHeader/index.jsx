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
        <div className={type === "back" ? `${styles.wrapper_header_back}` : `${styles.wrapper_header}`}>
            {type === "back" &&
                <Image src="/back.svg" alt="header icon" width="17" height="19"
                    onClick={() => router.back()}
                />
                // <i className="fa fa-arrow-left" aria-hidden="true" onClick={() => router.back()}></i>
            }
            <span className={styles.header_span}>{title}</span>
            {type === "search" &&
                <Image src="/search.svg" alt="header icon" width="18" height="18" />
                // <i className="fa fa-search" aria-hidden="true"></i>
            }
            {type === "close" &&
                <Image src="/image/mobileHeader/close.svg" alt="header icon" width="12" height="19"
                    onClick={() => router.replace('/fp')}
                />
                // <i className="fa fa-times" aria-hidden="true"></i>
            }
            {type === "bascket" && <Image src="/bascket.svg" alt="header icon" width="25" height="25" />}
        </div>
    );
}
// export
export default MobileHeader;