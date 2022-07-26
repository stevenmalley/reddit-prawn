import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
	name: "reddit",
	initialState: {postList:[],commentList:[]},
	reducers: {
    retrievePostList:(slice,action)=>{slice.postList = action.payload},
    currentPost:(slice,action)=>{slice.postList = action.payload},
    currentComments:(slice,action)=>{slice.commentList = action.payload}
  }
});

export function fetchReddit(subreddit) {
  return async (dispatch,getState) => {
    const response = await fetch("https://api.reddit.com/"+subreddit);
    if (!response.ok) throw new Error(response.status);
    const jsonResponse = await response.json();
    dispatch({type:"reddit/retrievePostList",
              payload:jsonResponse.data.children});
  };
}

export function fetchPost(subreddit,postURL) {
  return async (dispatch,getState) => {
    const response = await fetch("https://api.reddit.com/r/"+subreddit+"/comments/"+postURL);
    if (!response.ok) throw new Error(response.status);
    const jsonResponse = await response.json();
    dispatch({type:"reddit/currentPost",
              payload:jsonResponse[0].data.children});
    dispatch({type:"reddit/currentComments",
              payload:jsonResponse[1].data.children.filter(child => child.kind === "t1")});
  }
}

export function redditSelector(state) {return state.reddit}