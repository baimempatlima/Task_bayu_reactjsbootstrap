import { Carousel } from "react-bootstrap";
import React from "react";
import homeg from "../beranda-guest.png";
import homel from "../home - after login.png";
import cart from "../cart-user.png";

const Profile = () => {
  return (
    <div className="container text-center mb-0" id="profile">
      <h3 className="fst-bold fs-2 p-3">Tentang Saya</h3>
      <p className="fs-6 fst-italic fw-light mb-5">Sangat tertarik dan ingin terus berkembang dalam bidang pemrograman yang berfokus pada teknologi Javascript yaitu MongoDB, Express, React and NodeJS.</p>
      <div style={{ height: "500px", width: "600px" }} className="justify-content-center mx-auto mb-0">
        <Carousel variant="dark">
          <Carousel.Item>
            <img className="d-block w-100" src={homeg} alt="First slide" />
            <Carousel.Caption>
              <h6>Proyek Aplikasi : Food Store</h6>
              <p style={{ fontSize: "12px" }}>Technology Stack : MongoDB, Express, React and NodeJS</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={homel} alt="Second slide" />
            <Carousel.Caption>
              <h6>Food Store</h6>
              <p style={{ fontSize: "12px" }}>Cek Github: https://github.com/baimempatlima/react-foodstore</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={cart} alt="Third slide" />
            <Carousel.Caption>
              <h6>Food Store</h6>
              <p style={{ fontSize: "12px" }}>Cek Github: https://github.com/baimempatlima/react-foodstore</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Profile;
