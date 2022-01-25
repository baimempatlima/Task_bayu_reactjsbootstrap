import React from "react";

const Navbarr = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#jumbo">
          Bayu Rizki
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#profile">
                Biografi
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#skill">
                Skill
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#contact">
                Kontak
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#kontak">
                Pesan
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbarr;
