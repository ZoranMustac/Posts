import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {BrowserRouter as Link} from 'react-router-dom';

function Posts(props){
    let url = `https://jsonplaceholder.typicode.com/posts`;
    const [content, setContent] = useState([]);
    useEffect(() =>{
        axios.get(url)
            .then(response =>{
                setContent(response.data);
            });
    });

    return(
        <div className="flex flex-wrap">
            {content.map((item) => {
            return <div className="box-border w-1/4 h-2/4 shadow-2xl rounded-lg bg-white mb-8 mr-8">
                        <div className="py-8 px-8">
                            <h1 className="font-bold">User ID</h1>
                            <p>{item.userId}</p>
                            <h2 className="font-bold">ID</h2>
                            <p>{item.id}</p>
                            <h3 className="font-bold">Title</h3>
                            <p>{item.title}</p>
                            <h4 className="font-bold">Body:</h4>
                            <p>{item.body}</p>
                            <br/>
                            <Link to= "/SinglePost" className="link">Go to page with information</Link>
                        </div>
                    </div>
            })}
        </div>
    );
}

export default Posts;