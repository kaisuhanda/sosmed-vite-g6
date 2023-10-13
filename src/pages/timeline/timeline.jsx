import { useEffect, useState } from "react";
import Layout from "../../Layout/layout";
import "./timeline.css";
import axios from "axios";

function Timeline() {
  const [caption, setCaption] = useState(""); // Change the state variable name

  const [posts, setPosts] = useState([]);

  function onSubmit() {
    axios
      .post(`https://2ql1kl2g-2020.asse.devtunnels.ms/post`, {
        caption: caption, // Use the correct variable name
      })
      .then((response) => {
        console.log(response.data);
        setPosts([...posts, response.data]);
        setCaption("");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    axios.get(`https://2ql1kl2g-2020.asse.devtunnels.ms/post`)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Layout>
      <div className="timeline">
        <div className="home">
          <h2>Home</h2>
          <div className="buttons">
            <div className="buttonsContainer">
              <button>For you</button>
              <button>Following</button>
            </div>
          </div>
        </div>
        <div className="postDiv">
          <div className="profilePic">
            <i class="fa-regular fa-user"></i>
          </div>
          <div className="content">
            <select name="select" id="select" placeholder="Everyone">
              <option value="everyone">Everyone</option>
              <option value="circle">Circle</option>
            </select>
            <br />
            <input
              type="text"
              placeholder="What is happening?"
              value={caption}
              onChange={(e) => setCaption(e.target.value)} // Correct variable name
            />
            <p>
              <i class="fa-solid fa-globe"></i>Everyone can reply
            </p>
            <div className="underline"></div>
            <div className="homeFooter">
              <div className="icons">
                <i class="fa-regular fa-image"></i>
                <i class="fa-regular fa-face-smile"></i>
                <i class="fa-regular fa-file"></i>
                <i class="fa-solid fa-bars-progress"></i>
                <i class="fa-regular fa-calendar"></i>
              </div>
              <button className="postBtn" onClick={onSubmit}>
                Post
              </button>
            </div>
          </div>
        </div>
        <div className="posts">
          <ul>
            {posts.map((post, index) => (
              <li key={index}>
                <div className="profilePost">
                  <i class="fa-regular fa-user"></i>
                </div>
                <div>
                  <h4>@username</h4>
                  <p>{post.caption}</p> 
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default Timeline;
