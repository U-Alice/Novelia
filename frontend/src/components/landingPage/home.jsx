import "./home.css";
import {Link } from "react-router-dom"
import About from "./about";
import Available from "./available";
import Services from "./services";
function Home() {
  return (
    <div>
    <div className="mainPage">
     <div className="side">
         <div>
            <nav>
                <div>
                 <a href="#">LOGO</a>
                 <a href="#">Home</a>
                 <a href="#">About</a>
                 <a href="#">Services</a>
                 <a href="#">Available</a>
                 </div>
             </nav>
         </div>
         <div className="text">
        <h3> WELCOME TO BOK, YOUR NUMBER ONE CHOICE FOR READING EXPERINCE</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos placeat ipsum nam tempora est aliquam nisi hic repudiandae. Odio, illum temporibus? Exercitationem quidem eveniet, iure ipsam minus ea repellendus deleniti.</p>
        <Link to="/signup">
        <button>GET STARTED</button>
        </Link>
        </div>
     </div>
      <div className="pic">
                 <div id="last">  
                 <a><i class="fa-brands fa-instagram"></i></a>
                 <a><i class="fa-brands fa-linkedin"></i></a>
                <a> <i class="fa-brands fa-twitter"></i> </a>        
                 </div>
          <img src="https://images.unsplash.com/photo-1548048026-5a1a941d93d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="reader" />
          <div className="layer"></div>
      </div>
    </div>
      <About/>
      <Available/>
      <Services />
      </div>
  );
}
export default Home;
