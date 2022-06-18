import { diviedNumber } from "../../utils/diviedNumber";

function Number({ num }) {
  return (
    <>
      <span>{diviedNumber(num)}</span>
    </>
  );
}

export default Number;
