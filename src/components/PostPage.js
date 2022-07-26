import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PostContent from './PostContent';
import Comment from './Comment';
import { fetchPost, redditSelector } from '../store/redditSlice';

export default function PostPage() {

  const dispatch = useDispatch();
  const {postList,commentList:comments} = useSelector(redditSelector);
  const post = postList.length > 0 ? postList[0].data : {};
  const params = useParams();

  useEffect(()=>{
    dispatch(fetchPost(params.subreddit,params["*"]));
  },[params,dispatch]);

  return (
    <div id="postPage">
      {post.title ? <PostContent id={0} data={post} postPage={"postPage"} /> : null}
      {comments.map((comment,c) => <Comment key={"comment"+c} id={c} data={comment.data} />)}
  </div>
  );
}