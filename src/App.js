
import './App.css';
import { useEffect, useState } from 'react';
import Cardlist from './components/Cardlist';

function App() {
  const [value,setValue]=useState('');
  const [post,setPost]=useState([]);
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(res=>res.json())
    .then(res=>{
      setPost(res)})
  },[])
  const searchFunction=(search)=>{
   setPost(post.filter((e)=>{
      return e['title'].toLowerCase().includes(search.toLowerCase())
    }))
    
  }
 if(post.length===0){
   return(
     <div className='App'>
     <h4>loading...</h4>
     </div>
   )
 }
  return (
    <div className='App'>
      
      <div>
        <input placeholder='search' value={value} onChange={(e)=>{setValue(e.target.value)}}/>
        <button style={{margin:"10px"}} onClick={()=>searchFunction(value)}>search</button>
      </div>
      <div><Cardlist posts={post}/></div>
    </div>
  );
  
}

export default App;
