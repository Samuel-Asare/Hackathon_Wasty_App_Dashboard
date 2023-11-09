import { Link } from "react-router-dom";
import "../../../css/Login.css";
import login_illustrator from "../../../assets/Auth_Image/login_illustrator.svg";

const Login = () => {
  return (
    <div className="login_wrapper">
      <div className="inputs_feild_container">
        <h5 className="headerLine_text">Access your account</h5>
        <div className="inputs_content">
          <div className="btn">
            <button className="google">SVG Login up with Google</button>
          </div>

          <p className="divider_or">Or</p>

          <form>
            <fieldset className="form_fieldset">
              <div className="input">
                <label htmlFor="full_name">Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                />
              </div>

              <div className="input">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Your Password"
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
