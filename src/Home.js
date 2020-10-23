import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://cdn11.bigcommerce.com/s-9lvur5vls0/images/stencil/1280x1280/products/212/1418/khalil_mamoon__52998.1588121348.png?c=2"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="Khalil Mamoon Pharonie (1 hose) Hookah"
            price={115.99}
            rating={5}
            image="https://www.hookah-shisha.com/store/pc/catalog/Hookah-KM-Pharonie-GoldStriped-l.JPG?pIdProduct=5098"
          />
          <Product
            id="49538094"
            title="Khalil Mamoon Shamadan (1 hose) Hookah"
            price={159.}
            rating={4}
            image="https://www.hookah-shisha.com/store/pc/catalog/Hookah-KM-Shamadan-Short-SilverStriped-l.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Khalil Mamoon Oxidized Medium Trimetal (1 hose) Hookah"
            price={164.99}
            rating={5}
            image="https://www.hookah-shisha.com/store/pc/catalog/Hookah-KM-OX-Trimetal-Medium-GoldStriped-l.jpg"
          />
          <Product
            id="23445930"
            title="Kaloud Samsaris Vitria Hookah Bowl & Lotus Heat Management Combo"
            price={93.24}
            rating={5}
            image="https://www.hookah-shisha.com/store/pc/catalog/Misc-Kaloud-Lotus-II-Bowl-NoKey-m.jpg"
          />
          <Product
            id="3254354345"
            title="Amazing Plastic Hookah Hose"
            price={9.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51GedfN%2BslL._AC_SX425_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Fumari Coal Burner"
            price={19.98}
            rating={5}
            image="https://www.southsmoke.com/prod_images_large/Fumari-Coal-Burner.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;