import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

const API_URL = "http://localhost:5005/api";

export default function Register(props) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleFname = (e) => setFname(e.target.value);
  const handleLname = (e) => setLname(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { fname, lname, email, password };

    // Make an axios request to the API
    // If POST request is successful redirect to login page
    // If the request resolves with an error, set the error message in the state
    axios
      .post(`${API_URL}/register`, requestBody)
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <form className="pt-5 pb-5" onSubmit={handleRegisterSubmit}>
        <MDBRow className="mb-4">
          <MDBCol>
            <MDBInput
              id="form3Example1"
              value={fname}
              onChange={handleFname}
              type="text"
              label="First name"
            />
          </MDBCol>
          <MDBCol>
            <MDBInput
              id="form3Example2"
              value={lname}
              onChange={handleLname}
              type="text"
              label="Last name"
            />
          </MDBCol>
        </MDBRow>
        <MDBInput
          className="mb-4"
          type="email"
          value={email}
          onChange={handleEmail}
          id="form3Example3"
          label="Email address"
        />
        <MDBInput
          className="mb-4"
          type="password"
          value={password}
          onChange={handlePassword}
          id="form3Example4"
          label="Password"
        />

        <MDBCheckbox
          wrapperClass="d-flex justify-content-center mb-4"
          id="form3Example5"
          label="Subscribe to our newsletter"
          defaultChecked
        />

        <MDBBtn type="submit" value="Register" className="mb-4" block>
          Sign in
        </MDBBtn>

        <div className="text-center">
          <p>
            Already have an account? <a href="/login">Log in</a>
          </p>
          <p>or sign up with:</p>

          <MDBBtn className="mx-1">
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>

          <MDBBtn className="mx-1">
            <MDBIcon fab icon="google" />
          </MDBBtn>

          <MDBBtn className="mx-1">
            <MDBIcon fab icon="twitter" />
          </MDBBtn>

          <MDBBtn className="mx-1">
            <MDBIcon fab icon="github" />
          </MDBBtn>
        </div>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}
