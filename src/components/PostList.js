import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PostContent from './PostContent';
import { redditSelector, fetchReddit } from '../store/redditSlice';

export default function PostList() {

  const dispatch = useDispatch();
  const reddit = useSelector(redditSelector).postList;

  const sub = useParams().subreddit;
  const subreddit = sub ? "/r/"+sub : "";

  useEffect(()=>{
    dispatch(fetchReddit(subreddit));
  },[subreddit,dispatch]);

  return (
    <div>
      {reddit.map((post,p) => <PostContent key={"redditPost"+p} id={p} data={post.data} clickable={true} />)}
    </div>
  );
}