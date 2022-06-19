import React, { useState } from "react";
import ProfileLayout from "../../../components/layout/ProfileLayout";
import Oredrs from "../../../containers/profile/orders";

function OrderDetailPage() {
  const [invoiceId, setInvoiceId] = useState(0);
  return <Oredrs invoiceId={invoiceId} setInvoiceId={setInvoiceId} />;
}

export default OrderDetailPage;
OrderDetailPage.Layout = ProfileLayout;
