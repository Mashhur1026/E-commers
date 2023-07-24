import "./smbanners.css";

function Smbanners() {
  return (
    <>
      <section id="sm-banner">
        <div className="banner-box">
          <h4>crazy deals</h4>
          <h2>buy 1 get 1 free</h2>
          <span>The best classic dress in on sale at care</span>
          <button>Learn More</button>
        </div>
        <div className="banner-box banner-box2">
          <h4>spring / summer</h4>
          <h2>buy 1 get 1 free</h2>
          <span>The best classic dress in on sale at care</span>
          <button>Collection</button>
        </div>
      </section>
      {/* Smoll Bnners */}
      <section id="banner3">
        <div className="banner-box">
          <h2>SEASONAL SALE</h2>
          <h3>Winter Collection -50% OFF</h3>
        </div>
        <div className="banner-box banner-box2">
          <h2>SEASONAL SALE</h2>
          <h3>Winter Collection -50% OFF</h3>
        </div>
        <div className="banner-box banner-box3">
          <h2>SEASONAL SALE</h2>
          <h3>Winter Collection -50% OFF</h3>
        </div>
      </section>
    </>
  );
}

export default Smbanners;
