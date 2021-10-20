import React from "react";
import { Container, Row, Col, Table } from "reactstrap";

const Requirement = () => {
  return (
    <section className="section requirement" id="requirement">
      <Container className="container-row bg-small">
        <Row>
          <Col lg="6" className="align-self-center">
            <div className="title mb-5">
              <h6 className="text-white">Can my computer run this game?</h6>
              <h1 className="display-4 text-white">
                <b>SYSTEM REQUIREMENTS</b>
              </h1>
            </div>
          </Col>
          <Col lg="6" className="align-self-center">
            <Table bordered className="bg-50">
              <tbody className="text-white">
                <tr>
                  <td>
                    <h5 className="text-oren">OS:</h5>
                    <h6>Windows 7 64-bit only</h6>
                    <h6>(No OSX support at this time)</h6>
                    <br />
                  </td>
                  <td>
                    <h5 className="text-oren">PROCESSOR:</h5>
                    <h6>Intel Core 2 Duo @ 2.4 GHZ or</h6>
                    <h6>AMD Athlon X2 @ 2.8 GHZ</h6>
                    <br />
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5 className="text-oren">MEMORY:</h5>
                    <h6>4 GB RAM</h6>
                    <br />
                  </td>
                  <td>
                    <h5 className="text-oren">STORAGE:</h5>
                    <h6>8 GB available space</h6>
                    <br />
                    <br />
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <h5 className="text-oren">GRAPHICS:</h5>
                    <h6>NVIDIA GeForce GTX 660 2GB or</h6>
                    <h6>AMD Radeon HD 7850 2GB DirectX11 (Shader Model 5)</h6>
                    <br />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Requirement;
