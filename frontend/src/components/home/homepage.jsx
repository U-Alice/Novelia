import Footer from "../landingPage/footer";
import Body from "./body";
import Books from "./books";
import DisplayBooks from "./displayBooks";
import Navbar from "./navbar";
import "./welcome.css";

function Welcome() {
  return (
    <div>
      <div>
        <Navbar />
        < Body />
        <Books />
        <DisplayBooks />
        <Footer />
      </div>
    </div>
  );
}
export default Welcome;
