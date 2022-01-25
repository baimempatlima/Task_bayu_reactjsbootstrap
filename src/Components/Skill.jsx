import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
// import { Col, Container, Row, Image } from "react-bootstrap";

const Skill = () => {
  return (
    <Container id="skill">
      <Row>
        <Col>
          <Container>
            <Row>
              <Col></Col>
              <Col md="auto">
                <h4>Kemampuan</h4>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col></Col>
              <Col md="auto">
                <Image src="https://img.icons8.com/fluency/48/000000/php.png" roundedCircle></Image>
              </Col>
              <Col></Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col></Col>
              <Col md="auto">
                <Image src="https://img.icons8.com/color/48/000000/mysql-logo.png" roundedCircle></Image>
              </Col>
              <Col></Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col></Col>
              <Col md="auto">
                <Image src="https://img.icons8.com/color/48/000000/html-5--v1.png" roundedCircle></Image>
              </Col>
              <Col></Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col></Col>
              <Col md="auto">
                <Image src="https://img.icons8.com/color/48/000000/javascript--v1.png" roundedCircle></Image>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </Col>
        <Col>
          <Container>
            <Row>
              <Col></Col>
              <Col md="auto">
                <h4>Kemampuan Lainnya</h4>
              </Col>
              <Col></Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col></Col>
              <Col md="auto">
                <Image src="https://img.icons8.com/color/48/000000/css3.png" roundedCircle></Image>
              </Col>
              <Col></Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col></Col>
              <Col md="auto">
                <Image src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-bootstrap-a-free-and-open-source-css-framework-logo-color-tal-revivo.png" roundedCircle></Image>
              </Col>
              <Col></Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col></Col>
              <Col md="auto">
                <Image src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-codeigniter-is-an-open-source-software-rapid-development-web-framework-logo-shadow-tal-revivo.png" roundedCircle></Image>
              </Col>
              <Col></Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col></Col>
              <Col md="auto">
                <Image src="https://img.icons8.com/color/48/000000/javascript--v1.png" roundedCircle></Image>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Skill;
