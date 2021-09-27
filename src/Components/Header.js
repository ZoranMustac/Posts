import React from 'react';
import Posts from './Posts.js';

function Header(){
    return(
        <div>
            <h1 className="text-7xl font-link1 pt-12 text-center">Posts</h1>
            <div className="ml-64 mt-16">
                <Posts/>
            </div>
        </div>
    )
}

export default Header;