import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToWishList } from "../features/products/productSlice";
const ProductCart = (props) => {
  const { grid, data } = props;
  console.log("data", data);
  const location = useLocation();
  const dispatch = useDispatch();

  const addToWish = (id) => {
    console.log(id);
    dispatch(addToWishList(id));
  };

  return (
    <>
      {data?.map((item, index) => (
        <div
          key={index}
          className={`${
            location.pathname === "/product" ? `gr-${grid}` : "col-3"
          }`}
        >
          <div className="product-cart position-relative">
            <div className="wishlist-icon position-absolute">
              <button
                className="bg-transparent border-0"
                onClick={(e) => {
                  addToWish(item?._id);
                }}
              >
                <img src="/images/wish.svg" alt="add-cart" />
              </button>
            </div>
            <div className="product-image">
              <img
                src={item?.images[0]?.url}
                className="img-fluid  mx-auto hoverable"
                width={160}
                alt="watch"
              />
              <img
                src={item?.images[0]?.url}
                className="img-fluid  mx-auto hoverable"
                width={160}
                alt="watch-02"
              />
            </div>
            <div className="product-details">
              <h6 className="brand"> {item?.brands}</h6>
              <h5 className="title">{item?.title}</h5>
              <ReactStars
                count={5}
                value={item?.totalrating}
                edit={false}
                size={24}
                activeColor="#ffd700"
              />
              <p
                className={`description ${grid > 4 ? "d-block" : "d-none"}`}
                dangerouslySetInnerHTML={{ __html: item?.description }}
              ></p>
              <p className="price">$ {item?.price}</p>
            </div>
            <div className="action-bar position-absolute">
              <div className="d-flex flex-column gap-15">
                <Link to={'/product/'+item?._id} className="bg-transparent border-0">
                  <img src="/images/view.svg" alt="view" />
                </Link>
                <button className="bg-transparent border-0">
                  <img src="/images/add-cart.svg" alt="add-cart" />
                </button>
                <button className="bg-transparent border-0">
                  <img src="/images/prodcompare.svg" alt="prodcompare" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCart;
