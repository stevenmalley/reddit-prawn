import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PrawnPost from './PrawnPost';
import Comment from './Comment';

export default function PostPage() {

  const [post,setPost] = useState({});
  const [comments,setComments] = useState([]);
  const params = useParams();

  useEffect(()=>{
    async function fetchReddit() {
      const response = await fetch("https://api.reddit.com/r/"+params["*"]);
      const jsonResponse = await response.json();
      setPost(jsonResponse[0].data.children[0].data);
      setComments(jsonResponse[1].data.children);
    }
    fetchReddit();
  },[params]);

  return (
    <div>
      {post.title ? <PrawnPost id={0} data={post} postPage={"postPage"} /> : null}
      {comments.map((comment,c) => <Comment key={"comment"+c} id={c} data={comment.data} />)}
    </div>
  );
}