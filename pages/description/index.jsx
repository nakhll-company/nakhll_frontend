// import "tailwindcss/tailwind.css";
import Image from "next/image";
import FeaturesBlocks from "../../containers/description/components/FeaturesBlocks";
import Questions from "../../containers/description/components/Questions";
import Coming from "../../containers/description/components/Coming";
import Process from "../../containers/description/components/Process";
import Sliders from "../../containers/description/components/Sliders";

function index() {
  return (
    <div className="px-3 ">
      {/* Video */}
      <div className="bg-gray-700 w-full h-72 flex justify-center items-center ">
        <p className="text-indigo-100 text-4xl">
          اینجا قراره احمد رضا فیلم بذاره
        </p>
      </div>
      {/* Sliders */}
      <div className="container relative overflow-hidden rounded-lg py-4 ">
        <Sliders />
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
