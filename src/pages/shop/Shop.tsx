import "./shop.css";
import { Route, Routes } from "react-router-dom";
import Categories from "../../components/categoeies/Categories";
import Products from "../../components/products/Products";
import BlogComponent from "../../components/blogC/BlogComponent";

function Shop() {
  return (
    <>
      <BlogComponent
        title="#uyda qoling"
        text="Kuponlar va 70% gacha chegirma bilan ko'proq tejang!"
        img="shop-bg"
      />
      <Categories />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/:name" element={<Products />} />
      </Routes>
      <section id="pagination">
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">
          <i className="fal fa-long-arrow-alt-right"></i>
        </a>
      </section>
    </>
  );
}

export default Shop;
