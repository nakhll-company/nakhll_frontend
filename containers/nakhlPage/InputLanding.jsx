import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import s from "./InputLanding.module.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
function InputLanding() {
  const router = useRouter();
  const [inputSearch, setInputSearch] = useState("");
  useEffect(() => {
    console.log("inputSearch :>> ", inputSearch);
  }, [inputSearch]);

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
