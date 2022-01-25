import React from "react";

const Header = () => {
  return (
    <div className="p-5 mb-4 bg-light rounded-3 jumbotron" id="jumbo">
      <div className="container-fluid py-5 text-center ">
        <p className="fs-5 fst-italic mt-5 text-center text-white">Halo Nama Saya</p>
        <h1 className="display-4 text-white fst-bold">BAYU RIZKI</h1>
        <div className="row ">
          <div className="col-md-2 "></div>
          <div className="col-md-8 ">
            <div className="input-group mb-3">
              <input type="text" className="form-control input-keyword" placeholder="Search"></input>
              <button className="btn btn-danger search-button" type="button" id="button-addon2">
                Search
              </button>
            </div>
          </div>
          <div class="col-md-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
