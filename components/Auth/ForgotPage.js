import { Container, Input, Form, Button } from "reactstrap";
import React from "react";
const ForgotPage = () => {
  return (
    <section className="login-section ">
      <Container className="container-col">
        <div className="login-form">
          <div className="title mb-4">
            <h2 className="text-info text-center">Reset Password!</h2>
          </div>
          <Form>
            <Input
              className="input-login"
              type="email"
              placeholder="email"
              required
            />
            <div className="text-center mb-2">
              <i>A reset link will be sent to your inbox!</i>
            </div>
            <div>
              <Button type="submit" className="auth-button">
                Send Reset Link
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </section>
  );
};

export default ForgotPage;
