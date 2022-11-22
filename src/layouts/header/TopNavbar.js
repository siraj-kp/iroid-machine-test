import React from "react";

export default function TopNavbar() {
  return (
    <div className="top-navbar">
      <div className="container h-100">
        <div className="d-flex h-100 align-items-center justify-content-between">
          <p className="mb-0">Alba Helpline: 04829 222776</p>
          <div className="d-flex align-items-center">
            <p className="mb-0">
              <a className="color-white" href="">
                Register
              </a>
            </p>
            <p className="mb-0 ms-5">
              <a className="color-white" href="">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
