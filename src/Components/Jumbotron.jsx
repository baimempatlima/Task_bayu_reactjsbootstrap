import React from "react";

const Header = () => {
  return (
    <div className="p-5 mb-4 bg-light rounded-3 jumbotron" id="jumbo">
      <div className="container-fluid py-5 text-center" style={{ marginTop: "100px" }}>
        <h1 className="display-4 text-white fst-bold">
          <strong>Bayu Rizki</strong>
        </h1>
        <p className="fs-5 fst-italic py-0 text-center text-white">Programmer Enthusiast</p>
        <button className="btn btn-danger search-button" type="button" id="button-addon2">
          <a href="#profile" className="text-link">
            Mulai
          </a>
        </button>
        {/* <div className="row mx-auto">
          <div className="col-md-8 ">
            <div className="input-group mb-3 ">
              <input type="text" className="form-control input-keyword" placeholder="Search"></input></div>
          </div>
          <div class="col-md-2"></div>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
