import "./footer.css";
import logo from "../../assets/logo.png";
import pay from "../../assets/pay/pay.png";

function Footer() {
  return (
    <footer>
      <div className="col">
        <img className="logo" src={logo} alt="logo" />
        <h4>Contact</h4>
        <p>
          <strong>Address: </strong>Lorem ipsum dolor, sit amet consectetur
        </p>
        <p>
          <strong>Phone: </strong> +99890999999 / +99899999999
        </p>
        <p>
          <strong>Hours: </strong>10:00 - 18:00, Mon - Sat
        </p>
        <div className="follow">
          <h4>Follow Us</h4>
          <div className="icon">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </div>

      <div className="col">
        <h4>About</h4>
        <a href="#">About Us</a>
        <a href="#">Delivery Information</a>
        <a href="#">Contact Us</a>
      </div>

      <div className="col">
        <h4>My Account</h4>
        <a href="#">View Cart</a>
        <a href="#">My Orders</a>
        <a href="#">Help</a>
      </div>

      <div className="col install">
        <h4>Secured Payment Gateways</h4>
        <img src={pay} alt="pay" />
      </div>

      <div className="copyright">
        <p>2023, Created by Mashhur Yuldoshev</p>
      </div>
    </footer>
  );
}

export default Footer;
