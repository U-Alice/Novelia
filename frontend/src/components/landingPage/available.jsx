import { Link } from "react-router-dom";

function Available() {
  return (
    <div className="available">
      <div>
      <h1>AVAILABLE</h1>
      <div className="grid">
        <div>
         
           <img
           src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1637008457"
           alt="The king of drugs"
         />
           <p> The King of drugs </p>
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvk_7sF_GEgyVNJa-PyfeZzB6cNQw82bFfVVhzcDdJMOPNhZldvCutypuNN3BbRvVnW1o&usqp=CAU"
              alt="The king of drugs"
            />
           <p> The Beauty of the night</p>

          </div>
          <div>
            <img
              src="https://static.wixstatic.com/media/893b8d_980387416435490595bee3b75ee09048~mv2.jpg/v1/fit/w_320,h_489,q_90/893b8d_980387416435490595bee3b75ee09048~mv2.jpg"
              alt="The king of drugs"
            />
           <p> May Belong to night</p>

          </div>
          <div>
            <img
              src="https://marketplace.canva.com/EAE-2vV8rIU/1/0/1003w/canva-black-modern-the-moonlight-book-cover-2zg68MBhoOw.jpg"
              alt="The king of drugs"
            />
           <p> The Moonlight </p>

          </div>
      
      </div>
      <Link to="/signIn">
      <button>Discover more</button>
      </Link>
      </div>
    </div>
  );
}
export default Available;
