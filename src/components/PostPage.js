import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PostContent from './PostContent';
import Comment from './Comment';
import { fetchPost, redditSelector } from '../store/redditSlice';

export default function PostPage() {

  const dispatch = useDispatch();
  const {postList,commentList:comments} = useSelector(redditSelector);
  const post = postList[0].data;
  const params = useParams();

  useEffect(()=>{
    /*
    async function fetchReddit() {
      const response = await fetch("https://api.reddit.com/r/"+params.subreddit+"/comments/"+params["*"]);
      const jsonResponse = await response.json();
      setPost(jsonResponse[0].data.children[0].data);
      setComments(jsonResponse[1].data.children.filter(child => child.kind === "t1"));
    }
    fetchReddit();*/
    dispatch(fetchPost(params.subreddit,params["*"]));
  },[params,dispatch]);

  return (
    <div>
      {post.title ? <PostContent id={0} data={post} postPage={"postPage"} /> : null}
      {comments.map((comment,c) => <Comment key={"comment"+c} id={c} data={comment.data} />)}
  </div>
  );
}