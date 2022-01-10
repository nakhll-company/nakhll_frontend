// node libraries
import Link from "next/link";
import Image from "next/image";
import Assistent from "zaravand-assistent-number";
// methods
import { addToCart } from "./methods/addToCart";
import { addToFavoritesList } from "./methods/addToFavotitesList";
import { deleteFromFavoritesList } from "./methods/deleteFromFavoritesList";
// scss
import styles from "./ProductCard.module.scss";
import { ApiRegister } from "../../services/apiRegister/ApiRegister";

const _asist = new Assistent();

const ProductCard = ({
  userData,
  sm = 6,
  md = 5,
  lg = 4,
  xl = 3,
  xs = 6,
  col,
  padding,
  _blank = false,
  dataProduct,
}) => {
  console.log(`dataProduct`, dataProduct);

  let product = {
    id: dataProduct.ID,
    imageUrl: dataProduct.Image_medium_url,
    url: `/shop/${dataProduct.FK_Shop.slug}/product/${dataProduct.Slug}/`,
    title: dataProduct.Title,
    chamberTitle: dataProduct.FK_Shop ? dataProduct.FK_Shop.title : "",
    chamberUrl: dataProduct.FK_Shop ? `/shop/${dataProduct.FK_Shop.slug} ` : "",

    discount: dataProduct.discount,
    price: dataProduct.Price / 10,
    discountNumber: dataProduct.OldPrice / 10,
    city: dataProduct.FK_Shop && dataProduct.FK_Shop.state,
    is_advertisement: dataProduct.is_advertisement,
  };
  let cardBadge = (
    <>
      <div
        className={styles._product_card_badge}
        type="button"
        style={{ bottom: ".75rem" }}
        onClick={() => {
          addToFavoritesList(product.id);
        }}
      >
        <i className="far fa-bookmark" />
      </div>
    </>
  );

  let cardImg = (
    <Image
      layout="responsive"
      height={100}
      width={100}
      src={product.imageUrl}
      className={`card-img-top _product_card_rounded animationCart ${
        product.unavailable && "_unavailable_product"
      }`}
      alt={product.title}
    />
  );
  let campBadge = (
    <>
      <div
        className={styles._product_card_camp_badge}
        type="button"
        style={{ bottom: "-7px", right: "-5px" }}
      >
        <Image
          layout="fixed"
          height={100}
          width={100}
          src="/image/mahsol.svg"
          alt="camp"
        />
      </div>
    </>
  );

  const handel_webhook = async () => {
    let data = {};
    if (userData !== undefined) {
      data = {
        content: `:teddy_bear: `,
        embeds: [
          {
            color: 14811281,
            author: {
              name: `\n${userData.user.first_name} ${userData.user.last_name}\n${userData.user.username}`,
            },
          },

          {
            title: product.title,
            description: "",
            url: `https://nakhll.com/${product.url}`,
            color: 5814783,

            footer: {
              text: "دکمه کوچک",
            },
            image: {
              url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fpacks%2Fmedia%2Fcomponents%2Fglobal%2Fsearch-explore-nav%2Fimg%2Fvectors%2Fterm-bg-1-666de2d941529c25aa511dc18d727160.jpg&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2F&tbnid=l5RllJHFLw5NyM&vet=12ahUKEwiAuZn85fL0AhUP8BoKHeDmDx0QMygDegUIARCrAQ..i&docid=LOSptVP0p_ZwUM&w=550&h=549&itg=1&q=image&ved=2ahUKEwiAuZn85fL0AhUP8BoKHeDmDx0QMygDegUIARCrAQ",
            },
            thumbnail: {
              url: "https://nakhll.com/shop/yaskala/product/yas-steelon-storm-w/",
            },
          },
          {
            color: 11403008,
            author: {
              name: userData.big_city,
            },
          },
        ],
      };
    } else {
      data = {
        content: `:teddy_bear: `,
        embeds: [
          {
            title: product.title,
            description: "",
            url: `https://nakhll.com/${product.url}`,
            color: 5814783,

            footer: {
              text: "دکمه کوچک",
            },
            image: {
              url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fpacks%2Fmedia%2Fcomponents%2Fglobal%2Fsearch-explore-nav%2Fimg%2Fvectors%2Fterm-bg-1-666de2d941529c25aa511dc18d727160.jpg&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2F&tbnid=l5RllJHFLw5NyM&vet=12ahUKEwiAuZn85fL0AhUP8BoKHeDmDx0QMygDegUIARCrAQ..i&docid=LOSptVP0p_ZwUM&w=550&h=549&itg=1&q=image&ved=2ahUKEwiAuZn85fL0AhUP8BoKHeDmDx0QMygDegUIARCrAQ",
            },
            thumbnail: {
              url: "https://nakhll.com/shop/yaskala/product/yas-steelon-storm-w/",
            },
          },
        ],
      };
    }

    let response = await ApiRegister().apiRequest(
      data,
      "post",
      `https://discord.com/api/webhooks/922069011955609671/i8FC-UEv6XnK-kMsgme7Y9xSl9X7Sr3gTPgA3jVZZelPMxoAyFSdsJPmTFXXZzy6qtkd`,
      false,
      ""
    );
  };

  return (
    <div
      className={`animationCartParent ${
        col
          ? `col-${col}`
          : `col-${xs} col-sm-${sm} col-md-${md} col-lg-${lg} col-xl-${xl}`
      } ${padding ? `px-${padding}` : ""} mb-3`}
    >
      {product.iconClose && (
        <span
          style={{
            position: "relative",
            width: "0px",
            height: "0px",
            cursor: "pointer",
          }}
          onClick={() => {
            deleteFromFavoritesList(product.id);
          }}
        >
          <i
            className="fa fa-times-circle"
            style={{
              position: "absolute",
              fontSize: "28px",
              color: "#4f4f4f",
              zIndex: "100",
            }}
          ></i>
        </span>
      )}
      <div className={`card ${styles._product_card} _product_card_rounded p-2`}>
        <div className={styles.paterImage}>
          {cardBadge}
          {false && campBadge}
          <Link href={product.url}>
            <a className={styles.links}>{cardImg}</a>
          </Link>
        </div>

        <div
          className={`card-body mt-2 p-1 ${
            product.unavailable && "_unavailable_product"
          }`}
        >
          <div className=" mb-3">
            <Link href={product.url}>
              <a
                style={{ fontWeight: "bold" }}
                className="_product_card_title text-truncate "
              >
                {product.title}
              </a>
            </Link>
          </div>
          <div className="_product_card_city text-truncate mb-3">
            <span className="_product_card_subtitle">{product.city}</span>
            {product.city && <i className="fa fa-angle-left px-1"></i>}
            <Link href={product.chamberUrl}>
              <a
                title={product.chamberTitle}
                className="_product_card_subtitle"
              >
                {product.chamberTitle}
              </a>
            </Link>
          </div>
          {product.discountNumber !== 0 && (
            <div className={`_product_card_discount  ${styles.discount_badge}`}>
              {_asist.number(product.discount)}%
            </div>
          )}
          {product.is_advertisement && (
            <div className={styles.Ads_badge}>آگهی</div>
          )}

          <hr style={{ marginBottom: "5px" }} />
          <div className="_product_card_price mb-2">
            <div>
              <button
                aria-label="خرید"
                className={`btn ${styles._product_card_add_to_cart}`}
                onClick={async () => {
                  await addToCart(product.id);
                  handel_webhook();
                }}
              >
                <i className="fas fa-plus" />
              </button>
            </div>
            <div
              className="_product_card_price_number"
              style={{ display: "flex", flexDirection: "column" }}
            >
              {product.unavailable ? (
                <span>ناموجود</span>
              ) : (
                <>
                  <span className="_product_card_orginal_number">
                    {_asist.PSeparator(product.price)}
                  </span>
                  <span
                    className="_product_card_discount_number"
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      minHeight: "15px",
                    }}
                  >
                    {product.discountNumber !== 0 &&
                      _asist.PSeparator(product.discountNumber)}
                  </span>
                </>
              )}
            </div>
            <span
              className="_product_card_toman"
              style={{ fontSize: ".75rem", transform: "rotate(270deg)" }}
            >
              تومان
            </span>
          </div>
          {false && (
            <div className="_product_card_progressbar">
              <>
                <div className="_sales_progressbar">
                  <div
                    className="_sales_progressbar_passed"
                    style={{ width: `${product.sales}%` }}
                  />
                </div>
                <div className="mt-1">
                  <p className="_sales_progressbar_text">
                    %{_asist.number(product.sales)} فروش رفته
                  </p>
                </div>
              </>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
