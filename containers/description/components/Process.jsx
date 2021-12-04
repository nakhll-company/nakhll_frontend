import Image from "next/image";

function Process() {
  return (
    <>
      <div className="hidden md:block">
        <Image
          src="/image/description/02.png"
          layout="responsive"
          width={4}
          height={1.1}
        />
      </div>

      <div className="md:hidden">
        <Image
          src="/image/description/01.png"
          layout="responsive"
          width={1}
          height={1.8}
        />
      </div>
    </>
  );
}

export default Process;
