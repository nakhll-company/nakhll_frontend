// node libraries
import Image from 'next/image';
// style
import styles from '../../styles/components/shopLayout/shopLayout.module.scss';

function ShopLayout({ children }) {
    return (
        <div>
            <header className={styles.headerWrapper}>
                <Image src="/logoCart.png" alt="logo nakhll" width="400px" height="110px" />
            </header>
            <main className={styles.mainContent}>
                {children}
            </main>
            <footer className={styles.footerWrapper}>
                <h2>footer</h2>
            </footer>
        </div>
    );
}
// export
export default ShopLayout;