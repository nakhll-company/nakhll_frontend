import Head from "next/head";
import { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";

import { ApiRegister } from "../../services/apiRegister/ApiRegister";
import _ from "lodash";
import st from "./analyze.module.scss";
import Search from "../../containers/settings/components/logisticPage/components/search";

function Index() {
  const [Shops, setShops] = useState([]);
  const [searchedShop, setSearchedShop] = useState([]);
  const [countProduct, setCountProduct] = useState("");
  const [superShop, setSuperShop] = useState("");
  const [diedShop, setDiedShop] = useState("");
  const [isDes, setIsDes] = useState(false);
  const [optionStateShops, setOptionStateShops] = useState({});
  const [optionTreeMap, setOptionTreeMap] = useState({});

  const _handel_count_products = (Shops) => {
    let dataForTreMap = [];

    let num = 0;
    Shops.map((el) => {
      dataForTreMap.push({ name: el.shop, value: el.num });
      num += el.num;
    });
    let optionTwo = {
      series: [
        {
          type: "treemap",
          data: dataForTreMap,
        },
      ],
    };
    setOptionTreeMap(optionTwo);
    setCountProduct(num);
  };
  const _handel_status_shop = (shops) => {
    let diedShop = 0;
    let superShop = 0;
    shops.map((el) => {
      if (el.num > 30) {
        superShop += 1;
      }
      if (el.num < 5) {
        diedShop += 1;
      }
    });
    setSuperShop(superShop);
    setDiedShop(diedShop);
    let option = {
      title: {
        text: "وضعیت حجره داران",
        subtext: "براساس تعداد محصول",
        left: "center",
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        left: "left",
      },
      series: [
        {
          name: "بازار نخل",
          type: "pie",
          radius: "50%",
          data: [
            { value: diedShop, name: "حجره دار مرده" },
            { value: shops.length - diedShop - superShop, name: "حجره معمولی" },
            { value: superShop, name: "سوپر حجره" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
      color: ["#ee6666", "#73c0de", "#3ba272"],
    };
    setOptionStateShops(option);
  };
  const _handel_sort = () => {
    let array = [...Shops];
    let arraySort = [];
    if (!isDes) {
      arraySort = _.orderBy(array, "num", "desc");
      setIsDes(true);
    }
    if (isDes) {
      arraySort = _.orderBy(array, "num", "asc");
      setIsDes(false);
    }

    setSearchedShop(arraySort);
  };

  const _handel_search_shop = (word) => {
    let helpArray = Shops.filter((el) => el.shop.includes(word));
    setSearchedShop(helpArray);
  };

  const _handel_search_num_product = (word) => {
    if (word == "") {
      setSearchedShop(Shops);
    } else {
      let helpArray = Shops.filter((el) => el.num == word);
      setSearchedShop(helpArray);
    }
  };

  useEffect(() => {
    async function fetchData() {
      let response = await ApiRegister().apiRequest(
        null,
        "get",
        "https://nakhll.com/api/v1/util/shops/",
        false,
        ""
      );

      if (response.status == 200) {
        let shopArray = [];
        response.data.map((el) => {
          let oneShop = {
            shop: el.Slug,
            num: el.products.length,
          };
          shopArray.push(oneShop);
        });

        setShops(shopArray);
        setSearchedShop(shopArray);
        _handel_count_products(shopArray);
        _handel_status_shop(shopArray);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {/* <Head>
        <title>آنالیز</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="container pt-5">
        <div className={st.wrap_summery}>
          <span>تعداد حجره ها</span>
          <span>{Shops.length}</span>
          <span>تعداد کالاها</span>
          <span>{countProduct}</span>
        </div>
        <div
          style={{ background: "rgb(248, 222, 182)" }}
          className={st.wrap_summery}
        >
          <span style={{ color: "red" }}>
            {" "}
            حجره دار مرده
            <span style={{ fontSize: "12px", paddingRight: "5px" }}>
              زیر ۵ کالا
            </span>
          </span>
          <span style={{ color: "red" }}>{diedShop}</span>
          <span style={{ color: "green" }}>
            سوپر حجره
            <span style={{ fontSize: "12px", paddingRight: "5px" }}>
              بالای ۳۰ کالا
            </span>
          </span>
          <span style={{ color: "green" }}>{superShop}</span>
        </div>

        <div className={st.wrap_nemodar}>
          <ReactECharts
            option={optionStateShops}
            style={{ height: "500px", width: "100%", padding: "5px" }}
            opts={{ renderer: "svg" }} // use svg to render the chart.
          />
          <ReactECharts
            option={optionTreeMap}
            style={{ height: "500px", width: "100%", padding: "5px" }}
            opts={{ renderer: "svg" }} // use svg to render the chart.
          />
        </div>


        <div className={st.wrap_search}>
          <Search
            placeholder="جستجو حجره"
            onChange={(e) => _handel_search_shop(e.target.value)}
          />

          <Search
            placeholder="تعداد محصول"
            onChange={(e) => _handel_search_num_product(e.target.value)}
          />
        </div>

        <div className={st.wrap_table}>
          <table
            style={{ overflow: "hidden", borderRadius: "10px" }}
            className="table table-striped"
          >
            <thead>
              <tr>
                <th
                  style={{
                    overflow: "hidden",
                    borderTopRightRadius: "10px",
                    borderBottomRightRadius: "10px",
                  }}
                  scope="col"
                >
                  عنوان
                </th>
                <th scope="col">حجره</th>
                <th scope="col">
                  <div className="flex">
                    محصولات
                    <button
                      onClick={_handel_sort}
                      style={{ marginRight: "10px", cursor: "pointer" }}
                    >
                      <i className="fas fa-sort"></i>
                    </button>
                  </div>
                </th>
                <th
                  style={{
                    overflow: "hidden",
                    borderTopLeftRadius: "10px",
                    borderBottomLeftRadius: "10px",
                  }}
                  scope="col"
                >
                  وضعیت
                </th>
              </tr>
            </thead>
            <tbody style={{ borderTop: "none" }}>
              {searchedShop.map((el, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td style={{ cursor: "pointer" }}>
                    <a
                      href={` /shop/${el.shop}/`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {el.shop}
                    </a>
                  </td>
                  <td>{el.num}</td>
                  <td
                    style={{
                      background:
                        el.num < 5 ? "red" : el.num > 30 ? "green" : null,
                    }}
                  ></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}
    </>
  );
}

export default Index;
