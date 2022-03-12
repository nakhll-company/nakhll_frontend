import React from "react";
import EmptyLayout from "../../components/layout/EmptyLayout";
import LinerProducts from "../../containers/LandingPage/LinerProducts";
import BlogNakhl from "../../containers/nakhlPage/blogNakhl";
import HeroSlider from "../../containers/nakhlPage/heroSlider";

import LinerProductsBgLanding from "../../containers/nakhlPage/LinerProductsBg";
import SliderNakhl from "../../containers/nakhlPage/sliderNakhl";
import ValuesPart from "../../containers/nakhlPage/valuesPart";

const products = [
  {
    ID: "fb7adfdb-d0a7-4982-b9f0-4eef2b094a2b",
    Title: "میوه خوری ریز گل",
    Slug: "میوه-خوری-ریز-گل",
    Inventory: 20,
    Image_medium_url:
      "https://nakhll.com/media/CACHE/images/media/Pictures/Markets/SubMarkets/Shops/Products/TWRi2N/4d966e120bb946a3fa645b95d13da4a4.jpg",
    FK_Shop: {
      ID: "a230c61e-a598-47da-8de3-261fa04a3587",
      slug: "سرای-مس-سرحدی",
      title: "سرای مس سرحدی",
      state: "کرمان",
    },
    Price: 4000000,
    OldPrice: 4950000,
    discount: 19,
    is_advertisement: false,
    in_campaign: false,
  },
  {
    ID: "829bba04-56e1-43d1-a81a-2aa78801c9ab",
    Title: "گلدان فیروزه کوب",
    Slug: "گلدان-فیروزه-کوب",
    Inventory: 2,
    Image_medium_url:
      "https://nakhll.com/media/CACHE/images/media/Pictures/Markets/SubMarkets/Shops/Products/zrCcUp/ba3b9dfb6fa12ee31a84d9cc0b49ca65.jpg",
    FK_Shop: {
      ID: "a230c61e-a598-47da-8de3-261fa04a3587",
      slug: "سرای-مس-سرحدی",
      title: "سرای مس سرحدی",
      state: "کرمان",
    },
    Price: 9000000,
    OldPrice: 10000000,
    discount: 10,
    is_advertisement: false,
    in_campaign: false,
  },
  {
    ID: "39db5955-f261-481c-8f32-e324fe1fb5f1",
    Title: "شکلات خوري سه پایه گوشواره دار",
    Slug: "شکلات-خوري-سه-پایه-گوشواره-دار",
    Inventory: 100,
    Image_medium_url:
      "https://nakhll.com/media/CACHE/images/media/Pictures/Markets/SubMarkets/Shops/Products/649PGm/064e93448efd934c2e1ab5986fd222a2.jpg",
    FK_Shop: {
      ID: "a230c61e-a598-47da-8de3-261fa04a3587",
      slug: "سرای-مس-سرحدی",
      title: "سرای مس سرحدی",
      state: "کرمان",
    },
    Price: 1250000,
    OldPrice: 1350000,
    discount: 7,
    is_advertisement: false,
    in_campaign: false,
  },
  {
    ID: "b1227e34-77de-4234-af64-2ac3c89d4f0a",
    Title: "سماور رو گازی مسی",
    Slug: "سماور-رو-گازی-مسی",
    Inventory: 10,
    Image_medium_url:
      "https://nakhll.com/media/CACHE/images/media/Pictures/Markets/SubMarkets/Shops/Products/xkqQiS/d7e35194814d9a44a73ce355d84ee2ee.jpg",
    FK_Shop: {
      ID: "a230c61e-a598-47da-8de3-261fa04a3587",
      slug: "سرای-مس-سرحدی",
      title: "سرای مس سرحدی",
      state: "کرمان",
    },
    Price: 5550000,
    OldPrice: 6000000,
    discount: 7,
    is_advertisement: false,
    in_campaign: false,
  },
  {
    ID: "8da2c3ec-1dae-4b6d-a24d-40acae09d7b8",
    Title: "گیلاس",
    Slug: "گیلاس",
    Inventory: 100,
    Image_medium_url:
      "https://nakhll.com/media/CACHE/images/media/Pictures/Markets/SubMarkets/Shops/Products/f5WbRG/58b6ab66bcb680d719e3596b6cd16323.jpg",
    FK_Shop: {
      ID: "a230c61e-a598-47da-8de3-261fa04a3587",
      slug: "سرای-مس-سرحدی",
      title: "سرای مس سرحدی",
      state: "کرمان",
    },
    Price: 850000,
    OldPrice: 900000,
    discount: 5,
    is_advertisement: false,
    in_campaign: false,
  },
  {
    ID: "dae80d4d-6a89-4b66-ae38-935886753568",
    Title: "چراغ علاالدین",
    Slug: "چراغ-علاالدین",
    Inventory: 10,
    Image_medium_url:
      "https://nakhll.com/media/CACHE/images/media/Pictures/Markets/SubMarkets/Shops/Products/8Be6ng/9508b6171489f3cc29b083a4b810d80e.jpg",
    FK_Shop: {
      ID: "a230c61e-a598-47da-8de3-261fa04a3587",
      slug: "سرای-مس-سرحدی",
      title: "سرای مس سرحدی",
      state: "کرمان",
    },
    Price: 2300000,
    OldPrice: 2350000,
    discount: 2,
    is_advertisement: false,
    in_campaign: false,
  },
];
function Test() {
  return (
    <div>
      <HeroSlider />
      <ValuesPart />
      <LinerProductsBgLanding dataLinerProductsBg={products} />

      <SliderNakhl />
      <LinerProducts dataLinerProducts={products} />
      <LinerProducts dataLinerProducts={products} />
      <BlogNakhl />
    </div>
  );
}

export default Test;
Test.Layout = EmptyLayout;
