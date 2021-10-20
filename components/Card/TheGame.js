import React, { useState, useEffect } from "react";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";
import { Container, Row, Col } from "reactstrap";

const TheGame = () => {
  return (
    <section className="section the-game" id="the-game">
      <Container className="container-row">
        <Row>
          <Col lg="4" className="align-self-center">
            <div className="title mb-5">
              <h6 className="text-white">What so special?</h6>
              <h1 className="display-4 text-white">
                <b>THE GAMES</b>
              </h1>
            </div>
          </Col>
          <Col lg="8">
            <ImageSlider slides={SliderData} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TheGame;
