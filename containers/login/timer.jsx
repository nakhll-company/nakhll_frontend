// node libraries
import React, { useEffect } from "react";

function AppTimer({ timer = 59, setTimer }) {
  useEffect(() => {
    const timing = setInterval(() => {
      setTimer(timer - 1);
      localStorage.setItem("timing", timer - 1);
    }, 1000);
    return () => clearInterval(timing);
  }, [timer, setTimer]);

  return (
    <span style={{ display: "inline-block", direction: "ltr" }}>
      <span> {`۰۰`}</span>
      <span style={{ margin: "0 5px" }}>:</span>
      <span
        style={{ minWidth: "20px", display: "inline-block", textAlign: "left" }}
      >
        {timer < 10 && "۰"}
        {timer}
      </span>
    </span>
  );
}

export default AppTimer;
