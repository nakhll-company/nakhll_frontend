import Link from "next/link";
import styles from "../../styles/components/layout/MenuMobile.module.scss";

function MenuMobile() {
  return (
    <div className={styles.menu_mobile}>
      <Link className="menu-card-item-menu" href="/fp/product" passHref={true}>
        <a>
          <span
            className={styles.menu_card_item_menu}
            onClick={(e) => {
              e.currentTarget.classList.add("active");
            }}
          >
            <i className="fas fa-box-open mb-1" style={{ fontSize: "20px" }}></i>
            <h2 style={{ fontSize: "13px" }}>محصولات</h2>
          </span>
        </a>
      </Link>
      <Link
        className="menu-card-item-menu"
        href="/fp/order/completed"
        passHref={true}
      >
        <a>
          <span
            className={styles.menu_card_item_menu}
            onClick={(e) => {
              e.currentTarget.classList.add("active");
            }}
          >
            <i
              className="fas fa-shopping-basket mb-1"
              style={{ fontSize: "20px" }}
            ></i>
            <h2 style={{ fontSize: "13px" }}>سفارشات</h2>
          </span>
        </a>
      </Link>
      <Link className="menu-card-item-menu" href="/fp" passHref={true}>
        <a>
          <span
            className={styles.menu_card_item_menu}
            onClick={(e) => {
              e.currentTarget.classList.add("active");
            }}
          >
            <i className="fas fa-home mb-1" style={{ fontSize: "20px" }}></i>
            <h2 style={{ fontSize: "13px" }}>داشبورد</h2>
          </span>
        </a>
      </Link>
      <Link className="menu-card-item-menu" href="/fp/setting" passHref={true}>
        <a>
          <span
            className={styles.menu_card_item_menu}
            onClick={(e) => {
              e.currentTarget.classList.add("active");
            }}
          >
            <i style={{ fontSize: "20px" }} className="fas fa-user-cog mb-1"></i>
            <h2 style={{ fontSize: "13px" }}>تنظیمات</h2>
          </span>
        </a>
      </Link>
      <Link
        className="menu-card-item-menu"
        href="/fp/store/create"
        passHref={true}
      >
        <a>
          <span
            className={styles.menu_card_item_menu}
            onClick={(e) => {
              e.currentTarget.classList.add("active");
            }}
          >
            <i className="fas fa-cubes mb-1" style={{ fontSize: "24px" }}></i>
            <h2 style={{ fontSize: "13px" }}>قابلیت ها</h2>
          </span>
        </a>
      </Link>
    </div>
  );
}

export default MenuMobile;
