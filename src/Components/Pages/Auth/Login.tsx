import { Link, useNavigate } from "react-router-dom";
import "../../../css/Login.css";
import login_illustrator from "../../../assets/Auth_Image/login_illustrator.svg";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://hackathon-waste-api.onrender.com/api/v1/auth/login",
        {
          email,
          password,
          appType: "app1",
        }
      );
      localStorage.setItem("user", JSON.stringify(res.data));
      console.log(res.data);
      navigate("/");
    } catch (error) {
      setError(error.response.data);
      console.log(error);
    }
  };
  return (
    <div className="login_wrapper">
      <div className="inputs_feild_container">
        <h5 className="headerLine_text">Access your account</h5>
        <div className="inputs_content">

          <form onSubmit={handleLogin}>
            <fieldset className="form_fieldset">
              <div className="input">
                <label htmlFor="full_name">Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="input">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Your Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </fieldset>

            <button type="submit" className="submit_btn">
              Login
            </button>
          </form>

          <div className="alternative_step">
            <p>Did you forget your password?</p>
            <Link to="">Reset Password</Link>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={login_illustrator} alt="" />
      </div>
    </div>
  );
};

export default Login;
