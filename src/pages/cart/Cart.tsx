import { useContext } from "react";
import BlogComponent from "../../components/blogC/BlogComponent";
import "./cart.css";
import DataContext from "../../DataContext";
import { Link } from "react-router-dom";
import Notiflix from "notiflix";

function Cart() {
  const contextValue = useContext(DataContext);
  const cartItems = contextValue ? contextValue.cartItems : [];
  const { removeItem } = contextValue ?? {};
  const total = contextValue ? contextValue.total : 0;
  return (
    <>
      <BlogComponent
        title="#lets_talk"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        img="about-bg"
      />
      <section id="cart">
        <table width="100%">
          <thead>
            <tr>
              <td></td>
              <td>Rasm</td>
              <td>Ism</td>
              <td>Razmer</td>
              <td>Narx</td>
              <td>Miqdor</td>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item._id}>
                <td>
                  <button
                    onClick={() => {
                      removeItem?.(item);
                      Notiflix.Notify.failure("Tavar savatdan olindi");
                    }}
                  >
                    <i className="far fa-times-circle"></i>
                  </button>
                </td>
                <td>
                  <img src={item.images[0]} alt="" />
                </td>
                <td>{item.name}</td>
                <td>
                  {item.size.map((size) => (
                    <p key={size}>{size}</p>
                  ))}
                </td>
                <td>{item.price} UZS</td>
                <td>{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section id="cart-add">
        <div id="subtotal">
          <h3>Savat jami</h3>
          <table>
            <tbody>
              <tr>
                <td>Savat jami</td>
                <td>{total} UZS</td>
              </tr>
              <tr>
                <td>Cargo</td>
                <td>Mahsulotga qarab</td>
              </tr>
              <tr>
                <td>
                  <strong>Jami</strong>
                </td>
                <td>
                  <strong>{total} UZS</strong>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="cartCargo">
            {cartItems.length !== 0 ? (
              <>
                <Link to={`/Checkout`}>
                  <button className="normol">To'lov</button>
                </Link>
                <Link to={`/Cargo`}>
                  <h4>Cargo nima?</h4>
                </Link>
              </>
            ) : (
              <>
                <Link to={`/Shop`}>
                  <button className="normol">Xarid qilish</button>
                </Link>
                <a>
                  <h4>Siz hali hech qanday xarid qilmagansiz!</h4>
                </a>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
