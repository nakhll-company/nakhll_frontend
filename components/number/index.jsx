import Assistent from "zaravand-assistent-number";
const _asist = new Assistent();

function Number({ num }) {
  return (
    <>
      <span>{_asist.PSeparator(num)}</span>
    </>
  );
}

export default Number;
