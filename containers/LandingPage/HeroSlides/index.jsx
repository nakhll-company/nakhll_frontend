// node libraries
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from "react";
// style
import styles from "./HeroSlides.module.scss";
SwiperCore.use([Pagination]);


function HeroSlides({ dataHeroSlides }) {
  const [videoAparat, setVideoAparat] = useState(
    dataHeroSlides[1].video ? dataHeroSlides[1].video : { id: "", src: "" }
  );

  useEffect(() => {
    setVideoAparat(
      dataHeroSlides[1].video ? dataHeroSlides[1].video : { id: "", src: "" }
    );
  }, [dataHeroSlides]);

  return (
    <div style={{ marginTop: "5px" }} className="container" key={Math.random() + 1}>
      <div className={`row ${styles.slide}`}>
        <div className={`col-12 col-md-8 ${styles.righter}`}>
          <Swiper pagination={true} spaceBetween={20} slidesPerView={1}>
            {dataHeroSlides &&
              dataHeroSlides
                .slice(0, dataHeroSlides.length - 2)
                .map((slider, index) => {
                  if (slider.image !== "") {
                    return (
                      <SwiperSlide key={index}>
                        <Link href={slider.url}>
                          <a>
                            <Image
                              layout="responsive"
                              width={1000}
                              height={500}
                              src={slider.image}
                              alt="بنر"
                            />
                          </a>
                        </Link>
                      </SwiperSlide>
                    );
                  }
                })}
          </Swiper>
        </div>
        <div className={`col-md-4  ${styles.lefter}  d-none d-md-flex`}>
          {videoAparat.id !== "" && (
            <div className={styles.wrap_video}>
              <div id={videoAparat.id}>
                <Script strategy="lazyOnload" src={`${videoAparat.src}`} />
              </div>
            </div>
          )}
          {videoAparat.id == "" && (
            <Link
              href={
                dataHeroSlides && dataHeroSlides[dataHeroSlides.length - 2].url
              }
            >
              <a>
                <Image
                  layout="responsive"
                  width={200}
                  height={100}
                  src={dataHeroSlides[dataHeroSlides.length - 2].image}
                  alt={
                    dataHeroSlides &&
                    dataHeroSlides[dataHeroSlides.length - 2].title
                  }
                />
              </a>
            </Link>
          )}
          <Link
            href={
              dataHeroSlides && dataHeroSlides[dataHeroSlides.length - 1].url
            }
          >
            <a>
              <Image
                layout="responsive"
                width={200}
                height={100}
                src={dataHeroSlides[dataHeroSlides.length - 1].image}
                alt={
                  dataHeroSlides &&
                  dataHeroSlides[dataHeroSlides.length - 1].title
                }
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSlides;
