import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";
import s from "./selers.module.scss";

const dataSelers = [
  {
    title: "سیسمونی کودک",
    name: "فاطمه وکیلی",
    products: [

      {
        "ID": "dbfcadcf-bdd5-47d4-a633-d6be624bf0a7",
        "Title": "باکس استوانه ای",
        "Slug": "1016",
        "Inventory": 1,
        "Image_medium_url": "https://nakhll.com/media/CACHE/images/media/Pictures/Markets/SubMarkets/Shops/Products/aZwif3/abaa06f82f635a38529306d7486e33bb.jpg",
        "FK_Shop": {
            "ID": "f66a5ff3-9d2d-4782-ba4a-c968f486ceed",
            "slug": "nakhllsismooni",
            "title": "سیسمونی واکسسوری کودک ونوزاد",
            "state": "اصفهان"
        },
        "Price": 2800000,
        "OldPrice": 3700000,
        "discount": 24,
        "is_advertisement": false,
        "in_campaign": false
    },
    {
        "ID": "5c00630c-f349-4c88-b533-ff31df64e6cb",
        "Title": "تشک گارددار",
        "Slug": "1020",
        "Inventory": 1,
        "Image_medium_url": "https://nakhll.com/media/CACHE/images/media/Pictures/Markets/SubMarkets/Shops/Products/Ix70FB/913c99f6a9fd2f9d660be3b22a7496b2.jpg",
        "FK_Shop": {
            "ID": "f66a5ff3-9d2d-4782-ba4a-c968f486ceed",
            "slug": "nakhllsismooni",
            "title": "سیسمونی واکسسوری کودک ونوزاد",
            "state": "اصفهان"
        },
        "Price": 4900000,
        "OldPrice": 5600000,
        "discount": 12,
        "is_advertisement": false,
        "in_campaign": false
    },
    {
        "ID": "4c8c8975-baae-4375-b612-432fd2ccf473",
        "Title": "سرویس خواب کیفی نوزاد",
        "Slug": "1015",
        "Inventory": 1,
        "Image_medium_url": "https://nakhll.com/media/CACHE/images/media/Pictures/Markets/SubMarkets/Shops/Products/QDQgxu/cd78c8fdac08860c955d8322df8ff58b.jpg",
        "FK_Shop": {
            "ID": "f66a5ff3-9d2d-4782-ba4a-c968f486ceed",
            "slug": "nakhllsismooni",
            "title": "سیسمونی واکسسوری کودک ونوزاد",
            "state": "اصفهان"
        },
        "Price": 4900000,
        "OldPrice": 5500000,
        "discount": 10,
        "is_advertisement": false,
        "in_campaign": false
    },
    {
        "ID": "8bf90984-60ce-4455-876d-baa09aabef62",
        "Title": "جعبه کشودار",
        "Slug": "1820",
        "Inventory": 1,
        "Image_medium_url": "https://nakhll.com/media/CACHE/images/media/Pictures/Markets/SubMarkets/Shops/Products/VdyuUY/ac8c3915dec30d31033c08905c939c79.jpg",
        "FK_Shop": {
            "ID": "f66a5ff3-9d2d-4782-ba4a-c968f486ceed",
            "slug": "nakhllsismooni",
            "title": "سیسمونی واکسسوری کودک ونوزاد",
            "state": "اصفهان"
        },
        "Price": 3100000,
        "OldPrice": 0,
        "discount": 0,
        "is_advertisement": false,
        "in_campaign": false
    }
    ],
  },
  {
    title: "آریانا رزین",
    name: "محدثه عامری",
    products: [
      {
        "ID": "32122e10-f192-4a9a-8180-e3bc71c3bf5d",
        "Title": "شکلات خوری تمام رزین ونشکن",
        "Slug": "resin2",
        "Inventory": 5,
        "Image_medium_url": "https://nakhll.com/media/CACHE/images/media/Pictures/Markets/SubMarkets/Shops/Products/nOGlkn/243e6f4c45992975a27c3a467091c981.jpg",
        "FK_Shop": {
            "ID": "6576c0ee-d047-43cd-80a9-e64476eac081",
            "slug": "aryaana",
            "title": "آریانا رزین",
            "state": "کرمان"
        },
        "Price": 1800000,
        "OldPrice": 0,
        "discount": 0,
        "is_advertisement": false,
        "in_campaign": false
    },
    {
        "ID": "aae3bd01-073a-4236-bb3b-6ca639e864a5",
        "Title": "شیرینی خوری دوطبقه تمام رزین",
        "Slug": "resinart",
        "Inventory": 5,
        "Image_medium_url": "https://nakhll.com/media/CACHE/images/media/Pictures/Markets/SubMarkets/Shops/Products/c1iCLa/083322dca72889fc74a77c10a70a5889.jpg",
        "FK_Shop": {
            "ID": "6576c0ee-d047-43cd-80a9-e64476eac081",
            "slug": "aryaana",
            "title": "آریانا رزین",
            "state": "کرمان"
        },
        "Price": 4500000,
        "OldPrice": 0,
        "discount": 0,
        "is_advertisement": false,
        "in_campaign": false
    },
    {
        "ID": "ef1a66e8-e561-451f-a799-62ab590d8f53",
        "Title": "شیرینی خوری تک طبقه تمام رزین",
        "Slug": "resinblack",
        "Inventory": 5,
        "Image_medium_url": "https://nakhll.com/media/CACHE/images/media/Pictures/Markets/SubMarkets/Shops/Products/3QRl89/87618e09836f374b9f16381ce69dfc5f.jpg",
        "FK_Shop": {
            "ID": "6576c0ee-d047-43cd-80a9-e64476eac081",
            "slug": "aryaana",
            "title": "آریانا رزین",
            "state": "کرمان"
        },
        "Price": 3800000,
        "OldPrice": 0,
        "discount": 0,
        "is_advertisement": false,
        "in_campaign": false
    },
    {
        "ID": "e20c5fc4-9cc9-44e8-b127-aeceaa1937a3",
        "Title": "میوه خوری تمام رزین",
        "Slug": "resin",
        "Inventory": 5,
        "Image_medium_url": "https://nakhll.com/media/CACHE/images/media/Pictures/Markets/SubMarkets/Shops/Products/zj3DBi/e8d4fe9abb0afe0bcabfa5f2d2c68078.jpg",
        "FK_Shop": {
            "ID": "6576c0ee-d047-43cd-80a9-e64476eac081",
            "slug": "aryaana",
            "title": "آریانا رزین",
            "state": "کرمان"
        },
        "Price": 4000000,
        "OldPrice": 0,
        "discount": 0,
        "is_advertisement": false,
        "in_campaign": false
    }
    ],
  },
  {
    title: "جوراب گلدن لیدی",
    name: "امیر حاتم خانی",
    products: [{
      "ID": "d2ed813d-6b27-488e-b0f6-38c884073ce1",
      "Title": "پک 4جفتی میکس جوراب نخی دخترانه پسرانه. لطافت و ظرافتی برای مصرف طولانی",
      "Slug": "پک-۶-جفتی-میکس-جوراب-نخی-دخترانه-پسرانه-لطافت-و-ظرافتی-برای-مصرف-طولانی",
      "Inventory": 160,
      "Image_medium_url": "https://nakhll.com/media/CACHE/images/media/Pictures/Markets/SubMarkets/Shops/Products/hvnRtn/b5d224367b4f2072019a38fc2187b98d.jpg",
      "FK_Shop": {
          "ID": "d4582ea8-4e9c-4a14-88fb-fbb47e185ca1",
          "slug": "jorab-parizian",
          "title": "جوراب نخی برند ایاق و مجلسی برند گلدن لیدی",
          "state": "تهران"
      },
      "Price": 600000,
      "OldPrice": 0,
      "discount": 0,
      "is_advertisement": false,
      "in_campaign": false
  },
  {
      "ID": "e7961788-6b32-468d-b619-9fb439978a86",
      "Title": "پک ۶ جفتی میکس جوراب نخی مردانه نیم میکرو. لطافت و ظرافت در تراکم بافتی در حد اعلا  برای مصرف طولانی",
      "Slug": "پک-۶-جفتی-میکس-جوراب-نخی-مردانه-نیم-میکرو-لطافت-و-ظرافت-در-تراکم-بافتی-در-حد-اعلا-برای-مصرف-طولانی",
      "Inventory": 147,
      "Image_medium_url": "https://nakhll.com/media/CACHE/images/media/Pictures/Markets/SubMarkets/Shops/Products/W86jop/7cb365c96f1b4993521bc914f9a3c200.jpg",
      "FK_Shop": {
          "ID": "d4582ea8-4e9c-4a14-88fb-fbb47e185ca1",
          "slug": "jorab-parizian",
          "title": "جوراب نخی برند ایاق و مجلسی برند گلدن لیدی",
          "state": "تهران"
      },
      "Price": 1200000,
      "OldPrice": 0,
      "discount": 0,
      "is_advertisement": false,
      "in_campaign": false
  },
  {
      "ID": "155ad43f-9fce-4266-b605-63117c6a9043",
      "Title": "پک ۶ جفتی میکس جوراب نخی مردانه. لطافت و ظرافتی برای مصرف طولانی",
      "Slug": "پک-۶-جفتی-میکس-جوراب-نخی-مردانه-لطافت-و-ظرافتی-برای-مصرف-طولانی",
      "Inventory": 114,
      "Image_medium_url": "https://nakhll.com/media/CACHE/images/media/Pictures/Markets/SubMarkets/Shops/Products/o5kTOP/0d1c76b05c986496d187d613aa8e19d0.jpg",
      "FK_Shop": {
          "ID": "d4582ea8-4e9c-4a14-88fb-fbb47e185ca1",
          "slug": "jorab-parizian",
          "title": "جوراب نخی برند ایاق و مجلسی برند گلدن لیدی",
          "state": "تهران"
      },
      "Price": 950000,
      "OldPrice": 0,
      "discount": 0,
      "is_advertisement": false,
      "in_campaign": false
  },
  {
      "ID": "450305a0-118d-4c9a-9160-d20c9f18a5e8",
      "Title": "پک ۶ جفتی میکس جوراب نیم ساق نخی مردانه. لطافت و ظرافتی برای مصرف طولانی",
      "Slug": "پک-۶-جفتی-میکس-جوراب-نیم-ساق-نخی-مردانه-لطافت-و-ظرافتی-برای-مصرف-طولانی",
      "Inventory": 150,
      "Image_medium_url": "https://nakhll.com/media/CACHE/images/media/Pictures/Markets/SubMarkets/Shops/Products/MFH7rW/daf390048fde336396731d368f255ad0.jpg",
      "FK_Shop": {
          "ID": "d4582ea8-4e9c-4a14-88fb-fbb47e185ca1",
          "slug": "jorab-parizian",
          "title": "جوراب نخی برند ایاق و مجلسی برند گلدن لیدی",
          "state": "تهران"
      },
      "Price": 1220000,
      "OldPrice": 0,
      "discount": 0,
      "is_advertisement": false,
      "in_campaign": false
  }],
  },
];
function Selers() {
  // const [audio, setAudio] = useState();
  // const [playing, setPlaying] = useState(false);
  // useEffect(() => {
  //   setAudio(new Audio("/audio/milad.mp3"));
  // }, []);

  // useEffect(() => { }, [audio]);

  // const playMusic = () => {
  //   if (!playing) {
  //     audio.play();
  //     setPlaying(true);
  //   } else {
  //     audio.pause();
  //     setPlaying(false);
  //   }
  // };
  const CartSeller = ({ data }) => (
    <div className={s.selerContainer}>
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
          {data.products.map((el,index)=>(
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
        <h3>فروشندگان برتر فروردین ماه</h3>
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
