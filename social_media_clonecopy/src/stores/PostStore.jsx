
/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

 export const PostsListData = createContext({
  postsList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList,action) =>{
    let newPostList = currPostList;
    if(action.type==="DELETE_POST")
    {
        newPostList = currPostList.filter(post => post.id !== action.payload.postid)
    }
    else if(action.type==="ADD_POST")
    {
        newPostList = [action.payload , ...currPostList]
    }

    return newPostList;
}

const PostsListProvider = ({ children }) => {
  const [postsList, dispatchPostsList] = useReducer(postListReducer,DEFAULT_POST_LIST);

   const addPost = (userid,title,body,tags,reactions) => {
    dispatchPostsList({
        type:"ADD_POST",
        payload:{
            id:Date.now(),
            title,
            body,
            reactions,
            userid,
            tags,
        
        
        }

    })

   
    
   };

   const deletePost = (postid) => {
    dispatchPostsList ({
        type:"DELETE_POST",
        payload:{
            postid,
        }
    })
   };
  return <PostsListData.Provider value={{postsList,addPost,deletePost}}>{children}</PostsListData.Provider>;
};


const DEFAULT_POST_LIST =[
    {
        id:"1",
        title:"mumbai",
        body:"These badges are designed and built by the Tailwind CSS team, and include a variety of different s",
        reactions: "2",
        userid:"user-2",
        tags:["vaction","mumbai","enjoying"],
    },
    {
        id:"2",
        title:"mumbai2",
        body:"Use these Tailwind CSS badge components to highlight important information",
        reactions: "22",
        userid:"user-22",
        tags:["vaction2","mumbai2","enjoying2"]

    },
    {
        id:"3",
        title:"jaipur",
        body:"Beautifully designed, expertly crafted components and templates, built by the makers of Tailwind CSS. The perfect starting point for your next project.",
        reactions: "100",
        userid:"user-11",
        tags:["engg","jaipur","enjoying"]

    }
]




export default PostsListProvider;
