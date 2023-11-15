import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BreadCrum from "../component/BreadCrum";
import Meta from "../component/Meta";
import Container from "../component/Container";
import CustomInput from "../component/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/user/userSlice";
import { BiArrowBack } from "react-icons/bi";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authState = useSelector((state) => state?.auth);
  console.log("auth", authState);
  const goBack = () => {
    navigate(-1);
  };

  const coinStyle = {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: '#ffc107', // Yellow color for coins, you can change it
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: '14px',
    fontWeight: 'bold',
    marginLeft: '5px',
  };

  return (
    <>
      <Meta title={"Account"} />
      <BreadCrum title="Profile" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        {authState && (
      
          <div className="card py-5 px-3 rounded-3">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mx-4">
                <h4>User Information</h4>
                <button
                  className="border-0 fs-6 mb-0 d-flex align-items-center gap-1"
                  onClick={goBack}
                >
                  <BiArrowBack className="fs-5" /> Go Back
                </button>
              </div>
              <ul className="my-3">
                <li className="my-1">
                  <strong>ID:</strong> {authState?.user.id}
                </li>
                <li className="my-1">
                  <strong>Name:</strong> {authState?.user.firstname}{' '}
                  {authState?.user.lastname}
                </li>
                <li className="my-1">
                  <strong>Email:</strong> {authState?.user.email}
                </li>
                <li className="my-1">
                  <strong>Mobile:</strong> {authState?.user.mobile}
                </li>
                <li className="my-2 d-flex align-items-center">
            <strong>User Redeem Coins Earned:</strong>
            <span style={coinStyle}>{authState?.user.redeemCoins === null ?? 10}10</span>
          </li>
                {/* Add more properties as needed */}
              </ul>
            </div>
          </div>
        )}
        {/*    
        <div className="mt-5 bg-white p-4 d-flex gap-3 flex-column rounded-3">
          <div className="d-flex align-items-center gap-3">
            <h6 className="mb-0">Name:</h6>
            <p className="mb-0">
              {authState?.firstname} {authState?.lastname}
            </p>
          </div>
          <div className="d-flex align-items-center gap-3">
            <h6 className="mb-0">Mobile:</h6>
            <p className="mb-0">
              <a href={`tel:+91${authState?.mobile}`}>{authState?.mobile}</a>
            </p>
          </div>
          <div className="d-flex align-items-center gap-3">
            <h6 className="mb-0">Email:</h6>
            <p className="mb-0">
            <a href={`mailto:${authState?.email}`}>{authState?.email}</a>
            </p>
          </div>
          <div className="d-flex align-items-center gap-3">
            <h6 className="mb-0">Comment:</h6>
            <p className="mb-0">{authState}</p>
          </div>
          <div className="d-flex align-items-center gap-3">
            <h6 className="mb-0">Status:</h6>
            <p className="mb-0">{authState}</p>
          </div>
          </div> */}

        {/* <div className="d-flex align-items-center gap-3">
          <h6 className="mb-0">Change Status:</h6>
          <div>
            <select
              name=""
              defaultValue={enqStatus ? enqStatus : "Submitted"}
              className="form-control form-select"
              id=""
              onChange={(e) => setEnquiryStatus(e.target.value, getEnqId)}
            >
              <option value="Submitted">Submitted</option>
              <option value="Contacted">Contacted</option>
              <option value="In Progress">In Progress</option>
              <option value="Resolved">Resolved</option>
            </select>
          </div>
        </div> */}

        {/* <div className="row">
          <div className="col-12">
            <div className="login-cart">
              <h3 className="login-title mb-4 text-center">Login</h3>
              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-20"
              >
                <CustomInput
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email"
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                />
                <div className="error">
                  {formik.touched.email && formik.errors.email}
                </div>

                <CustomInput
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="Enter Your Password"
                  value={formik.values.password}
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                />
                <div className="error">
                  {formik.touched.password && formik.errors.password}
                </div>

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
        </div> */}
      </Container>
    </>
  );
};

export default Profile;
