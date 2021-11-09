import React, { useEffect, useState } from "react";
import { ApiReference } from "../../Api";
import { ApiRegister } from "../../services/apiRegister/ApiRegister";
function index(props) {
  let getDataLanding = `${ApiReference.landing.getLanding.url}4/`;
  const [dataLanding, setDataLanding] = useState([]);

  useEffect(async () => {
    let response = await ApiRegister().apiRequest(
      null,
      "get",
      getDataLanding,
      true,
      ""
    );
    if (response.status == 200) {
      console.log(`response`, response.data.page_data);
      setDataLanding(JSON.parse(response.data.page_data));
    }
  }, []);
  useEffect(() => {
    console.log(`dataLanding`, dataLanding);
  }, [dataLanding]);

  return <div>here show you landing</div>;
}

export default index;
