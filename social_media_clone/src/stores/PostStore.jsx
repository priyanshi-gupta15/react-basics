import { createContext, useReducer} from "react";

export const PostsListData = createContext({
  postsList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postid
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "ADDINITIAL_POST") {
    newPostList = action.payload.posts;
  }

  return newPostList;
};

// eslint-disable-next-line react/prop-types
const PostsListProvider = ({ children }) => {
  const [postsList, dispatchPostsList] = useReducer(postListReducer,[]);

  

  const addPost = (post) => {
    dispatchPostsList({
      type: "ADD_POST",
      payload: {
        post
      
      },
    });
  };

  const deletePost = (postid) => {
    dispatchPostsList({
      type: "DELETE_POST",
      payload: {
        postid,
      },
    });
  };
  const addInitialPosts = (posts) => {
    dispatchPostsList({
      type: "ADDINITIAL_POST",
      payload: {
        posts,
      },
    });
  };
  return (
    <PostsListData.Provider
      value={{ postsList, addPost, deletePost, addInitialPosts }}
    >
      {children}
    </PostsListData.Provider>
  );
};

export default PostsListProvider;
