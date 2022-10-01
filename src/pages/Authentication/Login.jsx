import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

const API_URL = "http://localhost:5005";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    axios
      .post(`${API_URL}/api/login`, requestBody)
      .then((response) => {
        // Request to the server's endpoint `/auth/login` returns a response
        // with the JWT string ->  response.data.authToken
        console.log("JWT token", response.data.authToken);

        // Save the token in the localStorage
        storeToken(response.data.authToken);

        // Verify the token by sending a request
        // to the server's JWT validation endpoint.
        authenticateUser();

        navigate("/"); // <== ADD
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };
  
  return (
      <div className="container d-flex justify-content-center align-items-center h-100">
        <form onSubmit={handleLoginSubmit}>
          <MDBInput
            className="mb-4"
            type="email"
            id="form2Example1"
            value={email}
            onChange={handleEmail}
            label="Email address"
          />
          <MDBInput
            className="mb-4"
            type="password"
            value={password}
            onChange={handlePassword}
            id="form2Example2"
            label="Password"
          />

          <MDBRow className="mb-4">
            <MDBCol size="auto" className="d-flex justify-content-center">
              <MDBCheckbox
                id="form2Example3"
                label="Remember me"
                defaultChecked
              />
            </MDBCol>
            <MDBCol size="auto">
              <a href="/">Forgot password?</a>
            </MDBCol>
          </MDBRow>

          <MDBBtn type="submit" value="Login" className="mb-4" block>
            Sign in
          </MDBBtn>

          <div className="text-center">
            <p>
              Not a member? <a href="/register">Register</a>
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
