import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative py-2">
                <img
                  src="/images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt="main-banner-1"
                />
                <div className="main-banner-content position-absolute">
                  <h4>Super Charged For Pros</h4>
                  <h5>ipad S-13 pro</h5>
                  <p>From $999 or 42.3/mo</p>
                  <Link className="button">Buy Now</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div
                className="d-flex flex-wrap align-items-center justify-content-between
                gap-10
              "
              >
                <div className="small-banner position-relative py-2">
                  <img
                    src="/images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="catbanner-01"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Best Sells</h4>
                    <h5>HP Paviloion</h5>
                    <p>
                      From $999 <br /> 42.3/month
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative py-2">
                  <img
                    src="/images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="catbanner-02"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Best Sells</h4>
                    <h5>Smart Watch</h5>
                    <p>
                      From $999 <br /> 42.3/month
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative py-2">
                  <img
                    src="/images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="catbanner-03"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>New Arrivals</h4>
                    <h5>ipad S-13 pro</h5>
                    <p>
                      From $999 <br /> 42.3/month
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="/images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="catbanner-04"
                  />
                  <div className="small-banner-content position-absolute py-2">
                    <h4>New Arrivals</h4>
                    <h5>Headphones</h5>
                    <p>
                      From $999 <br /> 42.3/month
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex  align-items-center justify-content-between">
                <div className="d-flex  align-items-center gap-15">
                  <img src="/images/service.png" alt="service" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all border over $1</p>
                  </div>
                </div>
                <div className="d-flex  align-items-center gap-15">
                  <img src="/images/service-02.png" alt="service-2" />
                  <div>
                    <h6>Daily Serprise Offer</h6>
                    <p className="mb-0">Upto 25% savings</p>
                  </div>
                </div>
                <div className="d-flex  align-items-center gap-15">
                  <img src="/images/service-03.png" alt="service-3" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex  align-items-center gap-15">
                  <img src="/images/service-04.png" alt="service-4" />
                  <div>
                    <h6>Affordable Price</h6>
                    <p className="mb-0">Get Factory direct Price</p>
                  </div>
                </div>
                <div className="d-flex  align-items-center gap-15">
                  <img src="/images/service-05.png" alt="service-5" />
                  <div>
                    <h6>Secure Payment</h6>
                    <p className="mb-0">100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="catagories d-flex flex-wrap align-items-center justify-content-between">
                <div className="d-flex align-items-center ">
                  <div>
                    <h6>Camera</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex align-items-center ">
                  <div>
                    <h6>Television</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/tv.jpg" alt="Television" />
                </div>
                <div className="d-flex align-items-center ">
                  <div>
                    <h6>Speaker</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/speaker.jpg" alt="speaker" />
                </div>
                <div className="d-flex align-items-center ">
                  <div>
                    <h6>Laptop</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/laptop.jpg" alt="camera" />
                </div>
                <div className="d-flex align-items-center ">
                  <div>
                    <h6>Headphone</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/headphone.jpg" alt="headphone" />
                </div>

                <div className="d-flex align-items-center ">
                  <div>
                    <h6>Television</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/tv.jpg" alt="Television" />
                </div>
                <div className="d-flex align-items-center ">
                  <div>
                    <h6>Speaker</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/speaker.jpg" alt="speaker" />
                </div>
                <div className="d-flex align-items-center ">
                  <div>
                    <h6>Laptop</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/laptop.jpg" alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="marquee-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="mrquee-inner-wrapper brand-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png" alt="brand-01" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-02.png" alt="brand-01" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-03.png" alt="brand-01" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-04.png" alt="brand-01" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-05.png" alt="brand-01" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-06.png" alt="brand-01" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-07.png" alt="brand-01" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-08.png" alt="brand-01" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
