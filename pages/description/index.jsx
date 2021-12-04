import "tailwindcss/tailwind.css";
import Image from "next/image";
import FeaturesBlocks from "../../containers/description/components/FeaturesBlocks";
import Questions from "../../containers/description/components/Questions";
import Coming from "../../containers/description/components/Coming";
import Process from "../../containers/description/components/Process";

function index() {
  return (
    <div className="px-3 ">
      {/* Video */}
      <div className="bg-gray-700 w-full">
        {/* <Image src="" layout="responsive" width={500} height={500} /> */}
      </div>
      {/* icons */}
      <FeaturesBlocks />

      <Process />

      {/* Questions */}
      <Questions />

      {/* coming to Nakhll */}

      <Coming />
    </div>
  );
}

export default index;
