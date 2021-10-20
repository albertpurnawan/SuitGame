import React from "react";
import { Container, Row, Col } from "reactstrap";
const Footer = () => {
  return (
    <section>
      <Container className="bg-small">
        <div className="social-media-wrap">
          <div className="social-logo">
            <h4>LOGO</h4>
          </div>
          <div className="social-icons">
            <div className="social-icon-link facebook" aria-label="Facebook">
              <i className="fab fa-facebook-f" />
            </div>
            <div className="social-icon-link instagram" aria-label="Instagram">
              <i className="fab fa-instagram" />
            </div>
            <div className="social-icon-link youtube" aria-label="Youtube">
              <i className="fab fa-youtube" />
            </div>
            <div className="social-icon-link twitter" aria-label="Twitter">
              <i className="fab fa-twitter" />
            </div>
            <div className="social-icon-link twitter" aria-label="LinkedIn">
              <i className="fab fa-linkedin" />
            </div>
          </div>
        </div>
        <div className="copyright">
          <small className="website-rights">
            © JAP 2021, Inc. All Rights Reserved
          </small>
        </div>
      </Container>
    </section>
  );
};
export default Footer;
