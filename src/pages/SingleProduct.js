import React, { useState } from "react";
import BreadCrum from "../component/BreadCrum";
import Meta from "../component/Meta";
import ProductCart from "../component/ProductCart";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Color from "../component/Color";
import { Link } from "react-router-dom";
const SingleProduct = () => {
  const props = {
    width: 800,
    height: 500,
    zoomWidth: 500,
    img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",
  };
  const [orderProduct, setOrderProduct] = useState(true);
  return (
    <>
      <Meta title={"Dynamic Title here"} />
      <BreadCrum title="Dynamic Title here" />
      <div className="single-product-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="product-main d-flex gap-10">
              <div className="col-6">
                <div className="product-main-image">
                  <div>
                    <ReactImageZoom {...props} />
                  </div>
                </div>
                <div className="product-other-imege d-flex flex-wrap gap-15 mt-3">
                  <div>
                    <img
                      src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div>
                    <img
                      src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="product-main-details">
                  <div className="border-bottom py-2">
                    <h3 className="title">Watch Rolex Note 12 Pro</h3>
                  </div>
                  <div className="border-bottom py-3">
                    <p className="price">$100</p>

                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        value={3}
                        edit={false}
                        size={24}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">(2 Reviews)</p>
                    </div>
                    <a
                      href="#review"
                      className="text-dark text-decoration-underline"
                    >
                      Write a Review
                    </a>
                  </div>
                  <div className="border-bottom py-3">
                    <div className="d-flex  align-items-center gap-10 my-2">
                      <h3 className="product-heading">Type :</h3>{" "}
                      <p className="product-data">Watch</p>
                    </div>
                    <div className="d-flex  align-items-center gap-10 my-2">
                      <h3 className="product-heading">Barand :</h3>{" "}
                      <p className="product-data">Rolex</p>
                    </div>
                    <div className="d-flex  align-items-center gap-10 my-2">
                      <h3 className="product-heading">Catagory :</h3>{" "}
                      <p className="product-data">Watch</p>
                    </div>
                    <div className="d-flex  align-items-center gap-10 my-2">
                      <h3 className="product-heading">Tags :</h3>{" "}
                      <p className="product-data">Popular</p>
                    </div>
                    <div className="d-flex  align-items-center gap-10 my-2">
                      <h3 className="product-heading">SKU :</h3>{" "}
                      <p className="product-data">1245</p>
                    </div>
                    <div className="d-flex  align-items-center gap-10 my-2">
                      <h3 className="product-heading">Avaibility :</h3>{" "}
                      <p className="product-data">In Stock</p>
                    </div>
                    <div className="d-flex flex-column   gap-10 my-2">
                      <h3 className="product-heading">Size :</h3>{" "}
                      <div className="d-flex flex-wrap gap-15 ">
                        <span className="badge border-1 border border-secondary bg-white text-dark py-2">
                          S
                        </span>
                        <span className="badge border-1 border border-secondary bg-white text-dark py-2">
                          M
                        </span>
                        <span className="badge border-1 border border-secondary bg-white text-dark py-2">
                          L
                        </span>
                        <span className="badge border-1 border border-secondary bg-white text-dark py-2">
                          XL
                        </span>
                      </div>
                    </div>
                    <div className="d-flex flex-column   gap-10 my-2">
                      <h3 className="product-heading">Color :</h3> <Color />
                    </div>
                    <div className="d-flex gap-15 my-2">
                      <h3 className="product-heading">Quantity :</h3>{" "}
                      <div className="">
                        <input
                          type="number"
                          id=""
                          min={1}
                          max={10}
                          defaultValue={1}
                          style={{ width: "70px" }}
                          className="form-control"
                        />
                      </div>
                      <div className="d-flex gap-15 align-items-center">
                        <button className="button border-0" type="submit">
                          Add To Cart
                        </button>
                        <Link
                          to="/signup"
                          className="button signup border-0"
                          type="submit"
                        >
                          Buy IT Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="description-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="description-cart">
                <h5>Description</h5>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus rem quia, animi nihil tempora ut laboriosam fugit!
                  Mollitia non harum, blanditiis ipsam ut similique sed rerum
                  asperiores possimus, minus unde!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="review-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="review-inner-wrapper">
                <div className="review-cart d-flex justify-content-between align-items-end">
                  <div>
                    <h5 className="mb-2">Customers Reviews</h5>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        value={3}
                        edit={false}
                        size={24}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 2 Reviews</p>
                    </div>
                  </div>
                  <div>
                    {orderProduct && (
                      <a
                        href="/"
                        className="text-dark text-decoration-underline"
                      >
                        Write a Review
                      </a>
                    )}
                  </div>
                </div>

                <div className="review-form py-4" id="review">
                  <h6>Write a Review</h6>
                  <form action="" className="d-flex flex-column gap-20">
                    <div>
                      <label className="mb-2 text-dark ">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Name"
                      />
                    </div>
                    <div>
                      <label className="mb-2 text-dark ">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Your Email"
                      />
                    </div>

                    <div>
                      <label className="mb-2 text-dark ">Review</label>
                      <ReactStars
                        count={5}
                        value={3}
                        edit={true}
                        size={24}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div>
                      <label className="mb-2 text-dark ">Review Title</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Review Title"
                      />
                    </div>
                    <div>
                      <label className="mb-2 text-dark ">
                        Body Of Review(1500)
                      </label>
                      <textarea
                        cols={30}
                        rows={4}
                        id=""
                        name=""
                        type="text"
                        className="form-control w-100"
                        placeholder="Type Your Review Here"
                      />
                    </div>
                    <div className="d-flex justify-content-end mt-2">
                      <button className="button border-0 " type="submit">
                        Submit Review
                      </button>
                    </div>
                  </form>
                </div>

                <div className="reviews">
                  <div className="review">
                    <div className="d-flex align-items-center gap-15">
                      <h6 className="mb-0">Shahinur Islam</h6>
                      <ReactStars
                        count={5}
                        value={3}
                        edit={false}
                        size={24}
                        activeColor="#ffd700"
                      />
                    </div>

                    <p className="mb-0 mt-2">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Iusto placeat sit saepe debitis ab asperiores quasi error
                      porro, vel possimus? Provident nemo quia mollitia
                      reprehenderit sed aliquid vel distinctio aut.
                    </p>
                  </div>
                  <div className="review">
                    <div className="d-flex align-items-center gap-15">
                      <h6 className="mb-0">Shahinur Islam</h6>
                      <ReactStars
                        count={5}
                        value={3}
                        edit={false}
                        size={24}
                        activeColor="#ffd700"
                      />
                    </div>

                    <p className="mb-0 mt-2">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Iusto placeat sit saepe debitis ab asperiores quasi error
                      porro, vel possimus? Provident nemo quia mollitia
                      reprehenderit sed aliquid vel distinctio aut.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="popular-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="blog-heading">Our Popular Product</h3>
            </div>
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
