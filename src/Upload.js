
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Upload.css"
import axios from 'axios';
// const url = process.env.REACT_APP_API+ '/api/v1/Posts'

const Uploads = () => {
    const [user, setUser] = useState({
        author: '',
        location: '',
        description: ''
    });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        const image = e.target.elements.userFile.files[0];
        formData.append('image', image);
        formData.append('author', user.author);
        formData.append('location', user.location);
        formData.append('description', user.description);
        
        try {
            const response = await axios.post(
                'https://be-insta.herokuapp.com/api/v1/Posts',
                formData
            );
            navigate('/Postview');
            console.log(response);
        } catch (error) {
            console.log(error);



        }
    };
    return (
        <>
            <div className="form-wrapper">
                <div className='form'>
                    <form onSubmit={handleSubmit}>
                        <div className="file">
                            <input type='file'
                                name='userFile'
                                id='userFile'
                                accept='.jpg'
                                required />
                        </div>
                        <div className="author">
                            <input type="text" placeholder="Author" value={user.author} name='userName'
                                id='userName'
                                onChange={(e) => setUser({ ...user, author: e.target.value })}
                                required />
                            <input type="text" placeholder="Location" value={user.location}
                                name='userAddress'
                                id='userAddress' onChange={(e) => setUser({ ...user, location: e.target.value })}
                                required />
                        </div>
                        <div className="desc">
                            <input type="text" placeholder="Description" value={user.description} name='userDesc'
                                id='userDesc'
                                onChange={(e) => setUser({ ...user, description: e.target.value })}
                            />
                        </div>
                        <div className="post">
                            <button className="btn" type='submit'>Post</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Uploads;