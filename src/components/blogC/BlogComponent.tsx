import "./blogC.css";

interface Prop {
  img: string;
  title: string;
  text: string;
}

function BlogComponent({ img, text, title }: Prop) {
  return (
    <section id="page-header" className={img}>
      <h2>{title}</h2>
      <p>{text}</p>
    </section>
  );
}

export default BlogComponent;
