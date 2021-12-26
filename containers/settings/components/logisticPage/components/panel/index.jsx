import { useEffect } from "react";

function Panel() {
  // state for Saved Sending Unit
  const [SavedSendingUnit, setSavedSendingUnit] = useState([]);

  const [loaderTable, setLoaderTable] = useState(false);

  useEffect(() => {
    async function fetchData() {
      let response = await ApiRegister().apiRequest(
        null,
        "get",
        `/api/v1/logistic/shop-logistic-unit-constraint/`,
        true,
        { id: 10 }
      );

      if (response.status == 200) {
        setSavedSendingUnit(response.data);
      }
    }

    fetchData();
  }, []);

  const _handle_delete_scope = async (id) => {
    setLoaderTable(true);
    let response = await ApiRegister().apiRequest(
      null,
      "DELETE",
      `/api/v1/logistic/shop-logistic-unit-constraint/${id}/`,
      true,
      ""
    );

    if (response.status == 204) {
      let helpArray = SavedSendingUnit.filter((el) => el.id !== id);
      setSavedSendingUnit(helpArray);
      setLoaderTable(false);
    } else {
      setLoaderTable(false);
      errorMessage("باری دیگر تلاش کنید.");
    }
  };
  const _handel_click_on_scope = (id) => {
    setWichIdScope(id);
    changePage();
  };

  return <></>;
}

export default panel;
