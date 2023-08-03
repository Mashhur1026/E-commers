import "./footer.css";
import logo from "../../assets/logo.png";
import pay from "../../assets/pay/pay.png";

function Footer() {
  return (
    <footer>
      <div className="col">
        <img className="logo" src={logo} alt="logo" />
        <h4>Aloqa</h4>
        <p>
          <strong>Manzil: </strong>Xorazm viloyati
        </p>
        <p>
          <strong>Telefon: </strong> +99890999999 / +99899999999
        </p>
        <p>
          <strong>Soat: </strong>10:00 - 18:00, Dushanba - Shanba
        </p>
        <div className="follow">
          <h4>Bizni Kuzating</h4>
          <div className="icon">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-telegram"></i>
          </div>
        </div>
      </div>

      <div className="col">
        <h4>Haqida</h4>
        <a href="/About">Biz haqimizda</a>
        <a href="#">Yetkazib berish haqida ma'lumot</a>
        <a href="/Contact">Biz bilan bog'lanish</a>
      </div>

      <div className="col">
        <h4>Mening hisobim</h4>
        <a href="/Cart">Savatni ko'rish</a>
        <a href="#">Mening Buyurtmalarim</a>
        <a href="/Contact">Yordam</a>
      </div>

      <div className="col install">
        <h4>Secured Payment Gateways</h4>
        <img src={pay} alt="pay" />
      </div>

      <div className="copyright">
        <p>&#169; 2023, Created by Mashhur Yuldoshev, All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
