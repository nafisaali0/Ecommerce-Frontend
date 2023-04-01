import React from "react";
import { Link } from "react-router-dom";
import BreadCrum from "../component/BreadCrum";
import Meta from "../component/Meta";
import Container from "../component/Container";
import CustomInput from "../component/CustomInput";
const Login = () => {
  return (
    <>
      <Meta title={"Account"} />
      <BreadCrum title="Account" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="login-cart">
              <h3 className="login-title mb-4 text-center">Login</h3>
              <form action="" className="d-flex flex-column gap-20">
                <CustomInput
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Enter Your Email"
                  />
                
                <CustomInput
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Enter Your Password"
                  />
               
                <div>
                  <Link to="/forget-password">Forget password?</Link>
                </div>

                <div className="d-flex justify-content-center gap-15 align-items-center">
                  <button className="button border-0" type="submit">
                    Login
                  </button>
                  <Link
                    to="/signup"
                    className="button signup border-0"
                    type="submit"
                  >
                    Signup
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
