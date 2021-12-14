import React, { useEffect, useState, Fragment } from "react";
import CheckboxTree from "react-checkbox-tree";
import { allCites } from "./data";
import Assistent from "zaravand-assistent-number";
import TitleLiner from "../../containers/settings/components/titleLiner";
const _asist = new Assistent();

function CheckboxTreeCities({ checkedCity, setCheckedCity, citiesInput }) {
  console.log(`allCites`, allCites);
  // STATE FOR SHOW MODAL
  const [showModal, setShowModal] = useState(false);
  const [forDontRunFirst, setForDontRunFirst] = useState(1);
  const [searchCities, setSearchCities] = useState(allCites);

  // ############################################

  // START THREE

  // ###########################################

  // for checkbox *tree
  // get from parent
  //   const [checkedCity, setCheckedCity] = useState([]);
  const [expandCity, setExpandCity] = useState([]);

  const [allOfCity, setAllOfCity] = useState([]);
  const [isCheckedAllCities, setIsCheckedAllCities] = useState(true);

  // State for save  State  && BigCity && City
  const [selectState, setSelectState] = useState([]);
  const [selectBigCity, setSelectBigCity] = useState([]);
  const [selectCity, setSelectCity] = useState([]);

  // function for add state and label

  const _handel_Add_state = (target) => {
    // he click on State
    if (!target.isChild) {
      if (target.checked) {
        setSelectState([...selectState, target]);
      } else {
        const copyState = [...selectState];
        const newState = copyState.filter((e) => e.value !== target.value);
        setSelectState(newState);
      }
    }

    // he click on BigCity

    if (target.isChild && !target.isLeaf) {
      const copyBigCity = [...selectBigCity];
      const newBigCity = copyBigCity.filter((el) => el.value !== target.value);
      if (copyBigCity.length == newBigCity.length) {
        setSelectBigCity([...selectBigCity, target]);
      } else {
        setSelectBigCity(newBigCity);
      }
    }

    // he click on City
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

  // function for show all city
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
        let trueCopyArray = bigCity.children.map((city) => city);
        true_cities_from_BigCity = [
          ...true_cities_from_BigCity,
          ...trueCopyArray,
        ];
      } else {
        let falseCopyArray = bigCity.children.map((city) => city);
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
    let combineTrueCities = [
      ...cities_from_stat,
      ...true_cities_from_BigCity,
      ...true_cities_from_cities,
    ];
    let combineFalseCities = [
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

  useEffect(() => {
    _handel_for_show_all_city();
  }, [selectState, selectBigCity, selectCity]);

  // function for Delete The State

  const _handel_Delete_State = (id) => {
    const copyState = [...allOfCity];
    const ArrayDeleteState = copyState.filter((e) => e.value !== id);

    const stateWithoutLabel = ArrayDeleteState.map((item) => item.value);

    setAllOfCity(ArrayDeleteState);
    setCheckedCity(stateWithoutLabel);

    // setCheckedCity(ArrayDeleteState);
  };

  const _handel_search = (word) => {
    // let firstLevelSearch = allCites.filter((e) => e.label.includes(word));
    // setSearchCities(firstLevelSearch);
    console.log(`allCites`, allCites);
    let secoundLevelSearch = [...allCites];
    allCites.map((state, index) => {
      console.log(`state`, state);
    });
    console.log(`secoundLevelSearch`, secoundLevelSearch);
  };

  // ############################################

  // END THREE

  // ###########################################
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
        <div className="form-check" style={{ position: "relative" }}>
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
      <input
        type="search"
        placeholder="ddd"
        onChange={(e) => _handel_search(e.target.value)}
      />

      {showModal && (
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
                console.log(e);
              }}
            />
          </div>
        </div>
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
          شهرهای انتخابی ( {_asist.PSeparator(allOfCity.length)}) :{" "}
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
                    backgroundColor: "#d144f5",
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
