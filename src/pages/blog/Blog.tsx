import BlogComponent from "../../components/blogC/BlogComponent";
import img1 from "../../assets/blog/b1.jpg";
import img2 from "../../assets/blog/b2.jpg";
import img3 from "../../assets/blog/b3.jpg";
import "./blog.css";

function Blog() {
  const blogs = [
    {
      img: img1,
      title: "The Cotton-Jersey Zip-Up Hoodies",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi sit impedit dolores, suscipit similique possimus fuga, enim nihil perferendis temporibus aspernatur",
      number: "13/1",
    },
    {
      img: img2,
      title: "The Cotton-Jersey Zip-Up Hoodies",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi sit impedit dolores, suscipit similique possimus fuga, enim nihil perferendis temporibus aspernatur",
      number: "13/2",
    },
    {
      img: img3,
      title: "The Cotton-Jersey Zip-Up Hoodies",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi sit impedit dolores, suscipit similique possimus fuga, enim nihil perferendis temporibus aspernatur",
      number: "13/3",
    },
  ];

  return (
    <>
      <BlogComponent
        title="#readmore"
        text="Read all case studies about our products!"
        img="blog-bg"
      />
      <section id="blog">
        {blogs.map((blog) => (
          <div key={blog.title} className="blog-box">
            <div className="blog-img">
              <img src={blog.img} alt="blog" />
            </div>
            <div className="blog-details">
              <h4>{blog.title}</h4>
              <p>{blog.text}</p>
              <a href="#">CONTINUE READING</a>
            </div>
            <h1>{blog.number}</h1>
          </div>
        ))}
      </section>
    </>
  );
}

export default Blog;
