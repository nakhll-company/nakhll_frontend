// node libraries
import { useState, Fragment } from "react";
import Assistent from "zaravand-assistent-number";
// methods
import { howManyPage } from "../methods/howManyPage";
import { paginationStructure } from "../../../utils/pagination";
// assistment
const _asist = new Assistent();

const DesktopFooter = ({ productList, getProduct, activeHojreh }) => {

    let [numberPage, setNumberPage] = useState(1);
    let pagination = paginationStructure(numberPage, howManyPage(productList.total_count, 50));

    return (
        <tr>
            <td colSpan={7}>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        {pagination.map((value, index) => {
                            return (
                                <Fragment key={index}>
                                    <li className={`page-item ${value.disabled && "disabled"}`}>
                                        {value.name === "اولین" && <a className="page-link" href="#" onClick={() => {
                                            setNumberPage(value.page);
                                            getProduct(activeHojreh, "", "", "", "", "", "", "", value.page);
                                        }}>اولین</a>}
                                    </li>
                                    <li className={`page-item ${value.disabled && "disabled"}`}>
                                        {value.name === "قبلی" && <a className="page-link" href="#" onClick={() => {
                                            setNumberPage(value.page);
                                            getProduct(activeHojreh, "", "", "", "", "", "", "", value.page);
                                        }}>قبلی</a>}
                                    </li>
                                    <li className={`page-item ${value.disabled && "disabled"}`} onClick={() => {
                                        setNumberPage(value.name);
                                        getProduct(activeHojreh, "", "", "", "", "", "", "", value.name);
                                    }}>
                                        {!isNaN(value.name) && <a className="page-link" href="#">{_asist.number(value.name)}</a>}
                                    </li>
                                    <li className={`page-item ${value.disabled && "disabled"}`}>
                                        {value.name === "..." && <a className="page-link" href="#">...</a>}
                                    </li>
                                    <li className={`page-item ${value.disabled && "disabled"}`} onClick={() => {
                                        setNumberPage(value.page);
                                        getProduct(activeHojreh, "", "", "", "", "", "", "", value.page);
                                    }}>
                                        {value.name === "بعدی" && <a className="page-link" href="#">بعدی</a>}
                                    </li>
                                    <li className={`page-item ${value.disabled && "disabled"}`} onClick={() => {
                                        setNumberPage(value.page);
                                        getProduct(activeHojreh, "", "", "", "", "", "", "", value.page);
                                    }}>
                                        {value.name === "آخرین" && <a className="page-link" href="#">آخرین</a>}
                                    </li>
                                </Fragment>
                            )
                        })}
                    </ul>
                </nav>
            </td>
        </tr>
    );
}
// export
export default DesktopFooter