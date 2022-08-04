import "./home.css";
import {Link } from "react-router-dom"
import About from "./about";
import Available from "./available";
import Services from "./services";
import Footer from "./footer";
import { useRef } from "react";

function Home() {
  const about = useRef()
  const services = useRef()
  const available = useRef()

  const scrollToAvailable = ()=>{
    available.current?.scrollIntoView({behavior: 'smooth'})
    console.log("scrolling")
  }
  const scrollToServices = ()=>{
    services.current?.scrollIntoView({behavior: 'smooth'})
    console.log("scrolling")
  }
  const scrollToAbout = ()=>{
    about.current?.scrollIntoView({behavior: 'smooth'})
    console.log("scrolling")
  }
  return (
    <div>
    <div className="mainPage">
     <div className="side">
         <div>
            <nav>
                <div>
                 <a href="#">Novelia</a>
                 <a href="#">Home</a>
                 <h6 onClick={scrollToAvailable}>Available</h6>
                 <h6 onClick={scrollToServices} >Services</h6>
                 <h6 onClick={scrollToAbout} >About</h6>

                 </div>
             </nav>
         </div>
         <div className="text">
        <h3> WELCOME TO BOK, YOUR NUMBER ONE CHOICE FOR READING EXPERINCE</h3>
        <p>Your reading experience is our first concern, stay with us. New features under development.</p>
        <Link to="/signup">
        <button>GET STARTED</button>
        </Link>
        </div>
     </div>
      <div className="pic"  >
                 <div id="last">  
                 <a><i class="fa-brands fa-instagram"></i></a>
                 <a><i class="fa-brands fa-linkedin"></i></a>
                <a> <i class="fa-brands fa-twitter"></i> </a>        
                 </div>
          <img src="https://images.unsplash.com/photo-1548048026-5a1a941d93d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="reader" />
          <div className="layer"></div>
      </div>
    </div>
    <div ref={about}>

      <About/>
    </div>
      <div ref={available}>
      <Available/>
      </div>
      <div ref={services}>
      <Services />
      </div>
      <Footer />
      </div>
  );
}
export default Home;
