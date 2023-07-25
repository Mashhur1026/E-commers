import { useContext } from "react";
import BlogComponent from "../../components/blogC/BlogComponent";
import "./cart.css";
import DataContext from "../../DataContext";
import { Link } from "react-router-dom";

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
              <tr key={item.id}>
                <td>
                  <button onClick={() => removeItem?.(item)}>
                    <i className="far fa-times-circle"></i>
                  </button>
                </td>
                <td>
                  <img src={item.img[0]} alt="" />
                </td>
                <td>{item.name}</td>
                <td>
                  <select>
                    {item.sizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </td>
                <td>${item.price}</td>
                <td>
                  <input type="number" value={item.quantity} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section id="cart-add">
        <div id="subtotal">
          <h3>Cart Total</h3>
          <table>
            <tbody>
              <tr>
                <td>Cart Subtotal</td>
                <td>${total}</td>
              </tr>
              <tr>
                <td>Cargo</td>
                <td>Tavarga qarab</td>
              </tr>
              <tr>
                <td>
                  <strong>Total</strong>
                </td>
                <td>
                  <strong>${total}</strong>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="cartCargo">
            <button className="normol">Proceed to checkout</button>
            <Link to={`/Cargo`}>
              <h4>What is cargo?</h4>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
