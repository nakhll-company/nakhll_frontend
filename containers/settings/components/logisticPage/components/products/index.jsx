import { useEffect, useState } from "react";
import _ from "lodash";
import CheckBoxProduct from "../checkBoxProduct";
import Search from "../search";
import BtnSetting from "../btnSetting";
import { ApiRegister } from "../../../../../../services/apiRegister/ApiRegister";
import { paginateFront } from "../../../../../../utils/paginateFrontSide";

function Products({
  ProductsShop,
  _handle_update_data_scope,
  move = true,
  title = "مرحله بعد",
}) {
  const [productList, setProductList] = useState(ProductsShop);
  const [searchedProduct, setSearchedProduct] = useState(ProductsShop);
  const [PaginatedPages, setPaginatedPages] = useState([]);
  const [wordSearch, setWordSearch] = useState("");

  const [perPage, setPerPage] = useState(50);
  const [currentPage, setCurrentPage] = useState(1);
  const [allPages, setAllPages] = useState(
    _.range(Math.ceil(ProductsShop.length / 50))
  );

  const _handel_search = (word) => {
    setWordSearch(word);

    let searchedArray = productList.filter((el) => el.Title.includes(word));
    setSearchedProduct(searchedArray);
  };

  // function for select checkbox and

  const _handel_selected_id_product = (data) => {
    let arrayHelpProducts = [...productList];
    let arrayHelpSearch = [...searchedProduct];

    data.is_checked = !data.is_checked;

    var indexProduct = _.findIndex(arrayHelpSearch, { ID: data.ID });
    var indexSearchProduct = _.findIndex(arrayHelpProducts, { ID: data.ID });

    // Replace item at index using native splice
    arrayHelpProducts.splice(indexProduct, 1, data);
    arrayHelpSearch.splice(indexSearchProduct, 1, data);
    setProductList(arrayHelpProducts);

    setSearchedProduct(arrayHelpSearch);
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
  const _handel_send_selected_cities = async () => {
    let arrayForSend = [];
    let arraySelectedCities = productList.filter((el) => el.is_checked);
    arraySelectedCities.map((el) => {
      arrayForSend.push(el.ID);
    });
    _handle_update_data_scope(
      {
        products: arrayForSend.length > 0 ? arrayForSend : [],
      },
      0,
      move
    );
  };

  useEffect(() => {
    setSearchedProduct(paginateFront(ProductsShop, currentPage, perPage));
  }, [currentPage]);

  return (
    <>
      <Search
        placeholder="جستجو محصول"
        onChange={(e) => _handel_search(e.target.value)}
      />
      <div className="d-flex justify-content-center pt-2 pb-2">
        <nav style={{ cursor: "pointer" }} aria-label="Page navigation">
          <ul className="pagination">
            <li
              onClick={() => {
                if (currentPage > 1) {
                  setCurrentPage(currentPage - 1);
                }
              }}
              className="page-item"
            >
              <div className="page-link">
                <span aria-hidden="true">&laquo;</span>
              </div>
            </li>

            <li className="page-item">
              <div className="page-link bg-info">{currentPage}</div>
            </li>
            <li
              onClick={() => {
                if (currentPage < allPages.length) {
                  setCurrentPage(currentPage + 1);
                }
              }}
              className="page-item"
            >
              <div className="page-link ">{currentPage + 1}</div>
            </li>
            <li
              onClick={() => {
                if (currentPage < allPages.length) {
                  setCurrentPage(currentPage + 1);
                }
              }}
              className="page-item"
            >
              <div className="page-link">{currentPage + 2}</div>
            </li>
            <li
              onClick={() => {
                if (currentPage < allPages.length) {
                  setCurrentPage(currentPage + 1);
                }
              }}
              className="page-item"
            >
              <div className="page-link" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </div>
            </li>
          </ul>
        </nav>
      </div>

      {searchedProduct.map((el, index) => (
        <div
          key={el.ID}
          style={{ marginBottom: "16px" }}
          className="form-check"
        >
          <input
            style={{ float: "right", cursor: "pointer" }}
            className="form-check-input"
            type="checkbox"
            id={`Check_${el.ID}_Default`}
            onChange={() => _handel_selected_id_product(el)}
            checked={el.is_checked}
          />
          <label
            style={{
              marginRight: "25px",
              color: "#000000A1",
              cursor: "pointer",
            }}
            htmlFor={`Check_${el.ID}_Default`}
          >
            {getHighlightText(el.Title, wordSearch)}
          </label>
        </div>
      ))}

      <BtnSetting onClick={_handel_send_selected_cities} title={title} />
    </>
  );
}

export default Products;
