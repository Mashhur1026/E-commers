import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import DataContext, { CartItem } from "../../DataContext";
import "./singlePage.css";

function SinglePage() {
  const { id } = useParams();
  const contextValue = useContext(DataContext);
  const { singleProduct } = contextValue ?? {};
  const { singleAddCard } = contextValue ?? {};
  const productId = id ? parseInt(id, 10) : null;

  const [singleProductUse, setSingleProductUse] = useState<CartItem | null>(
    null
  );

  useEffect(() => {
    if (productId !== null) {
      singleProduct?.(productId);
    }
  }, [productId]);

  useEffect(() => {
    setSingleProductUse(contextValue ? contextValue.singleProductUse : null);
    if (contextValue?.singleProductUse) {
      setMainImgUrl(contextValue.singleProductUse.img[0]);
    }
  }, [contextValue]);

  const [mainImgUrl, setMainImgUrl] = useState<string>(
    singleProductUse?.img[0] || ""
  );

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  const handleSmallImageClick = (url: string) => {
    setMainImgUrl(url);
  };

  const handleAddToCart = () => {
    if (singleProductUse && selectedSize) {
      const newItem: CartItem = {
        id: singleProductUse.id,
        img: [mainImgUrl],
        category: singleProductUse.category,
        cname: singleProductUse.cname,
        name: singleProductUse.name,
        price: singleProductUse.price,
        quantity: quantity,
        sizes: [selectedSize],
        des: singleProductUse.des,
      };
      contextValue?.singleAddCard?.(newItem);
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
              {singleProductUse?.img.map((item) => (
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
            <h6>Home / {singleProductUse?.category}</h6>
            <h4>{singleProductUse?.name}</h4>
            <h2>${singleProductUse?.price}</h2>
            <select onChange={(e) => setSelectedSize(e.target.value)}>
              <option value="">Select Size</option>
              {singleProductUse?.sizes.map((size) => (
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
            <button onClick={handleAddToCart}>Add To Cart</button>
            <h4>Product Details</h4>
            <span>{singleProductUse?.des}</span>
          </div>
        </section>
      )}
    </>
  );
}

export default SinglePage;
