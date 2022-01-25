import React from "react";
// import { Row, Col, Button, Card, Container } from "react-bootstrap";
import male from "../male.png";
import female from "../female.png";
import { Card } from "react-bootstrap";
const Contact = () => {
  return (
    <div className="container" id="contact">
      <h2 className="text-center">Kontak</h2>
      <div className="row justify-content-md-center">
        <div className="col-md-auto">
          <Card style={{ width: "250px" }}>
            <Card.Img variant="top" src={male} />
            <Card.Body>
              <Card.Title>Faadil Saadilah</Card.Title>
              <Card.Text>Saat ini tinggal dikabupaten Bone</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-auto">
          <Card style={{ width: "250px" }}>
            <Card.Img variant="top" src={female} />
            <Card.Body>
              <Card.Title>Adhe Riany</Card.Title>
              <Card.Text>Saat ini tinggal dikabupaten Bone</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-auto">
          <Card style={{ width: "250px" }}>
            <Card.Img variant="top" src={female} />
            <Card.Body>
              <Card.Title>Dian Ekawati</Card.Title>
              <Card.Text>Saat ini tinggal dikabupaten Bone</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
