import "tailwindcss/tailwind.css";
import Image from "next/image";

function index() {
  return (
    <div className="px-3 ">
      {/* Video */}
      <div className="bg-gray-700 w-full">
        <Image src="" layout="responsive" width={500} height={500} />
      </div>
    </div>
  );
}

export default index;
