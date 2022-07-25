import { useEffect } from 'react';

export default function Comment(props) {

  const {author,score,body_html} = props.data;

  useEffect(parseHTML,[]);

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
      <div className="leftBox">
        {author}
        <div className="commentScore">{score}</div>
      </div>
      <div className="mainBox">
        <div id={"comment"+props.id}></div>
      </div>
    </div>
  )
}