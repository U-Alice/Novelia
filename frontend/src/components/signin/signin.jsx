import "../signup/signup.css";
import Button from "../utils/buttons";
import { Link } from "react-router-dom";
function SignIn() {
  return (
    <div className="main">
      <div className="picture"></div>
      <div className="formLogin">
        <h1>Welcome Back</h1>
        
          <i class="fa-solid fa-user-plus"></i>
          <h3 id="signup">Login</h3>
      
        <form action="">
          <input type="email" placeholder="Username" />
          <input type="password" name="password" placeholder="password" />
          <button type="submit" id="submit">
            Sign In
          </button>
          <Button />
          <p>
            Don't have have an account?
            <Link to="/signup">
              <span id="redirect">Sign up</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
export default SignIn;
