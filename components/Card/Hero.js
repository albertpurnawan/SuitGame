import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
const Hero = () => {
  return (
    <section className="section hero" id="hero">
      <Container className="container-col justify-content-between">
        <Row className="rowTop"></Row>
        <Row>
          <Col xl="12" lg="10" md="8" className="rowCenter">
            <div className="title text-center">
              <h1 className="display-1 text-white mb-4">
                <b>PLAY TRADISIONAL</b>
              </h1>
              <h5 className="text-white mb-4">
                Experience new tradisional game play
              </h5>
              <Button href="/user" className="btn-play">
                PLAY NOW
              </Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl="12" lg="10" md="8" className="rowTop">
            <div className="title text-center mb-5">
              <p className="text-white">THE STORY</p>
              <a className="fas fa-chevron-down btn-arrow" href="#the-game"></a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Hero;
