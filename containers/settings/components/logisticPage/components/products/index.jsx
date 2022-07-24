// node libraries
// import _ from "lodash";
import React from "react";
import { useEffect, useState } from "react";
// components
import Search from "../search";
import BtnSetting from "../btnSetting";

function Products({
  ProductsShop,
  handleUpdateDataScope,
  move = true,
  title = "مرحله بعد",
}) {
  console.log("ProductsShop :>> ", ProductsShop);
  const [wordSearch, setWordSearch] = useState("");
  const [productList, setProductList] = useState(ProductsShop);

  const [searchedProduct, setSearchedProduct] = useState(ProductsShop);
  const [selectedProduct, setSelectedProduct] = useState([]);

  const handelSearch = (word) => {
    setWordSearch(word);
    const searchedArray = productList.filter((el) => el.Title.includes(word));
    setSearchedProduct(searchedArray);
  };

  // function for select checkbox and
  // const handelSelectedIdProduct = (data) => {
  //   const arrayHelpProducts = [...productList];
  //   const arrayHelpSearch = [...searchedProduct];
  //   data.is_checked = !data.is_checked;
  //   const indexProduct = _.findIndex(arrayHelpSearch, { ID: data.ID });
  //   const indexSearchProduct = _.findIndex(arrayHelpProducts, { ID: data.ID });
  //   // Replace item at index using native splice
  //   arrayHelpProducts.splice(indexProduct, 1, data);
  //   arrayHelpSearch.splice(indexSearchProduct, 1, data);
  //   setProductList(arrayHelpProducts);
  //   setSearchedProduct(arrayHelpSearch);
  // };
  // function for highlight search
  const getHighlightText = (title, wordSearch) => {
    const startIndex = title.indexOf(wordSearch);
    return startIndex !== -1 ? (
      <span>
        {title.substring(0, startIndex)}
        <span style={{ color: "#02b7ff" }}>
          {title.substring(startIndex, startIndex + wordSearch.length)}
        </span>
        {title.substring(startIndex + wordSearch.length)}
      </span>
    ) : (
      <span>{title}</span>
    );
  };

  // function for send selected cities
  const handelSendSelectedCities = async () => {
    const arrayForSend = [];
    const arraySelectedCities = productList.filter((el) => el.is_checked);
    arraySelectedCities.map((el) => {
      arrayForSend.push(el.ID);
    });
    handleUpdateDataScope(
      {
        products: arrayForSend.length > 0 ? arrayForSend : [],
      },
      move
    );
  };
  const handleCheck = (event, data) => {
    console.log("event :>> ", event.target);
    console.log("data :>> ", data);
    if (event.target.checked) {
      data.is_checked = true;
      setSelectedProduct([...selectedProduct, data]);

      setProductList(productList.filter((item) => item.ID != data.ID));
    }
    // let updatedList = [...checked];
    // if (event.target.checked) {
    //   updatedList = [...checked, event.target.value];
    // } else {
    //   updatedList.splice(checked.indexOf(event.target.value), 1);
    // }
    // setChecked(updatedList);
  };

  useEffect(() => {}, []);

  return (
    <>
      <div className="">
        {selectedProduct.map((el) => (
          <span
            key={el}
            className="inline-block px-2 py-1 m-1 rounded-lg shadow-md bg-emerald-300 "
          >
            {el.Title}
          </span>
        ))}
      </div>
      <Search
        placeholder="جستجو محصول"
        onChange={(e) => handelSearch(e.target.value)}
      />
      <BtnSetting onClick={handelSendSelectedCities} title={title} />

      {searchedProduct.map((el) => (
        <div
          key={el.ID}
          style={{ marginBottom: "16px" }}
          className="form-check"
        >
          <input
            style={{ float: "right", cursor: "pointer" }}
            className="form-check-input"
            type="checkbox"
            onChange={(event) => handleCheck(event, el)}
          />
          <span className="mr-6 text-gray-600 cursor-pointer ">
            {getHighlightText(el.Title, wordSearch)}
          </span>
        </div>
      ))}
    </>
  );
}

export default Products;
