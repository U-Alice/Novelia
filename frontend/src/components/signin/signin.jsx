import "../signup/signup.css";
import Button from "../utils/buttons";
import {Link} from "react-router-dom";
function SignIn() {
  return (
    <div className="mainLogin">
      <div>
        <h1>Welcome Back</h1>
        <form action="">
          <label htmlFor="">Email</label>
          <input type="email" />
          <label htmlFor="">Password</label>
          <input type="password" name="password" />
          <button type="submit" id="submit">
            Sign In
          </button>
          <Button />
          <p>
            Don't have have an account?
            <span id="redirect">
              <Link to="/signup"> Sign up</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
export default SignIn;
