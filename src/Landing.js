
import {Link} from "react-router-dom";
import React from "react-dom";
import './index.css';
const  LandingPage = () => {
    return (
        <div className="LandingPage">
            <div className='Poster'>
            <img src="https://th.bing.com/th/id/OIP.LEyk9Gm8gF1m39Gd8mqJ6QHaJ4?pid=ImgDet&rs=1" alt=""/>
            </div>
        <div className='text'>
            <h1>10x Team 04</h1>
            <div className="BTN">
            <Link to="/Postview">
                ENTER
            </Link>
            </div>

        </div>
        </div>
    )
}
export default LandingPage;