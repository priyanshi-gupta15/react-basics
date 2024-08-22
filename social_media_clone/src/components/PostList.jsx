import { useContext,useState,useEffect} from "react";
import { Post } from "./Post";
import { PostsListData } from "../stores/PostStore";
import { WelcomeMesaage } from "./WelcomeMessage";
import { Spinner } from "./LoaderSpinner";


export function PostList() {
  const { postsList,addInitialPosts} = useContext(PostsListData);
  const [fetching , setFetching] = useState(false);
  useEffect(() => {
    setFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then(data =>{addInitialPosts(data.posts)
       setFetching(false);
      });
    
  }, []);
  
  return (
    <>
      {fetching && <Spinner></Spinner>}
      {!fetching && postsList.length === 0 && <WelcomeMesaage></WelcomeMesaage>}
      {!fetching && postsList.map((posts) => (
        <Post key={posts.id} post={posts}></Post>
      ))}
    </>
  );
}
