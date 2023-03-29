import React, { useState } from "react";
import BreadCrum from "../component/BreadCrum";
import Meta from "../component/Meta";
import ProductCart from "../component/ProductCart";
import ReactStars from "react-rating-stars-component";
const SingleProduct = () => {
  const [orderProduct, setOrderProduct] = useState(true);
  return (
    <>
      <Meta title={"Dynamic Title here"} />
      <BreadCrum title="Dynamic Title here" />
      <div className="single-product-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6"></div>
            <div className="col-6"></div>

            <section className="description-wrapper home-wrapper-2 py-5">
              <div className="container-xxl">
                <div className="row">
                  <div className="col-12">
                    <div className="description-cart">
                      <h5>Description</h5>
                      <p className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellendus rem quia, animi nihil tempora ut laboriosam
                        fugit! Mollitia non harum, blanditiis ipsam ut similique
                        sed rerum asperiores possimus, minus unde!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="review-wrapper home-wrapper-2 py-5">
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

                      <div className="review-form py-4">
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
                            <label className="mb-2 text-dark ">
                              Review Title
                            </label>
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
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Iusto placeat sit saepe debitis ab asperiores
                            quasi error porro, vel possimus? Provident nemo quia
                            mollitia reprehenderit sed aliquid vel distinctio
                            aut.
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
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Iusto placeat sit saepe debitis ab asperiores
                            quasi error porro, vel possimus? Provident nemo quia
                            mollitia reprehenderit sed aliquid vel distinctio
                            aut.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="popular-wrapper home-wrapper-2 py-5">
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
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
