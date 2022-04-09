import React from "react";
import { Link } from "react-router-dom";
import "./LogIn.css";

const LogIn = () => {
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Login</h2>
        <form>
          <div className="input-group">
            <label htmlFor="">Email</label>
            <input type="email" name="emil" id="" />
          </div>
          <div className="input-group">
            <label htmlFor="">Password</label>
            <input type="password" name="password" id="" />
          </div>
          <input className="form-submit" type="submit" value="Login" />
        </form>
        <p>
          New to Ema-john?
          <Link className="form-link" to="/signup">
            Create New Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
