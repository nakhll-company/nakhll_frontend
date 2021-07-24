import styles from "../../styles/components/layout/MenuMobile.module.scss";
import Link from "next/link";

function MenuMobile() {
  return (
    <div className={styles.menu_mobile}>
      <Link className="menu-card-item-menu" href="/fp" passHref={true}>
        <span
          className={styles.menu_card_item_menu}
          onClick={(e) => {
            e.currentTarget.classList.add("active");
          }}
        >
          <i className="fas fa-home" style={{ fontSize: "20px" }}></i>
          <h2 style={{ fontSize: "13px" }}>داشبورد</h2>
        </span>
      </Link>
      <Link
        className="menu-card-item-menu"
        href="/fp/order/completed"
        passHref={true}
      >
        <span
          className={styles.menu_card_item_menu}
          onClick={(e) => {
            e.currentTarget.classList.add("active");
          }}
        >
          <i
            className="fas fa-shopping-basket"
            style={{ fontSize: "20px" }}
          ></i>
          <h2 style={{ fontSize: "13px" }}>سفارشات</h2>
        </span>
      </Link>
      <Link className="menu-card-item-menu" href="/fp/product" passHref={true}>
        <span
          className={styles.menu_card_item_menu}
          onClick={(e) => {
            e.currentTarget.classList.add("active");
          }}
        >
          <i className="fas fa-box-open " style={{ fontSize: "20px" }}></i>
          <h2 style={{ fontSize: "13px" }}>محصولات</h2>
        </span>
      </Link>
      <Link className="menu-card-item-menu" href="/fp/setting" passHref={true}>
        <span
          className={styles.menu_card_item_menu}
          onClick={(e) => {
            e.currentTarget.classList.add("active");
          }}
        >
          <i style={{ fontSize: "20px" }} className="fas fa-user-cog"></i>
          <h2 style={{ fontSize: "13px" }}>تنظیمات</h2>
        </span>
      </Link>
      <Link
        className="menu-card-item-menu"
        href="/fp/store/create"
        passHref={true}
      >
        <span
          className={styles.menu_card_item_menu}
          onClick={(e) => {
            e.currentTarget.classList.add("active");
          }}
        >
          <i className="fas fa-windows" style={{ fontSize: "20px" }}></i>
          <h2 style={{ fontSize: "13px" }}>حجره</h2>
        </span>
      </Link>
    </div>
  );
}

export default MenuMobile;
