import { Container, Input, Form, Button } from "reactstrap";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import UrlSwitch from "../Card/UrlSwitch";

const RegisterPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState(null);
  const link = UrlSwitch();

  const handleRegistration = (e) => {
    e.preventDefault();
    axios
      .post(`${link}/api/auth/register`, {
        username,
        email,
        password,
        city,
        gender,
      })
      .then(function () {
        router.push("/login");
      })
      .catch(function (error) {
        alert(error);
      });
  };
  return (
    <section className="login-section ">
      <Container className="container-col">
        <div className="login-form">
          <div className="title mb-4">
            <h2 className="text-pink text-center">Sign Up!</h2>
          </div>
          <Form onSubmit={(e) => handleRegistration(e)}>
            <Input
              className="input-login"
              type="username"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <Input
              className="input-login"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              className="input-login"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Input
              className="input-login"
              type="text"
              placeholder="City"
              onChange={(e) => setCity(e.target.value)}
              required
            />
            <Input
              type="select"
              className="input-login"
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="male" selected disabled hidden>
                -Select Gender-
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Input>
            <div>
              <Button type="submit" className="auth-button">
                Submit
              </Button>
            </div>
            <div className="text-center mt-2">
              Have an account? <Link href="/login">Login</Link>
            </div>
          </Form>
        </div>
      </Container>
    </section>
  );
};

export default RegisterPage;
