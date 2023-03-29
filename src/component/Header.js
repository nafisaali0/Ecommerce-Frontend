import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping Over 100$ & Return policy
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:{" "}
                <a className="text-white" href="tel:+880 1798633672">
                  +880 1798633672
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white">NanoSoft</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search product here..."
                  aria-label="Search product here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  <BsSearch className="fs-5 text-white" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-link d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    to="/compare-product"
                    className="d-flex align-items-center gap-15 text-white"
                  >
                    <img src="/images/compare.svg" alt="compare" />
                    <p className="mb-0">
                      Compare <br /> Product
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/wishlist"
                    className="d-flex align-items-center gap-15 text-white"
                  >
                    <img src="/images/wishlist.svg" alt="wishlist" />
                    <p className="mb-0">
                      Favourite <br />
                      Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/login"
                    className="d-flex align-items-center gap-15 text-white"
                  >
                    <img src="/images/user.svg" alt="user" />
                    <p className="mb-0">
                      Log In <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/cart"
                    className="d-flex align-items-center gap-15 text-white"
                  >
                    <img src="/images/cart.svg" alt="cart" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">$500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-20">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-20 d-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src="/images/menu.svg" alt="menu" />
                      <span className="me-5 d-inline-block">
                        Shop Catagories
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a className="dropdown-item text-white" href="/">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item text-white" href="/">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item text-white" href="/">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-30">
                    <NavLink className="link-text" to="/">
                      Home
                    </NavLink>
                    <NavLink className="link-text" to="/product">
                      Our Store
                    </NavLink>
                    <NavLink className="link-text" to="/blog">
                      Blog
                    </NavLink>
                    <NavLink className="link-text" to="/contact">
                      Contact
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
