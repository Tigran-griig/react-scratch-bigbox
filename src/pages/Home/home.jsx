import React from "react";
import defaultClasses from "./home.module.css";
import mergeClasses from "../../helpers/mergeClasses";
import Banner from "../../components/Banner";
import topProduct1 from "../../images/img/png/topProduct2.png";
import topProduct2 from "../../images/img/png/topProduct3.png";
import bannerImg1 from "../../images/img/png/super.png";
import bannerImg2 from "../../images/img/png/kitchen.png";
import bannerImg3 from "../../images/img/png/book.png";
import bannerImg4 from "../../images/img/png/cofee.png";
import bannerImg5 from "../../images/img/png/cofe-bg.png";
import bannerImg6 from "../../images/img/png/luys-bg.png";
import SliderImg from "../../components/Slider";
import Title from "../../components/Title";
import CarouselProduct from "../../components/CarouselProduct";
import ProductsGroup from "../../components/ProductsGroup";
import SiteInfo from "../../components/SiteInfo";

const Home = (props) => {
  const classes = mergeClasses(defaultClasses, props.classes);

  return (
      <div className={classes.root}>
        <div className={classes.topProduct}>
          <div className={classes.topProductTop}>
            <div className={classes.block1}>
              {/*<SliderImg/>*/}
            </div>
            <div className={classes.block2}>
              <Banner
                  url={topProduct1}
                  classes={{banner: classes.newBanner}}
                  position={"topLeft"}
              >
                <p className={classes.bannerTitle1}>
                  ԶՎԱՐՃԱԼԻ <strong>ՆՎԵՐՆԵՐ</strong>
                </p>
              </Banner>
              <Banner url={topProduct2} position={"bottomRight"}>
                <p className={classes.bannerTitle2}>ԳՐԱՍԵՆՅԱԿԱՅԻՆ</p>
                <p className={classes.bannerText2}>-70%</p>
              </Banner>
            </div>
          </div>
          <div className={classes.topProductBottom}>
            <Banner
                classes={{banner: classes.smallBanner}}
                url={bannerImg1}
                position={"bottomRight"}
            >
              <p className={classes.smallBannerTitle1}>ԼԱՎԱԳՈՒՅՆ</p>
              <p className={classes.smallBannerText1}>ՆՎԵՐՆԵՐ</p>
            </Banner>
            <Banner
                classes={{banner: classes.smallBanner}}
                url={bannerImg2}
                position={"bottomRight"}
            >
              <p className={classes.smallBannerTitle2}>ԽՈՀԱՆՈՑԱՅԻՆ</p>
              <p className={classes.smallBannerText2}>ԲԱԺԱԿ</p>
            </Banner>
            <Banner
                classes={{banner: classes.smallBanner}}
                url={bannerImg3}
                position={"bottomLeft"}
            >
              <p className={classes.smallBannerTitle3}>ԳԻՐՔ</p>
              <p className={classes.smallBannerText3}>ՀԵՂԻՆԱԿ</p>
            </Banner>
            <Banner
                classes={{banner: classes.smallBanner}}
                url={bannerImg4}
                position={"middleRight"}
            >
              <p className={classes.smallBannerTitle4}>ՍՈՒՐՃԻ</p>
              <p className={classes.smallBannerText4}>ԲԱԺԱԿ</p>
            </Banner>
          </div>
        </div>
        <Title title={"ԱՄԵՆԱՎԱՃԱՌՎԱԾ"}/>
        {/*<CarouselProduct/>*/}
        <div className={classes.topOffers}>
          <Banner
              classes={{banner: classes.offersBanner}}
              url={bannerImg5}
              position={"middleRight"}
          >
            <p className={classes.offersName}>ԽՈՀԱՆՈՑԱՅԻՆ</p>
            <p className={classes.offersProduct}>ԲԱԺԱԿ</p>
            <p className={classes.offersPrice}>
              ՍԿՍԱԾ<strong>3500Դ</strong>
            </p>
          </Banner>
          <Banner
              classes={{banner: classes.offersBanner}}
              url={bannerImg6}
              position={"topCenter"}
          >
            <p className={classes.offersName}>ԶՎԱՐՃԱԼԻ ՆՎԵՐՆԵՐ</p>
            <p className={classes.offersProduct}>ԼՈՒՅՍԵՐ</p>
            <p className={classes.offersPrice}>
              ՍԿՍԱԾ<strong>1000Դ</strong>
            </p>
          </Banner>
        </div>
        <Title title={"ՆՈՐ ԱՊՐԱՆՔՆԵՐ"}/>
        {/*<ProductsGroup/>*/}
        <SiteInfo/>
      </div>
  );
};

export default Home;
