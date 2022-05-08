import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

import s from "./InputLanding.module.scss";

function InputLanding() {
  const router = useRouter();
  const [inputSearch, setInputSearch] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        router.push(`/search?q=${inputSearch}`);
      }}
    >
      <div className={s.inputContainer}>
        <input
          className={s.input}
          value={inputSearch}
          onChange={(el) => setInputSearch(el.target.value)}
          placeholder="جست وجو در بیش از هزار فروشگاه..."
        />
        {inputSearch !== "" && (
          <Link href={`/search?q=${inputSearch}`}>
            <a>
              <div className={s.iconContainer}>
                <FaSearch size="20px" />
              </div>
            </a>
          </Link>
        )}
      </div>
     </form>
  );
}

export default InputLanding;
