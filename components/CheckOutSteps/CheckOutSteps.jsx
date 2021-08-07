import React from "react";
import styles from "./CheckOutSteps.module.scss";

export default function CheckOutSteps() {
  return (
    <ul class={styles.checkout_steps}>
      <li class="is-active is-completed">
        <a class="c-checkout-steps__item-link">
          <div
            class={`${styles.step_item} ${""}`}
            data-title="اطلاعات ارسال"
          ></div>
        </a>
      </li>
      <li class=" ">
        <a class="c-checkout-steps__item-link js-shipping-timeline">
          <div class={`${styles.step_item} ${""}`} data-title="پرداخت"></div>
        </a>
      </li>
      <li class="">
        <div
          class={`${styles.step_item} ${""}`}
          data-title="اتمام خرید و ارسال"
        ></div>
      </li>
    </ul>
  );
}
