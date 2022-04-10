import React, { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./LogIn.css";

const LogIn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const from = location.state?.from?.pathname || "/";
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePassBlur = (event) => {
    setPassword(event.target.value);
  };
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  const handleUserSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="form-details">
      <div className="form-container">
        <div>
          <h2 className="form-title">Login</h2>
          <form onSubmit={handleUserSignIn}>
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
              <label htmlFor="">Password</label>
              <input
                onBlur={handlePassBlur}
                type="password"
                name="password"
                id=""
                required
              />
            </div>
            <p style={{ color: "red" }}>{error?.message}</p>
            {loading && <p>Loading...</p>}
            <input className="form-submit" type="submit" value="Login" />
          </form>
          <p className="extra">
            New to Ema-john?
            <Link className="form-link" to="/signup">
              Create New Account
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

export default LogIn;
