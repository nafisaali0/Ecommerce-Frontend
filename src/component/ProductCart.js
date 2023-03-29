import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { useLocation } from "react-router-dom";
const ProductCart = (props) => {
  const { grid } = props;
  let location = useLocation();
  console.log(location);
  return (
    <div
      className={`${location.pathname === "/product" ? `gr-${grid}` : "col-3"}`}
    >
      <Link to="/product/:id" className="product-cart position-relative">
        <div className="wishlist-icon position-absolute">
          <Link>
            <img src="/images/wish.svg" alt="add-cart" />
          </Link>
        </div>
        <div className="product-image">
          <img src="/images/watch.jpg" className="img-fluid" alt="watch" />
          <img
            src="/images/watch-02.avif"
            className="img-fluid"
            alt="watch-02"
          />
        </div>
        <div className="product-details">
          <h6 className="brand">Rolex</h6>
          <h5 className="title">Rolex watch</h5>
          <ReactStars
            count={5}
            value={3}
            edit={false}
            size={24}
            activeColor="#ffd700"
          />
          <p className={`description ${grid !== 3 ? "d-block" : "d-none"}`}>
            Rolex watch for posh people.not everyone can deserve it!
          </p>
          <p className="price">$100</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
              <img src="/images/view.svg" alt="view" />
            </Link>
            <Link>
              <img src="/images/add-cart.svg" alt="add-cart" />
            </Link>
            <Link>
              <img src="/images/prodcompare.svg" alt="prodcompare" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCart;
