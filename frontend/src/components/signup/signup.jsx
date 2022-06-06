
import "./signup.css";
function SignUp(){
    return (
        <div className="main">
             <div className="picture">
                 <div className="testimonies">
                     <div className="slider">
                         <div>
                    <p> "BOK has been a real problem solving tool and saver of the time lost searching for books.
                     Thanks, BOk"
                     <br/>
                     ~Divine</p>
                     </div>
                     <div>
                     <p> "BOK has been a real problem solving tool and saver of the time lost searching for books.
                     Thanks, BOk"
                     <br/>
                     ~Divine</p>
                     </div>
                     <div>
                     <p> "BOK has been a real problem solving tool and saver of the time lost searching for books.
                     Thanks, BOk"
                     <br/>
                     ~Divine</p>
                     </div>
                     </div>
                     <i class="fa-solid fa-circle-arrow-right right"></i>
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
                     <button type="submit" id="submit">Sign UP</button>
                     <button type="submit" id="google">continue with google</button>
                     <p>Already have  have an account? <span id="redirect">Sign In</span></p>
                 </form>
                 </div>
             </div>
        </div>
    )
}
export default SignUp;