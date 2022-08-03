import "../signup/signup.css";
import Button from "../utils/buttons";
import { Link, useNavigate } from "react-router-dom";
import LoadingSpinner from "../spinner/spinner";
import Cookies from "js-cookie";
import { useContext } from "react";
import { userContext } from "../userContext";
import axios from "axios"
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
    const api =await axios.post("https://novelia.herokuapp.com/login", {

        email: email,
        password: password,
  
    });
    await setDetails(api.data.data);
    setLoading(false)
    console.log(userDetails.token)
    if(userDetails.token) {
      Cookies.set("userName", userDetails.userName , { expires:new Date(Date.now() + 9999999), httpOnly: false });
      Cookies.set("token", userDetails.token , { expires: new Date(Date.now() + 9999999), httpOnly: false });
      Cookies.set("currentUser", userDetails._id , { expires: new Date(Date.now() + 9999999), httpOnly: false });
      Navigate("/welcome")
     }else{   
        setResponse({messaage: "Invalid credentials"})
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    await getUser(data.email, data.password);
    console.log(userDetails)
    await getProfile();
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
        {isLoading ? <LoadingSpinner/> :<h3 id="signup">SIGN UP</h3>}

        <form action="" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="&#xF002; email"
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
