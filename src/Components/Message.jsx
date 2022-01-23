import React from "react";
// import { Container } from "react-bootstrap";

const Message = () => {
  return (
    <div class="container mt-5" id="kontak">
      <h3 className="fst-bold fs-2 text-center mb-3">Kirim Pesan Ke Saya</h3>
      <div className="card mx-auto">
        <div className="card-body">
          <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email
            </label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Masukkan Nama Email Anda"></input>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Pesan
            </label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Tulis Pesan Anda Disini.."></textarea>
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-danger" type="button">
              Kirim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
