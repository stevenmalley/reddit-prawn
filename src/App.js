import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostList from './components/PostList';
import PostPage from './components/PostPage';
import SubredditMenu from './components/SubredditMenu';
import './App.css';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import redditSlice from './store/redditSlice';

const store = configureStore({reducer: {reddit:redditSlice.reducer}});

function App() {

  return (
    <div className="App">
      <Provider store={store}>
      <Router>
        <Link to="/">
          <div id="redditPrawnHeader">
            <img src={require("./images/proo.png")} alt="reddit-prawn logo" />
            <h1>REDDIT PRAWN</h1>
          </div>
        </Link>
        <SubredditMenu />
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/r/:subreddit" element={<PostList />} />
          <Route path="/r/:subreddit/comments/*" element={<PostPage />} />
        </Routes>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
