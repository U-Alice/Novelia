import "./signup.css";
import testimonies from "./testimonies";
import BTNslider from "./slider/buttonSlider.jsx";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import UserContext from "./userContext";
import LoadingSpinner from "../spinner/spinner";
import { useEffect } from "react";
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

  function InvalidMsg(textbox) {
  textbox.preventDefault()
    if (textbox.target.value === '') {
        textbox.target.setCustomValidity
              ('Entering an email-id is necessary!');
    } else if (textbox.target.validity.typeMismatch) {
        textbox.target.setCustomValidity
              ('Please enter an email address which is valid!');
    } else {
        textbox.target.setCustomValidity('');
    }

    return true;
  }
  const Navigate = useNavigate("")
  const [isLoading, setLoading] = useState(false)
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
    setLoading(true)
    setSuccess("")
   await fetch("http://localhost:4001/register", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setSuccess(data.message)
        setLoading(false)
        if(data.success === "success"){
          Navigate("/welcome")
        }
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
          <h1 id="welcome">Welcome to Novelia</h1>
          <i class="fa-solid fa-user-plus"></i>
       
          {isLoading ? <LoadingSpinner/> :<h3 id="signup">SIGN UP</h3>}
          <form action="" onSubmit={getUser}>
            <input
              type="text"
              placeholder="Username"
              name="userName"
              value={data.userName}
              onChange={handleInputChange}
              onInput={InvalidMsg}
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={data.email}
              onChange={handleInputChange}
              onInput={InvalidMsg}
              required
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              value={data.password}
              onChange={handleInputChange}
              onInput={InvalidMsg}
              required
            />
            <input type="password" placeholder="Confirm Password" />
            <button type="submit" id="submit" disabled={isLoading}>
              Sign UP
            </button>
            <button type="submit" id="google" disabled = {isLoading}>
              continue with google
            </button>
            <p className="message">{success}</p>
            <p>
              Already have have an account?
              <Link to="/signin">
                <span id="redirect">Sign In</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
