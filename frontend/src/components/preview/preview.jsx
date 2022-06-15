import Navbar from "../home/navbar";
import Pending from "../Library/pending";
import "./preview.css";
function Preview() {
  return (
    <div className="preview">
      <Navbar />
      <div className="summary">
        <img
          src="https://images.unsplash.com/photo-1629992101753-56d196c8aabb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <div className="summaryDesc">
          <h4>His Second Chance</h4>
          <h6>Author: Stephen Meyer</h6>
          <div>
            <h1>Summary</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
              officia pariatur harum perspiciatis tempore nisi reiciendis
              voluptates accusantium at deleniti eum minima repellendus
              provident, neque nobis fugiat esse? Illum, vero! Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Explicabo voluptatem magni
              totam enim blanditiis tenetur consequuntur molestiae ratione cum
              itaque aliquid, quaerat excepturi maiores eum incidunt animi
              consequatur dignissimos. Ipsa. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Voluptates, voluptas perspiciatis
              culpa omnis eaque ipsa, ullam dolorem eum porro repellendus
              officiis voluptate, velit enim necessitatibus at quasi veniam
              recusandae sunt? Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Similique, repellat. Possimus rerum illo
              consequatur nostrum ab facere praesentium voluptas laborum
              tempora? Minus ratione ullam praesentium reprehenderit enim
              tempora accusantium dignissimos. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Consequuntur repellendus molestias,
              dolore dolor, quod alias corrupti veritatis blanditiis
              voluptatibus ut earum, autem facilis? Beatae neque nemo rerum
              nihil quo delectus. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Voluptates, necessitatibus sint ad repellendus
              distinctio molestiae voluptatem dignissimos atque temporibus, nemo
              autem quibusdam? Recusandae odit quasi vel, rerum vero minima
              impedit! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Officiis, quo! Veritatis vitae totam libero minima qui, delectus
              optio mollitia reprehenderit neque fuga quia aut dolores. Tempore
              nisi natus omnis autem.
            </p>
          </div>
          <div className="details">
            <div>
              <p>Rating</p>
            </div>
            <div>
              <p>Rating</p>
            </div>
            <div>
              <p>Rating</p>
            </div>
            <div>
              <p>Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Preview;
