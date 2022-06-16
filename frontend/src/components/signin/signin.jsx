import "../signup/signup.css";
import Button from "../utils/buttons";
import { Link } from "react-router-dom";
import LoadingSpinner from "../spinner/spinner";
import { useContext } from "react";
import { userContext } from "../userContext";
import { useState } from "react";

function SignIn() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const user = useContext(userContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    user.getUser(data.email, data.password);
  };
  const handleChange = ({ currentTarget: input }) => {
    // setData(...data, { [input.name]: [input.value] });
    setData({ ...data, [input.name]: input.value });
  };
  // {user}
  return (
    <div className="main">
      <div className="picture"></div>
      <div className="formLogin">
        <h1>Welcome Back</h1>
        <i class="fa-solid fa-user-plus"></i>
        <h3 id="signup">Login</h3>

        <form action="" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={data.email}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
            value={data.password}
          />
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
