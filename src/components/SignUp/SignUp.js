import React, { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePassBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPassBlur = (event) => {
    setConfirmPassword(event.target.value);
  };

  useEffect(() => {
    if (user) {
      navigate("/shop");
    }
  }, [user, navigate]);

  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("The password confirmation does not match.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be six character or longer");
    }
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="form-details">
      <div className="form-container">
        <div>
          <h2 className="form-title">Sign Up</h2>
          <form onSubmit={handleCreateUser}>
            <div className="input-group">
              <label htmlFor="">Email</label>
              <input
                onBlur={handleEmailBlur}
                type="email"
                name="emil"
                id=""
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                onBlur={handlePassBlur}
                type="password"
                name="password"
                id=""
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="confirm-pasword">Confirm Password</label>
              <input
                onBlur={handleConfirmPassBlur}
                type="password"
                name="confirm-password"
                id=""
                required
              />
            </div>
            <p style={{ color: "red" }}>{error}</p>
            <input className="form-submit" type="submit" value="Sign Up" />
          </form>
          <p className="extra">
            Already have an account?
            <Link className="form-link" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
      <div className="or">
        <div className="div"></div>
        <p style={{ margin: "0 35px" }}>or</p>
        <div className="div"></div>
      </div>
      <div className="btn-div">
        <button className="google-btn">
          <FcGoogle className="icon" />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
