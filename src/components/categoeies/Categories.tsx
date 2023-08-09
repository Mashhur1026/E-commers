import "./categories.css";
import bag from "../../assets/category/bag.png";
import buj from "../../assets/category/bujitery.png";
import woman from "../../assets/category/girl.png";
import man from "../../assets/category/man.png";
import sneakers from "../../assets/category/sneakers.png";
import { Link } from "react-router-dom";

function Categories() {
  const array = [
    { img: bag, name: "Sumkalar" },
    { img: buj, name: "Bujiteriyalar" },
    { img: woman, name: "Oyollar Ko'ylaklari" },
    { img: man, name: "Erkaklar Ko'ylaklari" },
    { img: sneakers, name: "Oyoq Kiyimlar" },
  ];

  return (
    <>
      <div id="categories" className="categories">
        <h1>Kategoriyalar</h1>
      </div>

      <section id="feature">
        {array.map((item) => (
          <Link to={`/Shop/${item.name}`} key={item.name} className="fe-box">
            <div>
              <img src={item.img} alt="Free Shipping" />
            </div>
            <h6>{item.name}</h6>
          </Link>
        ))}
      </section>
    </>
  );
}

export default Categories;
