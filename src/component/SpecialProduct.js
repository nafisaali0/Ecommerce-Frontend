import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
const SpecialProduct = (props) => {
  const { title, brand, totalrating, price, sold, quantity, imgUrl } = props;
  return (
    <div className="">
      <Link className="special-product-cart position-relative">
        <div className="d-flex justify-content-between gap-4">
          <div>
            <img
              className="img-fluid d-block"
              width={180}
              src={imgUrl ? imgUrl : "images/watch.jpg"}
              alt="watch"
            />
          </div>
          <div>
            <div className="special-product-content">
              <h6 className="brand">{brand}</h6>
              <h5 className="title">{title}</h5>
              <ReactStars
                count={5}
                value={totalrating}
                edit={false}
                size={24}
                activeColor="#ffd700"
              />
              <p className="price">
                <span className="red-p">${price}</span>&nbsp;{" "}
                {/* <strike>$200</strike> */}
              </p>
              <div className="discount-till d-flex align-items-center gap-10">
                <p className="mb-0 d-flex gap-10">
                  <b>5 </b>Days
                </p>
                <div
                  className="d-flex
                align-items-center gap-10"
                >
                  <span className="badge rounded-circle p-3 bg-danger">1</span>:
                  <span className="badge rounded-circle p-3 bg-danger">1</span>:
                  <span className="badge rounded-circle p-3 bg-danger">1</span>
                </div>
              </div>
              <div className="product-count my-3">
                <p>Products:{quantity}</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: quantity / quantity + sold * 100 }}
                    aria-valuenow={quantity / quantity + sold * 100}
                    aria-valuemin={quantity}
                    aria-valuemax={sold + quantity}
                  ></div>
                </div>
              </div>
              <Link to="/cart" className="button">
                Add To Cart
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SpecialProduct;
