import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "./singlePage.css";
import Notiflix from "notiflix";
import axios from "../../api/axios";
import DataContext from "../../DataContext";

interface CartItem {
  _id: number;
  images: string[];
  category: string;
  name: string;
  price: number;
  size: string[];
  desc: string;
  quantity: number;
  company: string;
}

function SinglePage() {
  const { id } = useParams();
  const productId = id;
  const contextValue = useContext(DataContext);
  const [singleProductUse, setSingleProductUse] = useState<CartItem>();
  const [mainImgUrl, setMainImgUrl] = useState<string>();

  async function getProductData() {
    try {
      const response = await axios.get(`/single?singleId=${productId}`);
      setSingleProductUse(response.data);

      if (response.data.images.length > 0) {
        setMainImgUrl(response.data.images[0]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProductData();
  }, []);

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  const handleSmallImageClick = (url: string) => {
    setMainImgUrl(url);
  };

  const handleAddToCart = () => {
    if (singleProductUse && selectedSize) {
      const newItem: CartItem = {
        _id: singleProductUse._id,
        images: [mainImgUrl || ""],
        category: singleProductUse.category,
        name: singleProductUse.name,
        price: singleProductUse.price,
        quantity: quantity,
        size: [selectedSize],
        desc: singleProductUse.desc,
        company: singleProductUse.company,
      };
      contextValue?.singleAddCard?.(newItem);
    }
    if (selectedSize === null) {
      Notiflix.Notify.warning("Iltmos razmer tanlang");
    } else {
      Notiflix.Notify.success("Tavar savatga qoshild");
    }
  };
  return (
    <>
      {singleProductUse && (
        <section id="prodetails">
          <div className="single-pro-img">
            <img
              src={mainImgUrl}
              width="100%"
              id="mainImg"
              alt={singleProductUse.name}
            />
            <div className="small-img-group">
              {singleProductUse.images.map((item) => (
                <div
                  className="small-img-col"
                  key={item}
                  onClick={() => handleSmallImageClick(item)}
                >
                  <img
                    src={item}
                    width="100%"
                    className="small-img"
                    alt={singleProductUse.name}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="single-pro-details">
            <h6>
              Home / {singleProductUse.category} / {singleProductUse.company}
            </h6>
            <h4>{singleProductUse.name}</h4>
            <h2>{singleProductUse.price} UZS</h2>
            <select required onChange={(e) => setSelectedSize(e.target.value)}>
              <option value="">Select Size</option>
              {singleProductUse.size.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
            <button onClick={handleAddToCart}>Savatga qo'shish</button>
            <h4>Product Details</h4>
            <span>{singleProductUse.desc}</span>
          </div>
        </section>
      )}
    </>
  );
}

export default SinglePage;
