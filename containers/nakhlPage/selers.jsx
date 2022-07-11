import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

import s from "./selers.module.scss";

const dataSelers = [
  {
    title: "سجاد سیستم",
    name: "مائده کیانی",
    url: "/shop/sajadsystem/",
    products: [
      {
        ID: "948a18a2-4511-4533-81d4-ff98d565d691",
        Title: "کابل شارژ سریع میکرو یو اس بی دبلیو یو دبلیو مدل X85",
        Slug: "wuw-quick-charge-microusb-cable-model-x85",
        Inventory: 10,
        Image_medium_url:
          "https://nakhll.com/media/CACHE/images/media/Pictures/Markets/SubMarkets/Shops/Products/g3Kbxx/746d828d6a498c800f11416706578096.jpg",
        FK_Shop: {
          ID: "8beef712-8240-48cf-8ed4-46c1de8ddf15",
          slug: "sajadsystem",
          title: "سجاد سیستم",
          state: {
            id: 23,
            name: "کرمان",
          },
        },
        Price: 320000,
        OldPrice: 360000,
        discount: 11,
        is_advertisement: false,
        in_campaign: false,
      },
      {
        ID: "f514f886-f9cd-4811-8b67-e323c3114264",
        Title: "شارژر دیواری فست شارژ دنمن مدل DC01V همراه با کابل",
        Slug: "denmen-charger-model-dc01v",
        Inventory: 20,
        Image_medium_url:
          "https://nakhll.com/media/CACHE/images/media/Pictures/Markets/SubMarkets/Shops/Products/gFZlAq/2937c698f6a85a7e01c8381c327d5014.jpg",
        FK_Shop: {
          ID: "8beef712-8240-48cf-8ed4-46c1de8ddf15",
          slug: "sajadsystem",
          title: "سجاد سیستم",
          state: {
            id: 23,
            name: "کرمان",
          },
        },
        Price: 500000,
        OldPrice: 550000,
        discount: 9,
        is_advertisement: false,
        in_campaign: false,
      },
      {
        ID: "cd33bf2b-c5a5-429c-ac88-3e22072dab51",
        Title: "کابل شارژ سریع تایپ سی دبلیو یو دبلیو مدل X95",
        Slug: "wuw-quick-charge-typ-c-cable-model-x95",
        Inventory: 10,
        Image_medium_url:
          "https://nakhll.com/media/CACHE/images/media/Pictures/Markets/SubMarkets/Shops/Products/hqYDwt/7b67b48e78454f596f8c4b2877d15efa.jpg",
        FK_Shop: {
          ID: "8beef712-8240-48cf-8ed4-46c1de8ddf15",
          slug: "sajadsystem",
          title: "سجاد سیستم",
          state: {
            id: 23,
            name: "کرمان",
          },
        },
        Price: 510000,
        OldPrice: 550000,
        discount: 7,
        is_advertisement: false,
        in_campaign: false,
      },
      {
        ID: "98d9a89d-51cc-4ef7-85c7-53496e1a0ba3",
        Title: "اسپیکر بلوتوثی مدل Charge mini ",
        Slug: "speaker-charge-mini",
        Inventory: 2,
        Image_medium_url:
          "https://nakhll.com/media/CACHE/images/media/Pictures/Markets/SubMarkets/Shops/Products/xGAsXZ/702f0e2f3aaf0c5b44db53a7d335072d.jpg",
        FK_Shop: {
          ID: "8beef712-8240-48cf-8ed4-46c1de8ddf15",
          slug: "sajadsystem",
          title: "سجاد سیستم",
          state: {
            id: 23,
            name: "کرمان",
          },
        },
        Price: 2100000,
        OldPrice: 3500000,
        discount: 40,
        is_advertisement: false,
        in_campaign: false,
      },
    ],
  },
  {
    title: "جنوب کالا",
    name: "سید عباس شریف خوی",

    url: "/shop/جنوب-کالا/",
    products: [
      {
        ID: "43435355-2275-47b2-b10c-723a551c5f41",
        Title: "آسیاب مخلوط کن دوکاره ه‍ایگر مدل hg-295",
        Slug: "آسیاب-مخلوط-کن-دوکاره-هایگر-مدل-hg-295",
        Inventory: 8,
        Image_medium_url:
          "https://nakhll.com/media/CACHE/images/media/Pictures/Markets/SubMarkets/Shops/Products/dCzSzA/f9208130442db67c1a235edaa0b488c9.jpg",
        FK_Shop: {
          ID: "8accd390-fdb7-47a1-a7d9-ab6a5f763e4f",
          slug: "جنوب-کالا",
          title: "جنوب کالا",
          state: {
            id: 25,
            name: "خوزستان",
          },
        },
        Price: 7500000,
        OldPrice: 8000000,
        discount: 6,
        is_advertisement: false,
        in_campaign: false,
      },
      {
        ID: "e6ca7d7e-8d47-4b98-b012-68779df0d0e1",
        Title: "ترازوی  آشپزخانه کمری مدل ۴۳۵۰",
        Slug: "ترازوی-آشپزخانه-کمری-مدل-۴۳۵۰",
        Inventory: 8,
        Image_medium_url:
          "https://nakhll.com/media/CACHE/images/media/Pictures/Markets/SubMarkets/Shops/Products/1PXTlp/4691000e142c234c4ccb0c559f1b64b3.jpg",
        FK_Shop: {
          ID: "8accd390-fdb7-47a1-a7d9-ab6a5f763e4f",
          slug: "جنوب-کالا",
          title: "جنوب کالا",
          state: {
            id: 25,
            name: "خوزستان",
          },
        },
        Price: 4800000,
        OldPrice: 6500000,
        discount: 26,
        is_advertisement: false,
        in_campaign: false,
      },
      {
        ID: "2522ef6a-e3e5-44b7-a141-6e1c356c8ed1",
        Title: "هواپز دسینی توربو اون",
        Slug: "هواپز-پسینی-توربو-اون",
        Inventory: 100,
        Image_medium_url:
          "https://nakhll.com/media/CACHE/images/media/Pictures/Markets/SubMarkets/Shops/Products/eSoKrX/2d238a3e69d1fed2197ed4ec1ff97547.jpg",
        FK_Shop: {
          ID: "8accd390-fdb7-47a1-a7d9-ab6a5f763e4f",
          slug: "جنوب-کالا",
          title: "جنوب کالا",
          state: {
            id: 25,
            name: "خوزستان",
          },
        },
        Price: 14300000,
        OldPrice: 18700000,
        discount: 23,
        is_advertisement: false,
        in_campaign: false,
      },
      {
        ID: "c514942c-8d52-4995-81c0-a077b56d45eb",
        Title: "سشوار ۹۰۰۰وات پاناسونیک مدل pa53hd",
        Slug: "سشوار-۹۰۰۰وات-پاناسونیک-مدل-pa53hd",
        Inventory: 50,
        Image_medium_url:
          "https://nakhll.com/media/CACHE/images/media/Pictures/Markets/SubMarkets/Shops/Products/eth8ek/c64a73d4d436d027555baf62b3a8673c.jpg",
        FK_Shop: {
          ID: "8accd390-fdb7-47a1-a7d9-ab6a5f763e4f",
          slug: "جنوب-کالا",
          title: "جنوب کالا",
          state: {
            id: 25,
            name: "خوزستان",
          },
        },
        Price: 4450000,
        OldPrice: 4500000,
        discount: 1,
        is_advertisement: false,
        in_campaign: false,
      },
    ],
  },
  {
    title: "ملل مارکت",
    name: "میثم نعمتی",
    url: "/shop/ملل-مارکت/",
    products: [
      {
        ID: "1ee54f63-b1f7-4774-ad19-5d212ab67d00",
        Title: "ساعت مچی زنانه اسلیم استار",
        Slug: "ساعت-مچی-زنانه-اسلیم-استار",
        Inventory: 20,
        Image_medium_url:
          "https://nakhll.com/media/CACHE/images/media/Pictures/Markets/SubMarkets/Shops/Products/76O9hj/54abbf7c50e70da1e1f89ed57983ea8e.jpg",
        FK_Shop: {
          ID: "dc9b349a-c1d6-4c40-b7ca-c67ccc6c1b99",
          slug: "ملل-مارکت",
          title: "ملل مارکت",
          state: {
            id: 23,
            name: "کرمان",
          },
        },
        Price: 5400000,
        OldPrice: 6200000,
        discount: 12,
        is_advertisement: false,
        in_campaign: false,
      },
      {
        ID: "62569e7c-49bc-47c8-ab68-158155b33bf4",
        Title: "ساعت مچی زنانه دستبندی اورجینال لاروس",
        Slug: "ساعت-مچی-زنانه-دستبندی-اورجینال-لاروس",
        Inventory: 199,
        Image_medium_url:
          "https://nakhll.com/media/CACHE/images/media/Pictures/Markets/SubMarkets/Shops/Products/y2lQ5o/7ba29d0ca1517d7a8cd5f05d29507415.jpg",
        FK_Shop: {
          ID: "dc9b349a-c1d6-4c40-b7ca-c67ccc6c1b99",
          slug: "ملل-مارکت",
          title: "ملل مارکت",
          state: {
            id: 23,
            name: "کرمان",
          },
        },
        Price: 7500000,
        OldPrice: 9000000,
        discount: 16,
        is_advertisement: false,
        in_campaign: false,
      },
      {
        ID: "84f2353c-7b79-4330-ae61-fa307a56b6a9",
        Title: "ساعت مچی زنانه سرامیکی لاروس",
        Slug: "ساعت-مچی-زنانه-سرامیکی-لاروس",
        Inventory: 20,
        Image_medium_url:
          "https://nakhll.com/media/CACHE/images/media/Pictures/Markets/SubMarkets/Shops/Products/27P4ZY/8ea4a343773d8d12ff97a35936bfba0b.jpg",
        FK_Shop: {
          ID: "dc9b349a-c1d6-4c40-b7ca-c67ccc6c1b99",
          slug: "ملل-مارکت",
          title: "ملل مارکت",
          state: {
            id: 23,
            name: "کرمان",
          },
        },
        Price: 6500000,
        OldPrice: 7500000,
        discount: 13,
        is_advertisement: false,
        in_campaign: false,
      },
      {
        ID: "873f40dd-97e2-4722-a3ba-f1c3f52b623f",
        Title: "ساعت مچی زنانه اورجینال نگین دار لاروس",
        Slug: "ساعت-مچی-زنانه-اورجینال-نگین-دار-لاروس",
        Inventory: 20,
        Image_medium_url:
          "https://nakhll.com/media/CACHE/images/media/Pictures/Markets/SubMarkets/Shops/Products/YzsdJs/dd7cc0333a4b410df226bacc3660cdd6.jpg",
        FK_Shop: {
          ID: "dc9b349a-c1d6-4c40-b7ca-c67ccc6c1b99",
          slug: "ملل-مارکت",
          title: "ملل مارکت",
          state: {
            id: 23,
            name: "کرمان",
          },
        },
        Price: 4000000,
        OldPrice: 5500000,
        discount: 27,
        is_advertisement: false,
        in_campaign: false,
      },
    ],
  },
];
function Selers() {
  const router = useRouter();

  const CartSeller = ({ data }) => (
    <div onClick={() => router.push(data.url)} className={s.selerContainer}>
      <div className={s.content}>
        <div className={s.header}>
          {/* <div className={s.image}></div> */}
          <div className={s.title}>
            <h5>{data.title}</h5>
            <h5>{data.name}</h5>
          </div>
          {/* <div className={s.medal}>
            <Image
              layout="fixed"
              width={80}
              height={80}
              src="/icons/gold.svg"
              alt="icon"
            />
          </div> */}
        </div>
        <div className={s.images}>
          {data.products.map((el, index) => (
            <div key={index} className={s.imageContainer}>
              <Image
                className={s.imageProduct}
                alt="m"
                src={el.Image_medium_url}
                layout="responsive"
                width={100}
                height={100}
              />
            </div>
          ))}
        </div>
      </div>
      {/* <div className={s.audioContainer}>
        <div className={s.wave}>
          <Image
            className={s.imageProduct}
            alt="m"
            src="/icons/voic.svg"
            layout="responsive"
            width={100}
            height={10}
          />
        </div>
        <div className={s.palyer}>
          <button className={s.playBtn} onClick={playMusic}>
            {!playing ? (
              <AiFillPlayCircle color="#124d81" size={35} />
            ) : (
              <AiFillPauseCircle color="#ced7dc" size={35} />
            )}
          </button>
          <h5>داستان این کسب و کار</h5>
        </div>
      </div> */}
    </div>
  );
  return (
    <>
      <div className={s.titlePart}>
        <h3>حجره داران </h3>
      </div>
      <div className={s.container}>
        {dataSelers.map((data, index) => (
          <CartSeller key={index} data={data} />
        ))}
      </div>
    </>
  );
}

export default Selers;
