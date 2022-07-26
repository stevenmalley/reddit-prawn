import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/PostContent.css';

export default function PostContent(props) {
  const {title,selftext_html,thumbnail,subreddit,author,url,permalink,score,media,media_metadata,post_hint,num_comments} = props.data;
  // other attributes: selftext,preview,upvote_ratio,secure_media,domain
  // preview url: preview.images[0].source.url

  const navigate = useNavigate();

  useEffect(parseHTML);

  function parseHTML() {
    const htmlLoader = document.createElement("p");
    htmlLoader.innerHTML = selftext_html;
    document.getElementById("selftext"+props.id).innerHTML = htmlLoader.textContent;
  }

  function displayContent() {
    if (url.includes("i.redd.it") || url.includes("imgur.com")) return <img src={url} alt="post content" />;
    if (url.includes("v.redd.it") && media) return <video src={media.reddit_video.fallback_url} controls />;
    if (url.includes("reddit.com/gallery")) {
      const galleryImages = [];
      for (const image in media_metadata) {
        galleryImages.push(<img key={"gallery-"+image} src={"https://i.redd.it/"+image+".jpg"} alt="gallery media" />);
      }
      return galleryImages;  
    }
    if (selftext_html === null && !url.startsWith("https://www.reddit.com")) return <div style={{overflow:"hidden"}} ><a href={url}>{url}</a></div>;
    return null;
  }

  return (
    <div className="postContent">
      <div className="postHeader">
        <span className="scoreSpan">{score} upvotes</span>
        <span className="authorSpan">{author}</span>
        <span className="subredditSpan"><Link to={"/r/"+subreddit}>/r/{subreddit}</Link></span>
      </div>
      <div className="leftBox">
        <Link to={props.data.permalink}>{num_comments} comments</Link>
        <br />
        {post_hint === "link" && thumbnail.startsWith("http") ? <img src={thumbnail} alt="post thumbnail" /> : null}
        <br />
        <a href={"http://www.reddit.com/"+permalink}>visit Reddit.com</a>
      </div>
      <div className={props.clickable ? "mainBox clickable" : "mainBox"} onClick={props.clickable ? ()=>navigate(props.data.permalink) : ()=>{}}>
        <h2 className="postTitle">{title}</h2>
        <div className="selfTextDiv" id={"selftext"+props.id}></div>
        {displayContent()}
      </div>
    </div>
  );
}