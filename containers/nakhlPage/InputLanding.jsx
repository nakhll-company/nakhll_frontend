// node libraries
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { FaSearch } from "react-icons/fa";
// methods
import { handelSearch,getAllShops } from "../../api/header";
import BoxSearch from "../../components/shopLayout/header/boxSearch";
// style
import s from "./InputLanding.module.scss";

function InputLanding() {

  const router = useRouter();
  const [shopsName, setShopsName] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [searchShops, setSearchShops] = useState([]);

  return (
    <div style={{position:'relative'}}  >
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
            onClick={async () => {
              if (shopsName.length == 0) {
                const getShopsName = await getAllShops(shopsName);
                setShopsName(getShopsName);
              }
            }}
            onChange={(el) => {
              setInputSearch(el.target.value);
              const searchedShop = handelSearch(el.target.value, shopsName);
              setSearchShops(searchedShop);
            }}
            placeholder="جست وجو در بیش از هزار فروشگاه..."
          />
          <Link href={inputSearch !== "" ? `/search?q=${inputSearch}` : ""}>
            <a>
              <div className={s.iconContainer}>
                <FaSearch size="20px" />
              </div>
            </a>
          </Link>
        </div>
      </form>
      <div className={s.wrapBox} >
      {searchShops.length > 0 && (
        <BoxSearch list={searchShops} word={inputSearch} />
      )}
      </div>
    </div >
  );
}

export default InputLanding;
