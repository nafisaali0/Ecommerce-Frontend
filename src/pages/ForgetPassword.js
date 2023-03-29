import React from "react";
import BreadCrum from "../component/BreadCrum";
import Meta from "../component/Meta";
const ForgetPassword = () => {
  return (
    <>
      <Meta title={"Account"} />
      <BreadCrum title="Account" />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="login-cart">
                <h3 className="login-title mb-2 text-center">
                  Reset Your Password
                </h3>
                <p className=" text-center mb-4 ">
                  We will send you an email to reset your password
                </p>
                <form action="" className="d-flex flex-column gap-20">
                  <div>
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="Enter Your Email"
                    />
                  </div>
                 

                  <div className="d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0" ty>Submit</button>
                    <button className="button signup border-0">Cancel</button>
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

export default ForgetPassword;
