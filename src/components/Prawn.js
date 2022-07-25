import { useState, useEffect } from 'react';
import PostLink from './PostLink';

export default function Prawn() {

  const [reddit,setReddit] = useState([]);

  useEffect(()=>{
    async function fetchReddit() {
      const response = await fetch("https://api.reddit.com/");
      const jsonResponse = await response.json();
      setReddit(jsonResponse.data.children);
    }
    fetchReddit();
  },[]);

  return (
    <div>
      {reddit.map((post,p) => <PostLink key={"redditPost"+p} id={p} data={post.data} />)}
    </div>
  );
}