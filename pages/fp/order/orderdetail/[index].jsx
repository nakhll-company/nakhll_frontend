// node libraries
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
// methods
import { ApiRegister } from "../../../../services/apiRegister/ApiRegister";
// components
import MyLayout from "../../../../components/layout/Layout";
import useViewport from "../../../../components/viewPort";
// sass
import styles from "../../../../styles/pages/order/orderdetail.module.scss";

// FORM
import { Formik, Form, Field, FieldArray } from "formik";
import * as yup from "yup";
import OrderDetailDesktop from "../../../../containers/orderdetail/desktop";
import OrderDetailMobile from "../../../../containers/orderdetail/mobile";

export const getServerSideProps = ({ params }) => {
  // fetch
  return {
    props: {
      id: params.index,
    },
  };
};

// details: "Wait for other shops to confirm"
// POST:
// {
//     "barcode": "BARCODE_HERE"
// }
function HomePage({ id }) {
  const [IsLoading, setIsLoading] = useState(false);
  const [showMessage, setshowMessage] = useState(0);
  const VALIDATION_SCHEMA = yup.object().shape({
    codeRahgiri: yup
      .number()
      .typeError("فقط عدد مجاز است.")
      .required("کد رهگیری الزامی می باشد."),
  });
  const { width } = useViewport();
  const breakpoint = 620;

  const [data, setdata] = useState({});
  const [isShow, setisShow] = useState(false);
  const [btnOk, setbtnOk] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [configOrder, setconfigOrder] = useState(false);
  const [codeRahgiri, setcodeRahgiri] = useState("");

  useEffect(() => {
    const _handleRequestApi = async (id) => {
      let params = { factor_id: id };
      let loadData = null;
      let dataUrl = "/app/api/v1/get-factor-details/";
      let response = await ApiRegister().apiRequest(
        loadData,
        "get",
        dataUrl,
        true,
        params
      );
      if (response.status === 200) {
        setdata(response.data);
      }
      setisShow(true);
    };
    _handleRequestApi(id);
  }, []);

  const confirmedFactor = () => {
    const _handleRequestApi = async (id) => {
      let params = {};
      let loadData = null;
      let dataUrl = `/app/api/v1/factor/change-status/confirmed/${id}/`;
      let response = await ApiRegister().apiRequest(
        loadData,
        "PUT",
        dataUrl,
        true,
        params
      );
      if (response.status === 200) {
        setconfigOrder(response.data);
      }
      setisShow(true);
      setbtnOk(!btnOk);

      if (response.status === 200) {
        setconfigOrder(true);
      }
    };
    _handleRequestApi(id);
  };

  const SendRahgiriCode = () => {
    const sendData = {
      barcode: codeRahgiri,
    };
    const _handleRequestApi = async (id) => {
      let params = {};
      let loadData = sendData;
      let dataUrl = `/app/api/v1/factor/change-status/sent/${id}/`;
      let response = await ApiRegister().apiRequest(
        loadData,
        "POST",
        dataUrl,
        true,
        params
      );
      // setconfigOrder(response);
      // setisShow(true);
      // setbtnOk(!btnOk);

      // if (response.details === "Done") {
      //   setconfigOrder(true);
      // }
    };
    _handleRequestApi(id);
  };

  return (
    <>
      {isShow && (
        <>
          {width >= breakpoint ? (
            <OrderDetailDesktop
              isOpen={isOpen}
              btnOk={btnOk}
              setbtnOk={setbtnOk}
              data={data}
            />
          ) : (
            <OrderDetailMobile
              isOpen={isOpen}
              btnOk={btnOk}
              setbtnOk={setbtnOk}
              data={data}
            />
          )}
        </>
      )}
    </>
  );
}

export default HomePage;

HomePage.Layout = MyLayout;
