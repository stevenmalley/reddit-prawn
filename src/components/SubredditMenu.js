import { Link } from 'react-router-dom';

export default function SubredditMenu() {
  const subreddits = [
    "Prawns",
    "wholesomememes",
    "Eyebleach",
    "AnimalsBeingJerks",
    "Awwducational",
    "StartledCats",
    "dogpictures",
    "Dogtraining",
    "corgi",
    "Pets",
    "Zoomies",
    "babyelephantgifs",
    "guineapigs",
    "AnimalTextGifs",
    "tuckedinkitties",
    "MEOW_IRL",
    "parrots",
    "holdmycatnip",
    "curledfeetsies",
    "catpranks",
    "hamsters"];
  
  return (
    <aside id="subredditMenu">
    <ul>
      <h2>subreddits</h2>
      {subreddits.map(sub => (
        <li key={"subredditLink-"+sub} className="subredditLink">
          <Link to={"/r/"+sub}>{sub}</Link>
        </li>))}
    </ul>
    </aside>
  );
}