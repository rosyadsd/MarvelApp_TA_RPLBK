import React, { useState } from "react";
import "./LoginPage.css";
import { Form, Button, Container, Card } from "react-bootstrap";
import Account from "./akun";

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  let loggedin = false;

  const handleLogin = () => {

  if (username === "" || password === "") {
    alert("Please fill in the input");
  } else {
    const isLoggedIn = Account.some(
      (acc) => acc.Username === username && acc.Password === password
    );

    if (isLoggedIn) {
      onLogin(); // Panggil prop onLogin untuk mengubah status login
    } else {
      alert("Incorrect username or password");
    }
  }
};

  return (
    <div
      style={{ width: "75vh", height: "100vh" }}
      className="d-flex align-items-center justify-content-center m-auto container-fluid m-sm-auto"
    >
      <Container className="form-signin w-100 m-auto justify-content-center container-fluid">
        <Card
          className="p-4 d-flex flex-column text-center bg-trasparent"
          style={{ height: "70vh" }}
        >
          <Form>
            <a href="#" className="animationimg">
              <img
                className=" img-fluid"
                src="public\images\Logo.jpg"
                alt=""
                width="200"
                height="200"
              />
            </a>
            
            <h1 className="h1 mb-3 card-text text-blue">Marvel Movie</h1>
            <h1 className="h5 mb-3 text-black">Please sign in</h1>

            <Form.Floating className="mb-3">
              <Form.Control
                type="text"
                id="floatingInput"
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="floatingInput">Username</label>
            </Form.Floating>

            <Form.Floating className="mb-3">
              <Form.Control
                type="password"
                id="floatingPassword"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="floatingPassword">Password</label>
            </Form.Floating>

            <Button variant="success" type="submit" onClick={handleLogin}>
              LOGIN
            </Button>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default LoginPage;
