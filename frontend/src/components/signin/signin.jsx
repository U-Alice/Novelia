import "../signup/signup.css";
import Button from "../utils/buttons";
import { Link, useNavigate } from "react-router-dom";
import LoadingSpinner from "../spinner/spinner";
import Cookies from "js-cookie";
import { useContext } from "react";
import { userContext } from "../userContext";
import { useState } from "react";
function SignIn() {
  const [isLoading, setLoading] = useState(false)
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
  async function getProfile() {
    const url = "https://novelia.herokuapp.com/getProfile";
    const api = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    const data = await api.json();
    setProfile(data);
  }
  async function getUser(email, password) {
    setLoading(true)
    const api =await fetch("https://novelia.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const data = await api.json();
    setDetails(data);
    setLoading(false)
    Navigate("/welcome")
  }
  const handleSubmit = async (e) => {
    // e.preventDefault();
    // await getUser(data.email, data.password);
    // console.log(userDetails)
    // await getProfile();
    // Cookies.set("userName", userDetails.data.userName , { expires:new Date(Date.now() + 9999999), path: "", httpOnly: False });
    // Cookies.set("token", userDetails.data.token , { expires: new Date(Date.now() + 9999999), path: "", httpOnly: False });
    // Cookies.set("currentUser", userDetails.data._id , { expires: new Date(Date.now() + 9999999), path: "", httpOnly: False });
    // console.log(userDetails.profile.image)
    // localStorage.setItem("profile", userDetails.profile.image);
    Cookies.set("token", "token")
    // handleCookie("profile", userDetails.profile.image);
    // localStorage.setItem("token", "token")
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
        {isLoading ? <LoadingSpinner/> :<h3 id="signup">SIGN UP</h3>}

        <form action="" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="&#xF002; Search"
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
          {/* <span><i class='fa-solid fa-user'></i></span> */}
          <p className="tip">Forgot password?<span id="redirect">Reset Password</span></p>
          <p>{response.message}</p>
          <button type="submit" id="submit">
            Sign In
          </button>
          <Button />
          <p className="tip">
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
