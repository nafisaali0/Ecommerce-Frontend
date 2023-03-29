import React from "react";
import { Link } from "react-router-dom";
const BreadCrum = (props) => {
  const { title } = props;
  return (
    <div className="breadcum py-4 mb-0">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="text-style">
              <Link to="/" className="text-dark">
               <h5 className="font">Home &nbsp;</h5> 
              </Link>
              / <h6 className="font">{title}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrum;
