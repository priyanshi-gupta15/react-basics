import { useContext } from "react";
import { Post } from "./Post";
import { PostsListData } from "../stores/PostStore";
export function PostList()
{
   const {postsList} = useContext(PostsListData);
    return(
        <>
        {postsList.map( (post) => <Post key={post.id} post ={post}></Post> )}
        </>
    );
}