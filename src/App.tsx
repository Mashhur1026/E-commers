import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import SinglePage from "./pages/singlePage/SinglePage";
import Newslatter from "./components/newslater/Newslatter";
import Shop from "./pages/shop/Shop";
import Blog from "./pages/blog/Blog";
import Cart from "./pages/cart/Cart";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Cargo from "./pages/cargo/Cargo";
import CheckOut from "./pages/ceckOut/CheckOut";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop/*" element={<Shop />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/product/:id" element={<SinglePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Cargo" element={<Cargo />} />
        <Route path="/Checkout" element={<CheckOut />} />
      </Routes>
      <Newslatter />
      <Footer />
    </>
  );
}

export default App;
