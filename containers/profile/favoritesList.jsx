import ProductCart from '../../components/ProductCart/ProductCard';
// scss
import styles from './scss/favoritesList.module.scss';
/**
 * favorites List in profile
 */
const FavoritesList = () => {
    return (
        <div className={styles.main}>
            <h1>لیست علاقه مندی ها</h1>
            <div className="d-flex">
                <ProductCart col="3" product={{
                    // imageUrl: value.image_thumbnail_url,
                    // url: `/productDetail/${value.slug}`,
                    title: "ماشین لباس شویی",
                    // chamberTitle: value.shop.title,
                    // chamberUrl: value.shop.url,
                    // discount: value.discount !== 0 ? _asist.PSeparator(value.discount) : "",
                    // price: _asist.PSeparator(value.price),
                    // discountNumber: value.discount !== 0 ? _asist.PSeparator(value.old_price) : "",
                    // city: value.shop.city,
                }} />
                <ProductCart col="3" product={{
                    title: "ماشین لباس شویی",
                }} />
                <ProductCart col="3" product={{
                    title: "ماشین لباس شویی",
                }} />
                <ProductCart col="3" product={{
                    title: "ماشین لباس شویی",
                }} />
            </div>
        </div>
    );
}
// export
export default FavoritesList;