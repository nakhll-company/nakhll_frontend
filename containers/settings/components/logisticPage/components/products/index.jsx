// node libraries
// import _ from "lodash";
import React from "react";
import { useEffect, useState } from "react";
// components
import Search from "../search";
import BtnSetting from "../btnSetting";
import { XIcon } from "@heroicons/react/solid";

function Products({
  ProductsShop,
  handleUpdateDataScope,
  move = true,
  title = "مرحله بعد",
}) {
  const [wordSearch, setWordSearch] = useState("");
  const [productList, setProductList] = useState(ProductsShop);

  const [searchedProduct, setSearchedProduct] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);

  const handelSearch = (word) => {
    if (word == "") {
      setSearchedProduct([]);
      return;
    }
    setWordSearch(word);
    const searchedArray = productList.filter((el) => el.Title.includes(word));
    setSearchedProduct(searchedArray);
  };

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
    handleUpdateDataScope(
      {
        products: selectedProduct,
      },
      move
    );
  };
  const handleCheck = (event, data) => {
    if (event.target.checked) {
      data.is_checked = true;
      setSelectedProduct([...selectedProduct, data]);
      const removedList = productList.filter(
        (item) => item.Title != data.Title
      );
      setProductList(removedList);
      setSearchedProduct(removedList);
    }
  };
  const handleCheckInSearch = (event, data) => {
    if (event.target.checked) {
      data.is_checked = true;
      setSelectedProduct([...selectedProduct, data]);
      const removedList = productList.filter(
        (item) => item.Title != data.Title
      );
      setProductList(removedList);
    } else {
      data.is_checked = false;
      const removedList = selectedProduct.filter(
        (item) => item.Title != data.Title
      );
      setSelectedProduct(removedList);

      setProductList([...productList, data]);
    }
  };
  const deleteProduct = (data) => {
    data.is_checked = false;
    const removedList = selectedProduct.filter(
      (item) => item.Title != data.Title
    );
    setSelectedProduct(removedList);
    setProductList([...productList, data]);
  };

  useEffect(() => {}, []);

  return (
    <>
      <div className="">
        {selectedProduct.map((el) => (
          <span
            key={el}
            className="relative inline-block px-2 py-1 pl-4 m-1 rounded-lg shadow-md bg-emerald-300 "
          >
            {el.Title}
            <XIcon
              onClick={() => deleteProduct(el)}
              className="absolute h-[15px] hover:scale-105 text-red-500 cursor-pointer -left-1 -top-2 "
            />
          </span>
        ))}
      </div>
      <Search
        placeholder="جستجو محصول"
        onChange={(e) => handelSearch(e.target.value)}
      />
      <BtnSetting onClick={handelSendSelectedCities} title={title} />
      {!!searchedProduct.length && (
        <div className="relative p-2 my-2 border-2 border-gray-900 rounded-md shadow-lg bg-emerald-200">
          <h4 className="my-2 font-bold text-center text-gray-600 ">
            نتایج جستجو:
          </h4>
          <div
            className="absolute top-5 left-5 "
            onClick={() => setSearchedProduct([])}
          >
            <XIcon className="h-10 text-red-500 cursor-pointer hover:scale-95" />
          </div>
          <div className="">
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
                  onChange={(event) => handleCheckInSearch(event, el)}
                />
                <span className="mr-6 font-bold text-gray-600 cursor-pointer ">
                  {getHighlightText(el.Title, wordSearch)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {productList.map((el) => {
        if (!el.is_checked) {
          return (
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
          );
        }
      })}
    </>
  );
}

export default Products;
