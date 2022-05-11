import React from 'react';
import './Card.css'

function Card({post}) {
    return (
        <div className='card'>
            <h1>{post.title}</h1>
            <h4>{post.body}</h4>
        </div>
    );
}

export default Card;