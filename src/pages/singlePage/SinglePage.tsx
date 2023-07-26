import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import DataContext, { CartItem } from "../../DataContext";
import "./singlePage.css";

function SinglePage() {
  const { id } = useParams();
  const contextValue = useContext(DataContext);
  const { singleProduct } = contextValue ?? {};
  const productId = id ? parseInt(id, 10) : null;

  const [singleProductUse, setSingleProductUse] = useState<CartItem[] | null>(
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
      setMainImgUrl(contextValue.singleProductUse?.[0].img[0]);
    }
  }, [contextValue]);

  const [mainImgUrl, setMainImgUrl] = useState<string>(
    singleProductUse?.[0].img[0] || ""
  );

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  const handleSmallImageClick = (url: string) => {
    setMainImgUrl(url);
  };

  const handleAddToCart = () => {
    if (singleProductUse && selectedSize) {
      const newItem: CartItem = {
        id: singleProductUse[0].id,
        img: [mainImgUrl],
        category: singleProductUse[0].category,
        cname: singleProductUse[0].cname,
        name: singleProductUse[0].name,
        price: singleProductUse[0].price,
        quantity: quantity,
        sizes: [selectedSize],
        des: singleProductUse[0].des,
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
              alt={singleProductUse[0].name}
            />
            <div className="small-img-group">
              {singleProductUse?.[0].img.map((item) => (
                <div
                  className="small-img-col"
                  key={item}
                  onClick={() => handleSmallImageClick(item)}
                >
                  <img
                    src={item}
                    width="100%"
                    className="small-img"
                    alt={singleProductUse[0].name}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="single-pro-details">
            <h6>Home / {singleProductUse?.[0].category}</h6>
            <h4>{singleProductUse?.[0].name}</h4>
            <h2>${singleProductUse?.[0].price}</h2>
            <select required onChange={(e) => setSelectedSize(e.target.value)}>
              <option value="">Select Size</option>
              {singleProductUse?.[0].sizes.map((size) => (
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
            <span>{singleProductUse?.[0].des}</span>
          </div>
        </section>
      )}
    </>
  );
}

export default SinglePage;
