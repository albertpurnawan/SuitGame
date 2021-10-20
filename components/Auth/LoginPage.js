import { Container, Input, Form, Button } from "reactstrap";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import Cookies from "js-cookie";
import UrlSwitch from "../Card/UrlSwitch";

const LoginPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const link = UrlSwitch();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${link}/api/auth/login`, {
        username,
        password,
      })
      .then(function (response) {
        Cookies.set("token", response.data.accessToken);
        Cookies.set("username", response.data.username);
        Cookies.set("login", true);
        console.log(response);
        router.push("/user");
      })
      .catch(function (error) {
        console.log(error);
        alert("Username atau password salah");
      });
  };

  return (
    <section className="login-section ">
      <Container className="container-col">
        <div className="login-form">
          <div className="title mb-4">
            <h2 className="text-info text-center">Welcome Back!</h2>
          </div>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Input
              className="input-login"
              type="username"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <Input
              className="input-login"
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div>
              <Button type="submit" className="auth-button">
                Submit
              </Button>
            </div>
            <div className="footer-login">
              <Link href="/register">Create an account?</Link>
              <Link href="/forgotpassword">Forgot password?</Link>
            </div>
          </Form>
        </div>
      </Container>
    </section>
  );
};

export default LoginPage;
