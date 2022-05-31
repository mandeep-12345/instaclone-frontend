import React from "react";
import  "./PostTop.css";
import {Link} from 'react-router-dom'
const PostTop = () => {
    return (
        <div className="PostLevel">
            <div className="Start">

                <img className="instaclone" height = "100px" src="https://www.instaclone.app/img/instaclone-logo-dark.png " alt ="text"/>
                </div>
                <div className="Next">
                    <Link to ="/Upload">
                <img className="img1" height ="100px" width="100px" src="https://cdn1.vectorstock.com/i/1000x1000/68/95/camera-icon-vector-21756895.jpg" alt= "cam"/>
                </Link>
            </div>
        </div>
    );
};
export default PostTop;