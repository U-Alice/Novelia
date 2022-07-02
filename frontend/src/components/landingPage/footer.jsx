import "./home.css";
import Bottom from "./bottom"

function Footer() {
  return (
    <div className="footer">
      <div>
        <div className="links">
          <div>
            <a href="">Home</a>
            <a href="">Books</a>
            <a href="">Contact</a>
            <a href="">Puublic</a>
          </div>
          <div>
            <a href="">Contact </a>
            <a href="">Books</a>
            <a href="">Blog</a>
            <a href="">This summer</a>
          </div>
          <div>
            <a href="">Home</a>
            <a href="">Books</a>
            <a href="">Contact</a>
            <a href="">Puublic</a>
          </div>

          <div className="copyright">
            &copy copyright 2022 Inc. All rights reserved
          </div>
          <Bottom />
        </div>
      </div>
    </div>
  );
}

export default Footer;
