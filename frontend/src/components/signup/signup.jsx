import "./signup.css";
import testimonies from "./testimonies";
import BTNslider from "./slider/buttonSlider.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "./userContext";
function SignUp() {
  const [slideIndex, setSlideIndex] = useState(1);
  const nextSlide = () => {
    if (slideIndex !== testimonies.length) {
      setSlideIndex(slideIndex + 1);
      console.log(slideIndex);
    } else if (slideIndex === testimonies.length) {
      setSlideIndex(1);
      console.log(slideIndex);
    }
  };
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
      console.log(slideIndex);
    } else if (slideIndex == 1) {
      setSlideIndex(testimonies.length);
      console.log(slideIndex);
    }
  };
  
  const [error, setError] = useState("");
  const[ success, setSuccess] = useState("")
  const [data, setData] = useState({
    email: "",
    userName: "",
    password: "",
  });

  const handleInputChange = ({currentTarget: input})=>{
      setData({...data,[input.name]: input.value})
  }

  const getUser = async (e) => {
    e.preventDefault()
   await fetch("http://localhost:4001/register", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="main">
      <div className="picture">
        <div className="testimonies">
          <div className="slider">
            {testimonies.map((obj) => {
              return (
                <p className={obj.id == slideIndex ? "displayed" : "hidden"}>
                  {obj.text}
                </p>
              );
            })}
          </div>
          <BTNslider moveSlide={nextSlide} direction="next"></BTNslider>
          <BTNslider moveSlide={prevSlide} direction="prev"></BTNslider>
        </div>
      </div>
      <div className="form">
        <div>
          <h1 id="welcome">Welcome to BOK</h1>
          <i class="fa-solid fa-user-plus"></i>
          <h3 id="signup">SIGN UP</h3>
          <form action="" onSubmit={getUser}>
            <input
              type="text"
              placeholder="Username"
              name="userName"
              value={data.userName}
              onChange={handleInputChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={data.email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              value={data.password}
              onChange={handleInputChange}
            />
            <input type="password" placeholder="Confirm Password" />
            <button type="submit" id="submit">
              Sign UP
            </button>
            <button type="submit" id="google">
              continue with google
            </button>
            <p>
              Already have have an account?
              <Link to="/signin">
                <span id="redirect">Sign In</span>
              </Link>
            </p>
          </form>
          <UserContext.Provider></UserContext.Provider>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
