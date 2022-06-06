import axios from "axios";
import React, { useEffect, useState } from "react";
import EmptyLayout from "../../components/layout/EmptyLayout";
import s from "./goftino.module.scss";
function GoftinoPage() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    async function fetchData() {
      const ans = await axios.get(
        "https://api.goftino.com/v1/user_data",
        { params: { chat_id: "1168" } },
        {
          headers: {
            "Content-Type": "application/json",
            "goftino-key": "TgjSlF",
          },
        }
      );
      console.log("ans :>> ", ans);
    }
    fetchData();
  }, []);

  return (
    <div className={s.wrap}>
      <div className="">
        <input
          type="text"
          placeholder="send message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button> بفرس</button>
      </div>
    </div>
  );
}

export default GoftinoPage;

GoftinoPage.Layout = EmptyLayout;
