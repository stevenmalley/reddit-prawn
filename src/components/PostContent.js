import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/PostContent.css';

export default function PostContent(props) {
  const {title,selftext_html,thumbnail,subreddit,author,url,permalink,score,media,media_metadata,post_hint} = props.data;
  // other attributes: selftext, preview, upvote_ratio, secure_media
  // preview url: preview.images[0].source.url

  const navigate = useNavigate();

  useEffect(parseHTML);

  function parseHTML() {
    const htmlLoader = document.createElement("p");
    htmlLoader.innerHTML = selftext_html;
    document.getElementById("selftext"+props.id).innerHTML = htmlLoader.textContent;
  }

  function displayGallery() {
    const galleryImages = [];
    for (const image in media_metadata) {
      galleryImages.push(<img key={"gallery-"+image} src={"https://i.redd.it/"+image+".jpg"} alt="gallery media" />);
    }
    return galleryImages;
  }

  if (props.postPage === "postPage") console.log(props.data);

  return (
    <div className="postContent">
      <div className="postHeader">
        <span className="scoreSpan">{score}</span>
        <span className="authorSpan">{author}</span>
        <span className="subredditSpan"><Link to={"/r/"+subreddit}>/r/{subreddit}</Link></span>
      </div>
      <div className="leftBox">
        {post_hint === "link" && thumbnail.startsWith("http") ? <img src={thumbnail} alt="post thumbnail" /> : null}
        <br />
        <a href={"http://www.reddit.com/"+permalink}>visit Reddit.com</a>
      </div>
      <div className={props.clickable ? "mainBox clickable" : "mainBox"} onClick={props.clickable ? ()=>navigate(props.data.permalink) : ()=>{}}>
        <h2 className="postTitle">{title}</h2>
        <div className="selfTextDiv" id={"selftext"+props.id}></div>
        {post_hint === "link" ? <a href={url}>{url}</a> : null}
        {url.includes("i.redd.it") || url.includes("imgur.com") ? <img src={url} alt="post content" /> : null}
        {url.includes("v.redd.it") ? <video src={media.reddit_video.fallback_url} controls></video> : null}
        {url.includes("reddit.com/gallery") ? displayGallery() : null}
      </div>
    </div>
  );
}