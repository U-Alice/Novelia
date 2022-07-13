import "../signup/signup.css";
import Button from "../utils/buttons";
import { Link, useNavigate } from "react-router-dom";
import LoadingSpinner from "../spinner/spinner";
import Cookies from "js-cookie";
import { useContext } from "react";
import { userContext } from "../userContext";
import { useState } from "react";
function SignIn() {
  const Navigate = useNavigate("");
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [response, setResponse] = useState({});
  const { setDetails, setProfile, userDetails } = useContext(userContext);

  function handleCookie(cookieName, cookieValue) {
    Cookies.set(cookieName, cookieValue, { expires: 360, path: "" });
  }
  async function getProfile(){
    const url = "http://localhost:4001/getProfile";
    const api = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    })
    const data = await api.json()
    setProfile(data);
  }
  async function getUser(username, password) {
    const api = await fetch("http://localhost:4001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: username,
        password: password,
      }),
    });
    const data = await api.json();
    setDetails(data);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    await getUser(data.email, data.password);
    await getProfile();

    // handleCookie("userName", userDetails.data.userName);
    // handleCookie("token", userDetails.data.token);
    // handleCookie("currentUser", userDetails.data._id)
    // localStorage.setItem("profile", userDetails.profile.image)
    // handleCookie("profile", "image")
    console.log(userDetails)

    if (userDetails.success === true) {
      Navigate("/welcome");
    }
  };
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  return (
    <div className="main">
      <div className="picture"></div>
      <div className="formLogin">
        <h1>Welcome Back</h1>
        {/* <p>{user.email}</p> */}
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
