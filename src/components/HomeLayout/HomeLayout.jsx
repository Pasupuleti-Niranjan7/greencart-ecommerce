
import HomeBanner from "./HomeBanner";
import HomeCategories from "./HomeCategories";
import HomeOfferBanner from "./HomeOfferBanner";
import HomePopularPlants from "./HomePopularPlants";
import HomeReview from "./HomeReview";
import HomeServices from "./HomeServices";
import HomeTrendingProducts from "./HomeTrendingProducts";
import EndBanner from "../../EndBanner";
import Footer from "../../Footer";
import { Helmet } from 'react-helmet-async';

function HomeLayout() {
  return (
    <>
      <Helmet>
        <title>Niranjan Indoor Plants | Home</title>
        <meta name="description" content="Discover the best indoor plants to enliven your home. Shop our curated collection of trending and popular plants." />
      </Helmet>
      <main>
        <HomeBanner />
        <HomeServices />
        <HomePopularPlants />
        <HomeTrendingProducts />
        <HomeOfferBanner />
        <HomeReview />
        <HomeCategories />
        <EndBanner />
        <Footer />
      </main>
    </>
  );
}

export default HomeLayout;
