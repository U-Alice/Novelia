import logo from './logo.svg';
import SignUp from './components/signup/signup';
import SignIn from './components/signin/signin';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './components/landingPage/home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/signIn" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path ="/" element={<Home/>}/>
        </Routes>
      </Router>
     {/* <SignUp/> */}
     {/* <SignIn/> */}
    </div>
  );
}

export default App;
