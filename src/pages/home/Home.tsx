import Categories from "../../components/categoeies/Categories";
import "./home.css";
import Products from "../../components/products/Products";
import Banner from "../../components/banner/Banner";
import Smbanners from "../../components/sm-banners/Smbanners";

function Home() {
  return (
    <>
      <section id="hero">
        <h4>Trade-in-offer</h4>
        <h2>Super value deals</h2>
        <h1>On all products</h1>
        <p>Save more with coupons & up to 70% off!</p>
        <button>Shop Now</button>
      </section>
      <Categories />
      <Products />
      <Banner />
      <Smbanners />
    </>
  );
}

export default Home;
