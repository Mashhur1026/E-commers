import "./singlePage.css";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import DataContext from "../../DataContext";

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

  const cartItems = contextValue ? contextValue.cartItems : [];
  console.log(cartItems);
  console.log(contextValue?.cartItems);

  return (
    <>
      {cartItems.map((cartItem) => (
        <section id="prodetails">
          <div className="single-pro-img">
            <img src={cartItem.img[0]} width="100%" id="mainImg" alt="" />
            <div className="small-img-group">
              <div className="small-img-col">
                <img
                  src={cartItem.img[1]}
                  width="100%"
                  className="small-img"
                  alt=""
                />
              </div>
              <div className="small-img-col">
                <img
                  src={cartItem.img[2]}
                  width="100%"
                  className="small-img"
                  alt=""
                />
              </div>
              <div className="small-img-col">
                <img
                  src={cartItem.img[3]}
                  width="100%"
                  className="small-img"
                  alt=""
                />
              </div>
              <div className="small-img-col">
                <img
                  src={cartItem.img[4]}
                  width="100%"
                  className="small-img"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="single-pro-details">
            <h6>Home / {cartItem.category}</h6>
            <h4>{cartItem.name}</h4>
            <h2>${cartItem.price}</h2>
            <select>
              {cartItem.sizes.map((size) => (
                <option>{size}</option>
              ))}
            </select>
            <input type="number" value="1" />
            <button className="normol">Add To Cart</button>
            <h4>Product Details</h4>
            <span>{cartItem.des}</span>
          </div>
        </section>
      ))}
    </>
  );
}

export default SinglePage;
