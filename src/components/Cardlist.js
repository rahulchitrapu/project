import React from 'react';
import Card from './Card';

function Cardlist({posts}) {
    return (
        <div className='CardList' style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
            {posts.map((post)=>{
                 return <div key={post.id}><Card post={post}/></div>
            })}
        </div>
    );
}

export default Cardlist;
