import React from 'react';
import Card from './Card';

function Cardlist({posts}) {
    return (
        <div className='CardList' style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
            {posts.map((post)=>{
                return <Card post={post}/>
            })}
        </div>
    );
}

export default Cardlist;