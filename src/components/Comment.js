import { useEffect } from 'react';

export default function Comment(props) {

  const {author,score,body_html} = props.data;

  useEffect(parseHTML);

  function parseHTML() {
    const htmlLoader = document.createElement("p");
    htmlLoader.innerHTML = body_html;
    document.getElementById("comment"+props.id).innerHTML = htmlLoader.textContent;
  }

  function logger() {
    console.log(props.data);
  }

  return (
    <div className="comment" onClick={logger}>
      <div className="commentHeader">
        <span className="scoreSpan">{score} upvotes</span>
        <span className="authorSpan">{author}</span>
      </div>
      <div id={"comment"+props.id}></div>
    </div>
  )
}