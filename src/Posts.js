import React from "react";
import "./index.css";
const Posts = ({ post }) => {
    console.log(post)
    console.log("ABC")
    return post.map((post) => {
        return (
            <div className="View">
                <div className="post">
                    <div className="propt">
                        <div className="name">
                            {post.author}



                        </div>
                        <br />
                        <div className="location">
                            {post.location}

                        </div>
                        <div className="dots">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpSpq_QjMB9EcToz2hZh3LTkJyBU2F05aSH6haVi1hDy_PGRI-tum31O9TRIVYPSvERgo&usqp=CAU" alt="nothing" />
                        </div>
                    </div>
                    <div className="photo">
                        <img src={`http://localhost:7000/${post.image}`} alt="front" />
                    </div>
                    <div className="footer">
                        <div className="like">
                            <img src="https://tse2.mm.bing.net/th?id=OIP.30OzQAGmwt30tbw7U6IBjwHaHa&pid=Api&P=0&w=167&h=167" alt="" />
                        </div>
                        <div className="share">
                            <img src="https://cdn-icons-png.flaticon.com/128/2526/2526496.png" alt="" />
                        </div>
                    </div>
                    <div className="date">
                        {new Date().toLocaleString()}</div>
                    <div className="likecount">
                        <p>{post.likes} likes </p>
                    </div>
                    
                    <div className="description">

                        <p>{post.description}</p>

                    </div>

                </div>
            </div>
        );
    });
}

export default Posts;


