import React, { useEffect } from "react";
import { useRouter } from "next/router";
import EmptyLayout from "../../components/layout/EmptyLayout";

function ProductPage() {
  const { push, asPath } = useRouter();

  useEffect(() => {
    push(`/search${asPath.split("/product/")[1]}`);
  }, []);
  return <div></div>;
}

export default ProductPage;
ProductPage.Layout = EmptyLayout;
