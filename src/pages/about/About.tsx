import "./about.css";
import img from "../../assets/about/a6.jpg";
import BlogComponent from "../../components/blogC/BlogComponent";

function About() {
  return (
    <>
      <BlogComponent
        title="#KnowUs"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing"
        img="about-bg"
      />
      <section id="about-head">
        <img src={img} alt="" />
        <div>
          <h2>Who We Are</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            perspiciatis nihil at suscipit. Labore sunt expedita ducimus
            reprehenderit amet dolorem libero nesciunt facere, sapiente magni
            maxime at eligendi tempora dicta ad eaque obcaecati minus aliquam
            provident eius nam voluptatibus aut.
          </p>
          <abbr>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            sequi ut tempore reiciendis.
          </abbr>
        </div>
      </section>
    </>
  );
}

export default About;
