import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostContent from './PostContent';

export default function Prawn() {

  const [reddit,setReddit] = useState([]);

  const sub = useParams().subreddit;
  const subreddit = sub ? "/r/"+sub : "";

  useEffect(()=>{
    async function fetchReddit() {
      const response = await fetch("https://api.reddit.com/"+subreddit);
      const jsonResponse = await response.json();
      setReddit(jsonResponse.data.children);
    }
    fetchReddit();
  },[subreddit]);

  return (
    <div>
      {reddit.map((post,p) => <PostContent key={"redditPost"+p} id={p} data={post.data} clickable={true} />)}
    </div>
  );
}