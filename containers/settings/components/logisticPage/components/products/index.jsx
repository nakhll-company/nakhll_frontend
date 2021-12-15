import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ApiRegister } from "../../../../../../services/apiRegister/ApiRegister";
import CheckBoxProduct from "../checkBoxProduct";
import Search from "../search";

function Products() {
  const [products, setProducts] = useState({});
  const [productList, setProductList] = useState([]);
  const [searchedProduct, setSearchedProduct] = useState([]);
  const [wordSearch, setWordSearch] = useState("");
  const activeHojreh = useSelector((state) => state.User.activeHojreh);

  useEffect(() => {
    async function fetchData() {
      let dataUrl = `/api/v1/shop/${activeHojreh}/products/`;
      let response = await ApiRegister().apiRequest(
        null,
        "get",
        dataUrl,
        true,
        null
      );
      if (response.status == 200) {
        setProducts(response.data);
        setProductList(response.data.results);
        setSearchedProduct(response.data.results);
      }
    }
    fetchData();
  }, []);

  const _handel_search = (word) => {
    setWordSearch(word);

    let searchedArray = productList.filter((el) => el.Title.includes(word));
    setSearchedProduct(searchedArray);
  };
  return (
    <>
      <Search
        placeholder="جستجو محصول"
        onChange={(e) => _handel_search(e.target.value)}
      />
      {searchedProduct.map((e, index) => (
        <CheckBoxProduct key={index} title={e.Title} wordSearch={wordSearch} />
      ))}
    </>
  );
}

export default Products;
