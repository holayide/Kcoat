import Header from "../components/Header";
import HeroPage from "../components/Hero";
import PremierService from "../components/PremierService";
import Preorder from "../components/Preorder";
import LastestArrival from "../components/LastestArrivals";
import Categories from "../components/Categories";
import PopularProducts from "../components/PopularProducts";
import CustomersReview from "../components/CustomersReview";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <>
      <Header />
      <HeroPage />
      <PremierService />
      <Preorder />
      <LastestArrival />
      <Categories />
      <PopularProducts />
      <CustomersReview />
      <NewsLetter />
      <Footer />

    </>
  );
}
