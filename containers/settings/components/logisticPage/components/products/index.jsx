import { useState } from "react";
import _ from "lodash";
import CheckBoxProduct from "../checkBoxProduct";
import Search from "../search";
import BtnSetting from "../btnSetting";
import { ApiRegister } from "../../../../../../services/apiRegister/ApiRegister";

function Products({ ProductsShop, setProductsShop, changePage, wichIdScope }) {
  const [productList, setProductList] = useState(ProductsShop);
  const [searchedProduct, setSearchedProduct] = useState(ProductsShop);
  const [wordSearch, setWordSearch] = useState("");

  const _handel_search = (word) => {
    setWordSearch(word);

    let searchedArray = productList.filter((el) => el.Title.includes(word));
    setSearchedProduct(searchedArray);
  };

  const _handel_selected_id_product = (data) => {
    let arrayHelpProducts = [...productList];
    let arrayHelpSearch = [...searchedProduct];
    console.log(`data`, data);
    data.is_checked = !data.is_checked;
    console.log(`data`, data);

    var indexProduct = _.findIndex(arrayHelpSearch, { ID: data.ID });
    var indexSearchProduct = _.findIndex(arrayHelpProducts, { ID: data.ID });

    console.log(`indexProduct`, indexProduct);
    console.log(`indexSearchProduct`, indexSearchProduct);
    // Replace item at index using native splice
    arrayHelpProducts.splice(indexProduct, 1, data);
    arrayHelpSearch.splice(indexSearchProduct, 1, data);
    setProductList(arrayHelpProducts);
    // setProductsShop(arrayHelpProducts);
    setSearchedProduct(arrayHelpSearch);
  };
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
  const _handel_send_selected_cities = async () => {
    let arrayForSend = [];
    let arraySelectedCities = productList.filter((el) => el.is_checked);
    arraySelectedCities.map((el) => {
      arrayForSend.push(el.ID);
    });

    console.log(`arraySelectedCities`, arraySelectedCities);
    console.log(`arrayForSend `, arrayForSend);
    let response = await ApiRegister().apiRequest(
      {
        products: arrayForSend,
      },
      "PATCH",
      `/api/v1/logistic/shop-logistic-unit-constraint-parameter/${wichIdScope}/`,
      true,
      ""
    );
    changePage();
    // console.log(`response`, response);
    // if (response.status == 200) {
    //   // changePage();
    // }
  };

  return (
    <>
      <Search
        placeholder="جستجو محصول"
        onChange={(e) => _handel_search(e.target.value)}
      />
      <div className="d-flex justify-content-center pt-2 pb-2">
        <nav aria-label="Page navigation">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link bg-info" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link " href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
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
            id={`Check_${index}_Default`}
            onClick={() => _handel_selected_id_product(el)}
            checked={el.is_checked}
          />
          <label
            style={{
              marginRight: "25px",
              color: "#000000A1",
              cursor: "pointer",
            }}
            htmlFor={`Check_${index}_Default`}
          >
            {getHighlightText(el.Title, wordSearch)}
          </label>
        </div>
      ))}

      <BtnSetting onClick={_handel_send_selected_cities} title="مرحله بعد" />
    </>
  );
}

export default Products;
