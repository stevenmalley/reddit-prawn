import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Prawn from './components/Prawn';
import PostPage from './components/PostPage';
import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
        <Link to="/">
          <div id="redditPrawnHeader">
            <img src={require("./images/proo.png")} alt="reddit-prawn logo" />
            <h1>REDDIT PRAWN</h1>
          </div>
        </Link>
        <Routes>
          <Route path="/" element={<Prawn />} />
{/*          <Route path="/r/*" element={<PostPage />} /> */}
          <Route path="/r/:subreddit" element={<Prawn />} />
          <Route path="/r/:subreddit/comments/*" element={<PostPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
