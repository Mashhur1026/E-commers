import { useContext, useState } from "react";
import "./checkout.css";
import DataContext from "../../DataContext";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
import Notiflix from "notiflix";

function CheckOut() {
  const contextValue = useContext(DataContext);
  const cartItems = contextValue ? contextValue.cartItems : [];
  const total = contextValue ? contextValue.total : 0;

  interface FormValues {
    ismingiz: string;
    familiyangiz: string;
    telefon: string;
    qoshmcha: string;
  }

  const [formValues, setFormValues] = useState<FormValues>({
    ismingiz: "",
    familiyangiz: "",
    telefon: "",
    qoshmcha: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post("/postcard", {
        cardItems: cartItems,
        totalPrice: total,
        userInfo: {
          userName: formValues.ismingiz,
          sureName: formValues.familiyangiz,
          phoneNumber: formValues.telefon,
          message: formValues.qoshmcha,
        },
      });
      console.log(response.data);
      Notiflix.Notify.success("Buyurtma movaqiyatli amalga oshdi");
    } catch (error) {
      Notiflix.Notify.failure("Buyurtma amalga oshmadi");
      console.log(error);
    }
  };

  return (
    <>
      <section id="chechout">
        <h1>To'lov</h1>
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
              <tr key={item._id}>
                <td>
                  <img src={item.images[0]} alt="" />
                </td>
                <td>{item.size}</td>
                <td>{item.price} UZS</td>
                <td>{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section id="checkoutTotal">
        <div id="subtotal">
          <h3>Savat jami</h3>
          <table>
            <tbody>
              <tr>
                <td>Savat oraliq jami</td>
                <td>{total} UZS</td>
              </tr>
              <tr>
                <td>Cargo</td>
                <td>Tavarga qarab</td>
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
          <div>
            <Link to={`/Cargo`}>
              <h4>Cargo nima?</h4>
            </Link>
          </div>
        </div>
      </section>
      <section id="checkout-form-details">
        <form onSubmit={handleSubmit}>
          <h2>Buyurtma uchun kerakli Malumotlar</h2>
          <span>Iltmos anqlik blan toldring</span>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Isminggiz"
            name="ismingiz"
            required
          />
          <input
            onChange={handleChange}
            type="text"
            placeholder="Familiyanggiz"
            name="familiyangiz"
            required
          />
          <input
            onChange={handleChange}
            placeholder="Telefon Raqaminggiz"
            name="telefon"
            type="tel"
            required
          />
          <textarea
            onChange={handleChange}
            placeholder="Qoshmcha malumot"
            name="qoshmcha"
          ></textarea>
          <button>Yuborish</button>
        </form>
      </section>
    </>
  );
}

export default CheckOut;
