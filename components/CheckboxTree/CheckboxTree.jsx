// node libraries
import CheckboxTree from "react-checkbox-tree";
import React, { useEffect, useState, Fragment } from "react";
// components
import TitleLiner from "../../containers/settings/components/titleLiner";
// methods
import { allCites } from "../../utils/allCities";
import diviedNumber from "../../utils/diviedNumber";

function CheckboxTreeCities({ checkedCity, setCheckedCity, citiesInput }) {
  const [allOfCity, setAllOfCity] = useState([]);
  const [expandCity, setExpandCity] = useState([]);
  const [selectCity, setSelectCity] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectState, setSelectState] = useState([]);
  const [selectBigCity, setSelectBigCity] = useState([]);
  const [forDontRunFirst, setForDontRunFirst] = useState(1);
  const [searchCities, setSearchCities] = useState(allCites);
  const [isCheckedAllCities, setIsCheckedAllCities] = useState(true);

  // function for add state and label
  const _handel_Add_state = (target) => {
    // click on State
    if (!target.isChild) {
      if (target.checked) {
        setSelectState([...selectState, target]);
      } else {
        const copyState = [...selectState];
        const newState = copyState.filter((e) => e.value !== target.value);
        setSelectState(newState);
      }
    }

    // click on BigCity
    if (target.isChild && !target.isLeaf) {
      const copyBigCity = [...selectBigCity];
      const newBigCity = copyBigCity.filter((el) => el.value !== target.value);
      if (copyBigCity.length == newBigCity.length) {
        setSelectBigCity([...selectBigCity, target]);
      } else {
        setSelectBigCity(newBigCity);
      }
    }

    // click on City
    if (target.isLeaf) {
      const copyCity = [...selectCity];
      const newCity = copyCity.filter((el) => el.value !== target.value);
      if (copyCity.length == newCity.length) {
        setSelectCity([...selectCity, target]);
      } else {
        setSelectCity(newCity);
      }
    }
  };

  useEffect(() => {
    const _handel_for_show_all_city = () => {
      let finalCities = [];
      let cities_from_stat = [];
      let false_cities_from_BigCity = [];
      let true_cities_from_BigCity = [];
      let false_cities_from_cities = [];
      let true_cities_from_cities = [];

      selectState.map((stats) => {
        stats.children.map((BigCity) =>
          BigCity.children.map(
            (city) => (cities_from_stat = [...cities_from_stat, city])
          )
        );
      });

      selectBigCity.map((bigCity) => {
        if (bigCity.checked) {
          const trueCopyArray = bigCity.children.map((city) => city);
          true_cities_from_BigCity = [
            ...true_cities_from_BigCity,
            ...trueCopyArray,
          ];
        } else {
          const falseCopyArray = bigCity.children.map((city) => city);
          false_cities_from_BigCity = [
            ...false_cities_from_BigCity,
            ...falseCopyArray,
          ];
        }
      });

      selectCity.map((city) => {
        if (city.checked) {
          true_cities_from_cities = [...true_cities_from_BigCity, city];
        } else {
          false_cities_from_cities = [...false_cities_from_cities, city];
        }
      });

      // MIXING ALL STATE
      const combineTrueCities = [
        ...cities_from_stat,
        ...true_cities_from_BigCity,
        ...true_cities_from_cities,
      ];
      const combineFalseCities = [
        ...false_cities_from_BigCity,
        ...false_cities_from_cities,
      ];

      finalCities = combineTrueCities.filter(
        (el) => !combineFalseCities.includes(el)
      );
      if (forDontRunFirst > 1) {
        setAllOfCity(finalCities);
      } else {
        setAllOfCity(citiesInput || []);
      }
      setForDontRunFirst(2);
    };

    _handel_for_show_all_city();
  }, [citiesInput, forDontRunFirst, selectState, selectBigCity, selectCity]);

  // function for Delete The State
  const _handel_Delete_State = (id) => {
    const copyState = [...allOfCity];
    const ArrayDeleteState = copyState.filter((e) => e.value !== id);
    const stateWithoutLabel = ArrayDeleteState.map((item) => item.value);

    setAllOfCity(ArrayDeleteState);
    setCheckedCity(stateWithoutLabel);
  };

  // search from tree
  const handelSearch = (word) => {
    if (word == "") {
      setSearchCities(allCites);
      setExpandCity([]);
    } else {
      const secoundLevelSearch = [];
      const selectIDForExpand = [];
      allCites.map((States) => {
        const selectedBigCity = [];
        States.children.map((BigCity) => {
          if (BigCity.label.includes(word)) {
            selectedBigCity.push(BigCity);
          }
        });
        if (selectedBigCity.length > 0) {
          secoundLevelSearch.push({
            value: States.value,
            label: States.label,
            children: selectedBigCity,
          });
          selectIDForExpand.push(States.value);
        }
      });
      setSearchCities(secoundLevelSearch);
      setExpandCity(selectIDForExpand);
    }
  };

  //  if checked cities isnot emety select checkbox select cities
  useEffect(() => {
    if (checkedCity && checkedCity.length > 1) {
      setShowModal(true);
      setIsCheckedAllCities(false);
    }
  }, [checkedCity]);

  return (
    <>
      <TitleLiner title=" محدوده ارسال" />
      <form>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            checked={isCheckedAllCities}
            onClick={() => {
              setIsCheckedAllCities(true);
              setShowModal(false);
              setAllOfCity([]);
              setSelectState([]);
              setCheckedCity([]);
            }}
            style={{ cursor: "pointer" }}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            به سراسر ایران
          </label>
        </div>
        <div
          className="form-check"
          style={{ position: "relative", marginTop: "15px" }}
        >
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            onClick={() => {
              setShowModal(true);
              setIsCheckedAllCities(false);
            }}
            style={{ cursor: "pointer" }}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            انتخاب شهرها
          </label>
        </div>
      </form>

      {showModal && (
        <>
          <input
            style={{
              padding: "10px",
              width: "100%",
              border: "1px solid  #CED4DA",
              margin: "10px 0",
              borderRadius: "10px",
            }}
            type="search"
            placeholder="جستجو بر اساس شهرستان"
            onChange={(e) => handelSearch(e.target.value)}
          />

          <div
            style={{
              position: "sticky",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#e0e0e0",
              marginTop: "15px",
              overflowY: "auto",
              padding: "15px",
              borderRadius: "20px",
            }}
          >
            <div style={{ marginRight: "20px" }}>
              <CheckboxTree
                nativeCheckboxes={true}
                // direction="rtl"

                icons={{
                  expandClose: (
                    <span
                      className="fas fa-angle-left"
                      style={{ fontSize: "15px" }}
                    />
                  ),
                  parentClose: <span />,
                }}
                nodes={searchCities}
                checked={checkedCity}
                expanded={expandCity}
                onCheck={(e, targetNode) => {
                  setCheckedCity(e);
                  _handel_Add_state(targetNode);
                }}
                onExpand={(e) => {
                  setExpandCity(e);
                }}
              />
            </div>
          </div>
        </>
      )}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          borderBottom: "2ps solid #ccc",
        }}
      ></div>
      {/* Show City */}
      {allOfCity.length > 0 && (
        <div
          style={{
            display: "block",
            marginBottom: "5px",
            marginTop: "15px",
          }}
        >
          شهرهای انتخابی ( {diviedNumber(allOfCity.length)}) :{" "}
        </div>
      )}
      <div
        style={{
          display: "flex",

          flexWrap: "wrap",
        }}
      >
        {allOfCity.map((e) => (
          <Fragment key={e.value}>
            <div style={{ display: "flex" }}>
              {/* {e.children.length &&} */}

              <>
                <h4
                  style={{
                    backgroundColor: "#224e82",
                    padding: "2px 10px",
                    color: "#fff",
                    margin: "0px",
                    marginLeft: "1px",
                    borderRadius: "2px",
                    marginTop: "10px",
                    fontSize: "15px",
                  }}
                >
                  {e.label}
                </h4>
                <i
                  style={{
                    fontSize: "15px",
                    marginLeft: "5px",
                    cursor: "pointer",
                  }}
                  onClick={() => _handel_Delete_State(e.value)}
                  className="fas fa-times"
                ></i>
              </>
            </div>
          </Fragment>
        ))}
      </div>
    </>
  );
}

export default CheckboxTreeCities;
