import React from "react";
import { Link } from "react-router-dom";
import BreadCrum from "../component/BreadCrum";
import Meta from "../component/Meta";
const Login = () => {
  return (
    <>
      <Meta title={"Account"} />
      <BreadCrum title="Account" />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="login-cart">
                <h3 className="login-title mb-4 text-center">Login</h3>
                <form action="" className="d-flex flex-column gap-20">
                  <div>
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <div>
                    <input
                      name="password"
                      type="password"
                      className="form-control"
                      placeholder="Enter Your Password"
                    />
                  </div>
                  <div>
                    <Link to="/forget-password">Forget password?</Link>
                  </div>

                  <div className="d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit">Login</button>
                    <Link to="/signup" className="button signup border-0" type="submit">Signup</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
