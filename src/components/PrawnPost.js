import { useEffect } from 'react';
import '../styles/PrawnPost.css';

export default function PrawnPost(props) {
  const {title,selftext,selftext_html,thumbnail,preview,subreddit,author,permalink,url,score,upvote_ratio,media,secure_media,post_hint} = props.data;
  // preview url: preview.images[0].source.url

  useEffect(parseHTML,[]);

  function parseHTML() {
    const htmlLoader = document.createElement("p");
    htmlLoader.innerHTML = selftext_html;
    document.getElementById("selftext"+props.id).innerHTML = htmlLoader.textContent;
  }

  if (props.postPage === "postPage") console.log(props.data);

  return (
    <div className="prawnPost">
      <div className="leftBox">
        <span>/r/{subreddit}</span>
        <div className="postScore">{score}</div>
        {post_hint === "link" && thumbnail.startsWith("http") ? <img src={thumbnail} /> : null}
      </div>
      <div className="mainBox">
        <h2 className="postTitle">{title}</h2>
        <h3>{author}</h3>
        <div className="selfTextDiv" id={"selftext"+props.id}></div>
        {post_hint === "link" ? <a href={url}>{url}</a> : null}
        {url.includes("i.redd.it") ? <img src={url} className="postImage" /> : null}
        {url.includes("v.redd.it") ?
          (media? <video src={media.reddit_video.fallback_url} controls></video> : <video src={secure_media.reddit_video.fallback_url}></video>) :
          null}
      </div>
    </div>
  );
}