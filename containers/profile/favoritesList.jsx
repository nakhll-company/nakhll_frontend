// node librares
import { useState, useEffect, Fragment } from 'react';
import Assistent from "zaravand-assistent-number";
// components
import ProductCart from '../../components/ProductCart/ProductCard';
// methods
import { getFavoritesList } from './methods/getFavoritesList';
// scss
import styles from './scss/favoritesList.module.scss';
/**
 * favorites List in profile
 */
const _asist = new Assistent();

const FavoritesList = () => {
    const [list, setList] = useState({ product: [] });
    async function fetch() {
        await getFavoritesList(setList);
    }
    useEffect(async () => {
        await fetch();
    }, []);
    return (
        <div className={styles.main}>
            <h1>لیست علاقه مندی ها</h1>
            <div className="d-flex flex-wrap">
                {list.product.length > 0 && list.product.map((value, index) => {
                    return (
                        <Fragment key={index}>
                            <ProductCart padding={2} product={{
                                id: value.id,
                                imageUrl: value.image_thumbnail_url,
                                url: `/product/${value.slug}`,
                                title: value.title,
                                chamberTitle: value.shop.title,
                                chamberUrl: `/hojreh/${value.shop.slug} `,
                                discount: value.discount,
                                price: value.price / 10,
                                discountNumber: value.old_price / 10,
                                city: value.shop.city,
                                is_advertisement: value.is_advertisement,
                                iconClose: true
                            }} />

                        </Fragment>
                    );
                })}
            </div>
        </div>
    );
}
// export
export default FavoritesList;