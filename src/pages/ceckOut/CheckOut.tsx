import { useContext } from "react";
import "./checkout.css";
import DataContext from "../../DataContext";
import { Link } from "react-router-dom";

function CheckOut() {
  const contextValue = useContext(DataContext);
  const cartItems = contextValue ? contextValue.cartItems : [];
  const total = contextValue ? contextValue.total : 0;

  return (
    <>
      <section id="chechout">
        <h1>Checkout</h1>
        <table width="100%">
          <thead>
            <tr>
              <td>Rasm</td>
              <td>Razmer</td>
              <td>Narx</td>
              <td>Miqdor</td>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <img src={item.img[0]} alt="" />
                </td>
                <td>{item.sizes}</td>
                <td>${item.price}</td>
                <td>{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section id="checkoutTotal">
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
          <div>
            <Link to={`/Cargo`}>
              <h4>What is cargo?</h4>
            </Link>
          </div>
        </div>
      </section>
      <section id="checkout-form-details">
        <form>
          <h2>Buyurtma uchun kerakli Malumotlar</h2>
          <span>Iltmos anqlik blan toldring</span>
          <input type="text" placeholder="Isminggiz" />
          <input type="text" placeholder="Familiyanggiz" />
          <input
            placeholder="Telefon Raqaminggiz"
            type="tel"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          />
          <textarea placeholder="Qoshmcha malumot"></textarea>
          <button>Submit</button>
        </form>
      </section>
    </>
  );
}

export default CheckOut;
