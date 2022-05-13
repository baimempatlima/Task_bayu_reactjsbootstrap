import React from "react";
// import { Row, Col, Button, Card, Container } from "react-bootstrap";
// import analyst from "../undraw_Dev_focus_re_6iwt.png";
import digital from "../undraw_Mobile_marketing_re_p77p.png";
import programmer from "../undraw_Programmer_re_owql.png";
import { Card } from "react-bootstrap";
const Contact = () => {
  return (
    <div className="container" id="contact">
      <h2 className="text-center">Layanan</h2>
      <div className="row justify-content-md-center">
        <div className="col-md-auto">
          <Card style={{ width: "300px", height: "400px" }}>
            <Card.Img variant="top" src={digital} style={{ width: "230px", height: "200px" }} />
            <Card.Body className="mt-3">
              <Card.Title>System Analyst</Card.Title>
              <Card.Text>Design Flow System, Dokumentasi Project, Training, Pemeliharaan, Pengetesan dan Pengujian Aplikasi</Card.Text>
            </Card.Body>
          </Card>
        </div>
        {/* <div className="col-md-auto">
          <Card style={{ width: "250px", height: "350px" }}>
            <Card.Img variant="top" src={analyst} />
            <Card.Body>
              <Card.Title>Adhe Riany</Card.Title>
              <Card.Text>Saat ini tinggal dikabupaten Bone</Card.Text>
            </Card.Body>
          </Card>
        </div> */}
        <div className="col-md-auto">
          <Card style={{ width: "300px", height: "400px" }}>
            <Card.Img variant="top" src={programmer} style={{ width: "230px", height: "200px" }} />
            <Card.Body className="mt-3">
              <Card.Title>Programmer</Card.Title>
              <Card.Text>Technology Stack yang digunakan yaitu MongoDB,Express, React dan Node JS (MERN)</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
