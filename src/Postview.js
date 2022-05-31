import React from "react";
import   "./Postview.css";
import PostTop from "./PostTop";
import Posts from './Posts';
// const url = process.env.REACT_APP_API + '/post';

class  Postview extends React.Component{
  //Constuctor
  constructor () {
    super ();
    this.state ={
      Posts:[],
    };
  }
  //ComponentDidMount is Used to
  // execute The code
  componentDidMount(){
    console.log("component did mount");
    fetch("http://localhost:7000/api/v1/Posts")

    .then((response) => response.json()) 

        .then(post => {
            console.log(post.Posts)
            this.setState({ Posts:post.Posts})
            
        });
    }

render()  {
  console.log(this.state.Posts);
  
  return (
    <>
        <div className='Top'>
            <PostTop/>
        </div>
        
        <Posts post={this.state.Posts}></Posts> 
    </>
  );
  }
}
export default Postview;


