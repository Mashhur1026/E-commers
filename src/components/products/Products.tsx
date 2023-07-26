import "./products.css";
import pro1 from "../../assets/products/f1.jpg";
import pro2 from "../../assets/products/f2.jpg";
import pro3 from "../../assets/products/f3.jpg";
import pro4 from "../../assets/products/f4.jpg";
import pro5 from "../../assets/products/f5.jpg";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import DataContext from "../../DataContext";

interface Prop {
  id: number;
  img: string[];
  category: string;
  cname: string;
  name: string;
  price: number;
  quantity: number;
  sizes: string[];
}
[];

export const array = [
  {
    id: 1,
    img: [pro1, pro2, pro3, pro4],
    category: "Oyoq kyimlar",
    cname: "zara",
    name: "Koylak",
    price: 29,
    quantity: 1,
    sizes: ["XL", "XX", "M", "L"],
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore odio tenetur sequi culpa nulla, totam cumque corporis illo quasi, exercitationem quia sit fugit libero, laborum et explicabo facere laudantium dolor.",
  },
  {
    id: 2,
    img: [pro2, pro1, pro3, pro4],
    category: "Erkaklar Ko'ylaklar",
    cname: "zara",
    name: "Yupka",
    price: 39,
    quantity: 1,
    sizes: ["XL", "XX", "M", "L"],
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore odio tenetur sequi culpa nulla, totam cumque corporis illo quasi, exercitationem quia sit fugit libero, laborum et explicabo facere laudantium dolor.",
  },
  {
    id: 3,
    img: [pro3, pro1, pro2, pro4],
    category: "Ayollar Ko'ylaklar",
    cname: "zara",
    name: "Koylak",
    price: 19,
    quantity: 1,
    sizes: ["XL", "XX", "M", "L"],
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore odio tenetur sequi culpa nulla, totam cumque corporis illo quasi, exercitationem quia sit fugit libero, laborum et explicabo facere laudantium dolor.",
  },
  {
    id: 4,
    img: [pro4, pro1, pro2, pro3],
    category: "Sumkalar",
    cname: "zara",
    name: "Kiym",
    price: 69,
    quantity: 1,
    sizes: ["XL", "XX", "M", "L"],
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore odio tenetur sequi culpa nulla, totam cumque corporis illo quasi, exercitationem quia sit fugit libero, laborum et explicabo facere laudantium dolor.",
  },
  {
    id: 5,
    img: [pro5, pro1, pro2, pro3, pro4],
    category: "Bijuteriyalar",
    cname: "zara",
    name: "Kofta",
    price: 59,
    quantity: 1,
    sizes: ["XL", "XX", "M", "L"],
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore odio tenetur sequi culpa nulla, totam cumque corporis illo quasi, exercitationem quia sit fugit libero, laborum et explicabo facere laudantium dolor.",
  },
];

function Products() {
  const contextValue = useContext(DataContext);
  if (!contextValue) {
    throw new Error("Context is not defined");
  }
  const [categoryProduct, setCategoryProduct] = useState<Prop[]>([]);

  const { name } = useParams();

  useEffect(() => {
    if (!name) {
      setCategoryProduct(array);
    } else {
      const filteredProducts = array.filter((item) => item.category === name);
      setCategoryProduct(filteredProducts);
    }
  }, [name]);

  const categoryName = name ? name : "Our Products";

  return (
    <section id="product1">
      <h2>{categoryName}</h2>
      <p>Summer Collection New Morden Design</p>
      <div className="pro-container">
        {categoryProduct.map((item) => (
          <div key={item.id} className="pro">
            <Link className="underline" to={`/product/${item.id}`}>
              <img src={item.img[0]} alt="prodact" />
              <div className="des">
                <span>{item.cname}</span>
                <h5>{item.name}</h5>
                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h4>${item.price}</h4>
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
    </section>
  );
}

export default Products;
