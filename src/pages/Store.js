import React, { useState } from "react";
import BreadCrum from "../component/BreadCrum";
import Meta from "../component/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCart from "../component/ProductCart";
const Store = () => {

  const [grid, setGrid] = useState(4);

  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrum title="Our Store" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-cart mb-3">
                <h3 className="filter-title">Shop By Category</h3>
                <ul className="ps-0">
                  <li>Watch</li>
                  <li>TV</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
              <div className="filter-cart mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div className="filter-sub-title">
                  <p>Avaibility</p>
                </div>
                <div className="mb-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      In Stoct(1)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                      checked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked"
                    >
                      Out Of Stock(0)
                    </label>
                  </div>
                </div>

                <div className="filter-sub-title">
                  <p>Price</p>
                </div>
                <div className="d-flex gap-10 align-items-center">
                  <div class="form-floating ">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInput"
                      placeholder="From"
                    />
                    <label htmlFor="floatingInput">From</label>
                  </div>
                  <div class="form-floating ">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInput"
                      placeholder="To"
                    />
                    <label htmlFor="floatingInput">To</label>
                  </div>
                </div>
                <div className="filter-sub-title">
                  <p>Colors</p>
                </div>
                <div>
                  <ul className="colors ps-0">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>

                <div className="filter-sub-title">
                  <p>Size</p>
                </div>

                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-1"
                    />
                    <label className="form-check-label" htmlFor="color-1">
                      XXL (2)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-2"
                    />
                    <label className="form-check-label" htmlFor="color-2">
                      XL (2)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-3"
                    />
                    <label className="form-check-label" htmlFor="color-3">
                      L (2)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-4"
                    />
                    <label className="form-check-label" htmlFor="color-4">
                      M (2)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-5"
                    />
                    <label className="form-check-label" htmlFor="color-5">
                      S (2)
                    </label>
                  </div>
                </div>
              </div>
              <div className="filter-cart mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap gap-10 align-items-center">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Headphones
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Smart Watch
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Laptop
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Tabs
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter-cart mb-3">
                <h3 className="filter-title">Random Products</h3>
                <div>
                  <div className="random-products mb-3 d-flex ">
                    <div className="w-50">
                      <img
                        src="/images/watch.jpg"
                        alt="product"
                        className="img-fluid"
                      />
                    </div>
                    <div className="w-50">
                      <h6 className="brand">Rolex</h6>
                      <h5 className="title">Rolex watch</h5>
                      <ReactStars
                        count={5}
                        value={3}
                        edit={false}
                        size={24}
                        activeColor="#ffd700"
                      />
                      <p className="price">$100</p>
                    </div>
                  </div>
                  <div className="random-products mb-3 d-flex">
                    <div className="w-50">
                      <img
                        src="/images/watch.jpg"
                        alt="product"
                        className="img-fluid"
                      />
                    </div>
                    <div className="w-50">
                      <h6 className="brand">Rolex</h6>
                      <h5 className="title">Rolex watch</h5>
                      <ReactStars
                        count={5}
                        value={3}
                        edit={false}
                        size={24}
                        activeColor="#ffd700"
                      />
                      <p className="price">$100</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 d-block" style={{ width: "100px" }}>
                      Sort By
                    </p>
                    <select className="form-control form-select bg-light" id="">
                      <option value="manual">Featured</option>
                      <option value="best-selling" selected="selected">
                        Best Selling
                      </option>
                      <option value="title-assending">
                        Alphabetically, A-Z
                      </option>
                      <option value="title-dessending">
                        Alphabetically, Z-A
                      </option>
                      <option value="price-assending">
                        Price, Low to High
                      </option>
                      <option value="price-dessending">
                        Price, Low to High
                      </option>
                      <option value="created-assending">
                        Date, Old to New
                      </option>
                      <option value="created-dessending">
                        Date, New to Old
                      </option>
                    </select>
                  </div>

                  <div className="d-flex align-items-center gap-10">
                    <p className="total-product mb-0">21 Products</p>
                    <div className="d-flex align-items-center gap-10 grid">
                      <img
                        onClick={() => {
                          setGrid(3);
                        }}
                        src="images/gr4.svg"
                        alt="grid"
                        className="img-fluid d-block"
                      />
                      <img
                        onClick={() => {
                          setGrid(4);
                        }}
                        src="images/gr3.svg"
                        alt="grid"
                        className="img-fluid d-block"
                      />
                      <img
                        onClick={() => {
                          setGrid(6);
                        }}
                        src="images/gr2.svg"
                        alt="grid"
                        className="img-fluid d-block"
                      />

                      <img
                        onClick={() => {
                          setGrid(12);
                        }}
                        src="images/gr.svg"
                        alt="grid"
                        className="img-fluid d-block"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-list pb-5">
               <div className="d-flex flex-wrap gap-10">
               <ProductCart grid={grid}/>
               <ProductCart grid={grid}/>
               <ProductCart grid={grid}/>
               <ProductCart grid={grid}/>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
