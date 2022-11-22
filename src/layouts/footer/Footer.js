import React from "react";
import FastDeliver from "../../assets/images/fast-delivery.png";
import Youtube from "../../assets/images/Icon metro-youtube2.svg";
import LinkedIN from "../../assets/images/Icon awesome-linkedin.svg";
import Twitter from "../../assets/images/Icon awesome-twitter.svg";
import Facebook from "../../assets/images/Icon awesome-facebook-f.svg";

import "./footer.scss";

const quickLinks = [
  { title: "Gift Card" },
  { title: "Lookbook 2021" },
  { title: "Privacy Policy" },
  { title: "Shipping & Refund" },
];

const companyList = [
  { name: "About Us" },
  { name: "Contact Us" },
  { name: "Pricing Plan" },
  { name: "Knowledge Base" },
];

function Footer() {
  return (
    <div className="footer">
      <div className="container h-100">
        <div className="row h-100 justify-content-center">
          <div className="col-10">
            <div className="row h-100 py-5">
              <div className="col-md-5">
                <div className="row h-100">
                  <div className="col-md-6 ">
                    <div className="fast-delivery border-end h-100">
                      <img
                        className="img-fluid mb-2"
                        src={FastDeliver}
                        alt="fast delivery"
                      />
                      <p className="mb-0 color-white f-13">
                        Fast delivery in 3-5 Days
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 py-2">
                    <p className="color-white text-uppercase footer-list-header">
                      QUICK LINKS
                    </p>
                    <ul className="p-0">
                      {quickLinks.map((item, index) => (
                        <li key={index} className="footer-list color-white">
                          {item.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="row h-100">
                  <div className="col-md-4 py-2">
                    <p className="color-white text-uppercase footer-list-header">
                      COMPANY
                    </p>
                    <ul className="p-0">
                      {companyList.map((item, index) => (
                        <li key={index} className="footer-list color-white">
                          {item.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-md-8 py-2">
                    <p className="color-white text-uppercase footer-list-header">
                      NEWSLETTER
                    </p>
                    <p className="color-white f-12">
                      Sign up & get all our latest updates and special offers
                    </p>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control rounded-0"
                        placeholder="Enter Your Email address"
                        aria-label="Enter Your Email address"
                        aria-describedby="basic-addon2"
                      />
                      <span
                        className="input-group-text rounded-0 subscribe-btn"
                        id="basic-addon2"
                      >
                        SUBSCRIBE
                      </span>
                    </div>
                    <div className="d-flex justify-content-end align-items-center">
                      <div className="icon-circle ms-2">
                        <img
                          className="img-fluid"
                          src={Youtube}
                          alt="youtube"
                        />
                      </div>
                      <div className="icon-circle  ms-2">
                        <img
                          className="img-fluid"
                          src={LinkedIN}
                          alt="youtube"
                        />
                      </div>
                      <div className="icon-circle  ms-2">
                        <img
                          className="img-fluid"
                          src={Twitter}
                          alt="youtube"
                        />
                      </div>
                      <div className="icon-circle  ms-2">
                        <img
                          className="img-fluid"
                          src={Facebook}
                          alt="youtube"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row border-top py-3 text-center color-white">
        <p className="mb-0 copyright">© 2021 Alba. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
