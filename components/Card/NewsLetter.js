import React from "react";
import Footer from "../Footer/Footer";
import {
  Container,
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
} from "reactstrap";

const NewsLetter = () => {
  return (
    <section className="section newsletter" id="">
      <Container className="container-row">
        <Row>
          <Col lg="6"></Col>
          <Col lg="6">
            <div className="title mb-5">
              <h6 className="text-white">Want to stay in touch?</h6>
              <h1 className="display-2 text-white">
                <b>NEWSLETTER SUBSCRIBE</b>
              </h1>
              <p className="text-white">
                In order to start receiving our news all you have to do is enter
                your email address. Everything else will no taken care of by us.
                We sill send you emails containing information about game. We
                don{"'"}t spam.
              </p>
            </div>
            <h6 className="text-oren">Your email address</h6>
            <InputGroup>
              <InputGroupAddon addonType="append"></InputGroupAddon>
              <Input
                className="input-style"
                placeholder="youremail@binar.co.id"
              />
              <Button className="btn-play">Subscribe now</Button>
            </InputGroup>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </section>
  );
};

export default NewsLetter;
