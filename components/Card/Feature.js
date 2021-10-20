import React from "react";
import { Container, Row, Col } from "reactstrap";

const Feature = () => {
  return (
    <section className="section feature" id="feature">
      <Container className="container-row bg-small">
        <Row>
          <Col lg="6" className="align-self-center"></Col>
          <Col lg="6">
            <div className="title mb-5">
              <h6 className="text-white">What so special?</h6>
              <h1 className="display-4 text-white">
                <b>FEATURES</b>
              </h1>
            </div>
            <div className="feature-item">
              <h5 className="text-oren">TRADISIONAL GAMES</h5>
              <p className="text-white">
                if you miss your childhood, we provide many tradisional games
                here
              </p>
            </div>
            <div className="feature-item">
              <h5 className="text-oren">GAME SUIT</h5>
            </div>
            <div className="feature-item pb-0">
              <h5 className="text-oren">TBD</h5>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Feature;
