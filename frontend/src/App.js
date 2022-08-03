import SignUp from "./components/signup/signup";
import SignIn from "./components/signin/signin";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./components/landingPage/home";
import Welcome from "./components/home/homepage";
import All from "./components/Library/all";
import Pending from "./components/Library/pending";
import Completed from "./components/Library/completed";
import List from "./components/Library/ReadingList";
import Publish from "./components/publish/publish";
import Preview from "./components/preview/preview";
import { UserProvider } from "./components/userContext";
import UploadImage from "./components/signup/uploadImage";
import { BooksProvider } from "./components/booksContext";
import Chat from "./components/chat/chat";
import Cookies from "js-cookie";
import Profile from "./components/profile/myProfile";
import { useEffect, useState } from "react";

function App() {

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
  
    return { width, height };
  }
  
function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions(),
      
    );
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return windowDimensions;
  }
  const { width, height } = useWindowDimensions();
  
// Check if the media query is true
  const user = Cookies.get("token");
  return width < 918 ? (
    <div className="mobile-not-supported">
        <h3>Try it On Desktop!!</h3>
    </div>
    ) :  (
    <div className="App">
      <Router>
        <UserProvider>
          <BooksProvider>
            <Routes>
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/" element={<Home />} />
              <Route path="/welcome" element={<Welcome />} />
              <Route path="/library" element={<All />} />
              <Route path="/pending" element={<Pending />} />
              <Route path="/completed" element={<Completed />} />
              <Route path="/list" element={<List />} />
              <Route path="/publish" element={<Publish />} />
              <Route path="/preview" element={<Preview />} />
              <Route path="/myBooks" element={<Profile />} />
              <Route
                path="/chat"
                element={!user ? <Navigate to="/signin" /> : <Chat />}
              ></Route>
              <Route path="/upload" element={<UploadImage />} />
            </Routes>
          </BooksProvider>
        </UserProvider>
      </Router>
    </div>
  );
}

export default App;
