import "./home.css";
function Home() {
  return (
    <div className="main">
     <div className="side">
        <h3> WELCOME TO BOK, YOUR NUMBER ONE CHOICE FOR READING EXPERINCE</h3>
        <button>GET STARTED</button>
     </div>
      <div className="pic">
          <img src="https://images.unsplash.com/photo-1548048026-5a1a941d93d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="reader" />
          <div className="layer"></div>
      </div>
    </div>
  );
}
export default Home;
