import SignUp from "./components/signup/signup";
import SignIn from "./components/signin/signin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <div className="App">
      <Router>
        <UserProvider>
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
            <Route path="/upload" element={<UploadImage/>}/>
          </Routes>
        </UserProvider>
      </Router>
    </div>
  );
}

export default App;
