import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import React from "react";
import s from "./InputLanding.module.scss";
function InputLanding() {
  return (
    <div className={s.inputContainer}>
      <input
        className={s.input}
        placeholder="جست وجو در بیش از هزار فروشگاه..."
      />
      <Link href={`/search`}>
        <a>
          <div className={s.iconContainer}>
            <FaSearch size="20px" />
          </div>
        </a>
      </Link>
    </div>
  );
}

export default InputLanding;
