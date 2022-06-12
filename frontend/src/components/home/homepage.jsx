import Footer from "../landingPage/footer";
import Body from "./body";
import Books from "./books";
import DisplayBooks from "./displayBooks";
import Navbar from "./navbar";
import Subscribe from "./subscribe";
import "./welcome.css";

function Welcome() {
  return (
    <div>
      <div>
        <Navbar />
        < Body />
        <Books />
        <DisplayBooks />
        <Subscribe />
        <Footer />
      </div>
    </div>
  );
}
export default Welcome;
