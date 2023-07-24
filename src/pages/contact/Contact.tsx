import BlogComponent from "../../components/blogC/BlogComponent";
import "./contact.css";

function UserInfo() {
  return (
    <>
      <BlogComponent
        title="#let's_talk"
        text="LEAVE A MESSAGE, We love to hear from you!"
        img="about-bg"
      />
      <section id="contact-details" className="section-p1">
        <div className="details">
          <span>GET IN TOUCH</span>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
          <h3>Head Office</h3>
          <div>
            <li>
              <i className="fal fa-map"></i>
              <p>Jhon kochasi 3-tor kocha</p>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <p>jhonallbe@gmail.com</p>
            </li>
            <li>
              <i className="fas fa-phone-alt"></i>
              <p>+9989099999999</p>
            </li>
            <li>
              <i className="far fa-clock"></i>
              <p>Monday to Saturday: 9.00am to 16pm</p>
            </li>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2501.2387332155135!2d60.28557414598201!3d41.65391265626558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41de495a87fbf9ed%3A0xbd756640f0781cba!2z0KHRgNC10LTQvdGP0Y8g0YjQutC-0LvQsCDihJYxINC40LwuINCRLiDQmtCw0LfQsNC60L7QstCw!5e0!3m2!1sru!2smy!4v1689513567580!5m2!1sru!2smy"
            width="600"
            height="450"
            style={{ border: "0" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <section id="form-details">
        <form action="">
          <span>LEAVE A MESSAGE</span>
          <h2>We love to hear from you</h2>
          <input type="text" placeholder="Your name" />
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your message"></textarea>
          <button>Submit</button>
        </form>
      </section>
    </>
  );
}

export default UserInfo;
