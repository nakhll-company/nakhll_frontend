// node libraries
import styles from './specialDiscount.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const SpecialDiscount = () => {
    return (
        <div className={styles.wrapper}>
            <Image src="/image/game/no-1.jpg" layout="fill"
                objectFit="cover"
            />
            <Link href="/product/?ap=https://nakhll.com/api/v1/product/most-sold/">
                <a>
                    محصولات پر تخفیف
                </a>
            </Link>
        </div>
    );
}
// export
export default SpecialDiscount;