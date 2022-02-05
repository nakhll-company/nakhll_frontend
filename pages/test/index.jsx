import EmptyLayout from "../../components/layout/EmptyLayout";
import Image from "next/image";
import st from "./test.module.scss";
import LinearShopsCart from "../../containers/LandingPage/linearShopsCart";

function Index() {
  return (
    <>
      <LinearShopsCart />
    </>
  );
}

export default Index;

Index.Layout = EmptyLayout;
