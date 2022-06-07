import "./signup.css";
import testimonies from "./testimonies";
import BTNslider from "./slider/buttonSlider.jsx";
import { useState } from "react";
function SignUp() {
  const [slideIndex, setSlideIndex] = useState(1);
  const nextSlide = () => {
    if (slideIndex !== testimonies.length) {
      setSlideIndex(slideIndex + 1);
      console.log(slideIndex)
    } else if (slideIndex === testimonies.length){
      setSlideIndex(1);
      console.log(slideIndex)
    }
  };
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
      console.log(slideIndex)
      } else if (slideIndex == 1){
        setSlideIndex(testimonies.length);
        console.log( slideIndex)
      }
  };
  return (
    <div className="main">
      <div className="picture">
        <div className="testimonies">
          <div className='slider'>
            {testimonies.map((obj) => {
              return <p className={obj.id == slideIndex ? "displayed": "hidden"}>{obj.text}</p>
            })}
          </div>
          <BTNslider moveSlide={nextSlide} direction="next"></BTNslider>
          <BTNslider moveSlide={prevSlide} direction="prev"></BTNslider>
        </div>
      </div>
      <div className="form">
        <div>
          <h1 id="welcome">Welcome to BOK</h1>
          <p>We are exicted to have you !Enter your credentials to register</p>
          <form action="">
            <label htmlFor="">Email</label>
            <input type="email" />
            <label htmlFor="">Password</label>
            <input type="password" />
            <label htmlFor="">User Name</label>
            <input type="text" />
            <button type="submit" id="submit">
              Sign UP
            </button>
            <button type="submit" id="google">
              continue with google
            </button>
            <p>
              Already have have an account? <span id="redirect">Sign In</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
