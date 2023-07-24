import "./singlePage.css";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import DataContext, { CartItem } from "../../DataContext";

function SinglePage() {
  const { id } = useParams();
  const contextValue = useContext(DataContext);
  const { singleProduct } = contextValue ?? {};
  const productId = id ? parseInt(id, 10) : null;

  useEffect(() => {
    if (productId !== null) {
      singleProduct?.(productId);
    }
  }, [productId]);

  const [singleProductUse, setSingleProductUse] = useState<CartItem | null>(
    null
  );

  useEffect(() => {
    setSingleProductUse(contextValue ? contextValue.singleProductUse : null);
  }, [contextValue]);

  return (
    <>
      {singleProductUse && (
        <section id="prodetails">
          <div className="single-pro-img">
            <img
              src={singleProductUse?.img[0]}
              width="100%"
              id="mainImg"
              alt=""
            />
            <div className="small-img-group">
              <div className="small-img-col">
                <img
                  src={singleProductUse?.img[1]}
                  width="100%"
                  className="small-img"
                  alt=""
                />
              </div>
              <div className="small-img-col">
                <img
                  src={singleProductUse?.img[2]}
                  width="100%"
                  className="small-img"
                  alt=""
                />
              </div>
              <div className="small-img-col">
                <img
                  src={singleProductUse?.img[3]}
                  width="100%"
                  className="small-img"
                  alt=""
                />
              </div>
              <div className="small-img-col">
                <img
                  src={singleProductUse?.img[4]}
                  width="100%"
                  className="small-img"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="single-pro-details">
            <h6>Home / {singleProductUse?.category}</h6>{" "}
            {/* Use optional chaining (?.) here */}
            <h4>{singleProductUse?.name}</h4>{" "}
            {/* Use optional chaining (?.) here */}
            <h2>${singleProductUse?.price}</h2>{" "}
            {/* Use optional chaining (?.) here */}
            <select>
              {singleProductUse?.sizes.map((size) => (
                <option key={size}>{size}</option>
              ))}
            </select>
            <input type="number" value="1" />
            <button className="normol">Add To Cart</button>
            <h4>Product Details</h4>
            <span>{singleProductUse?.des}</span>{" "}
            {/* Use optional chaining (?.) here */}
          </div>
        </section>
      )}
    </>
  );
}

export default SinglePage;
