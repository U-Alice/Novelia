import "../signup/signup.css"
function SignIn(){
    return (
        <div className="mainLogin">
          <div>
              <h1>Welcome Back</h1>
              <form action="">
              <label htmlFor="">Email</label>
              <input type="email" />
              <label htmlFor="">Password</label>
              <input type="password" name="password"  /> 
              <button type="submit" id="submit">Sign In</button>   
              </form>
          </div>
        </div>
    )
}
export default SignIn;