function Coming() {
  return (
    <>
      <div
        id="content"
        className=" h-screen items-center justify-center flex flex-col bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"
        // style={{
        //   backgroundImage: " url(" + `/image/description/p1.webp` + ")",
        // }}
      >
        <div className="items-center justify-center w-full p-8 flex flex-col">
          <div className="bg-white items-center justify-center md:w-1/2 w-full shadow-md p-5 h-auto rounded-lg blur-3 bg-opacity-50 flex flex-col col-span-12">
            <h4 className="w-48 border-t-4 border-solid border-blue-700 h-20"></h4>

            <h2 className="text-blue-800   text-5xl text-center mt-2 mb-20  ">
              به عصر جدید تجارت وارد شوید
            </h2>
            <button
              value="button"
              className="hover:text-gray-300 bg-blue-600 text-white hover:bg-black w-56 p-4 text-2xl font-bold rounded-lg"
              id="moka-8pwrq"
            >
              ورود
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Coming;
