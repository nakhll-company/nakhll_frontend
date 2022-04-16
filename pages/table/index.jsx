import React from "react";
import Script from "next/script";
import EmptyLayout from "../../components/layout/EmptyLayout";

function Table() {
  return (
    <div>
      <Script
        id="tableEnfo"
        strategy="beforeInteractive"
        src={`//js.hsforms.net/forms/shell.js`}
      />
      <Script id="ExtraTable" strategy="lazyOnload">
        {`hbspt.forms.create({
          region: "na1",
          portalId: "21759198",
          formId: "84c62938-a700-413f-ad36-d74274f4a7c6"
        });`}
      </Script>
    </div>
  );
}

export default Table;
Table.Layout = EmptyLayout;
