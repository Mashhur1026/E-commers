import Categories from "../../components/categoeies/Categories";
import "./home.css";
import Products from "../../components/products/Products";
import Banner from "../../components/banner/Banner";
import Smbanners from "../../components/sm-banners/Smbanners";
import axios from "../../api/axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface BannerData {
  _id: string;
  images: string[];
  text_one: string;
  text_two: string;
  text_three: string;
}

function Home() {
  const [banners, setBanners] = useState<BannerData[]>([]);

  async function getBannerData() {
    try {
      const response = await axios.get("/getbanner");
      setBanners(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getBannerData();
  }, []);

  return (
    <>
      {banners.length > 0 ? (
        <section
          id="hero"
          style={{ backgroundImage: `url(${banners[0].images[0]})` }}
        >
          {banners.map((banner) => (
            <div key={banner._id}>
              <h4>{banner.text_one}</h4>
              <h2>{banner.text_two.slice(0, banner.text_two.length / 2)}</h2>
              <h1>{banner.text_two.slice((banner.text_two.length + 2) / 2)}</h1>
              <p>{banner.text_three}</p>
              <Link to={`/Shop`}>Mahsulotlar</Link>
            </div>
          ))}
        </section>
      ) : (
        <section className="loader">
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </section>
      )}

      <Categories />
      <Products />
      <Banner />
      <Smbanners />
    </>
  );
}

export default Home;
