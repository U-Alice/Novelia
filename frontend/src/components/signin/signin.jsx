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
  const [response, setResponse] = useState("")
  const user = useContext(userContext);
  const handleSubmit =async (e) => {
    e.preventDefault();
    const returned = user.getUser(data.email, data.password);
    setResponse(await returned)
  };
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
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
          <p>{response.message}</p>
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
