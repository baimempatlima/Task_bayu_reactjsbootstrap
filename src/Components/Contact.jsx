import React from "react";
import { CardGroup, Card, Container } from "react-bootstrap";
import male from "../male.png";
import female from "../female.png";

const Contact = () => {
  return (
    <Container id="contact">
      <h2 className="text-center">Kontak</h2>
      <CardGroup>
        <Card style={{ width: "120px" }}>
          <Card.Img variant="top" src={male} />
          <Card.Body>
            <Card.Title>Fadil Saadilah</Card.Title>
            <Card.Text>Saat ini tinggal diKabupaten Bone</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={female} />
          <Card.Body>
            <Card.Title>Adhe Riany Rahman</Card.Title>
            <Card.Text>Saat ini tinggal diKabupaten Bone </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={female} />
          <Card.Body>
            <Card.Title>Dian Ekawati</Card.Title>
            <Card.Text>Saat ini tinggal diKabupaten Bone</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
};

export default Contact;
