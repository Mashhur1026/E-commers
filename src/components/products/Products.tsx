import "./products.css";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import DataContext from "../../DataContext";
import axios from "../../api/axios";

interface Product {
  id: number;
  images: string;
  name: string;
  price: number;
  category: string;
  company: string;
}

function Products() {
  const contextValue = useContext(DataContext);
  if (!contextValue) {
    throw new Error("Context is not defined");
  }
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [categoryProduct, setCategoryProduct] = useState<Product[]>([]);

  const { name } = useParams();

  async function getProductData() {
    try {
      const response = await axios.get("/");
      setAllProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProductData();
  }, []);

  useEffect(() => {
    if (name === undefined) {
      setCategoryProduct(allProducts);
    } else {
      const filteredProducts = allProducts.filter(
        (item) => item.category === name
      );
      setCategoryProduct(filteredProducts);
    }
  }, [name, allProducts]);

  const categoryName = name ? name : "Mahsulotlarimiz";

  return (
    <section id="product1">
      <h2>{categoryName}</h2>
      <p>Yozgi kolleksiya Yangi zamonaviy dizayn</p>
      {categoryProduct.length > 0 ? (
        <div className="pro-container">
          {categoryProduct.map((item) => (
            <div key={item.id} className="pro">
              <Link className="underline" to={`/product/${item.id}`}>
                <img src={item.images} alt="prodact" />
                <div className="des">
                  <span>{item.company}</span>
                  <h5>{item.name}</h5>
                  <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <h4>{item.price} UZS</h4>
                </div>
                <button>
                  <i className="fal fa-shopping-cart cart"></i>
                </button>
              </Link>
              <Link className="cargo" to={`/Cargo`}>
                + cargo
              </Link>
            </div>
          ))}
        </div>
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
    </section>
  );
}

export default Products;
