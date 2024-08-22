/* eslint-disable react/prop-types */
import { Trash, HeartIcon } from "lucide-react";
import { useContext, useState } from "react";
import { PostsListData } from "../stores/PostStore";

export function Post({ post }) {
  let [isTouched, setIsTouched] = useState(true);
  let [isLiked, setLiked] = useState(post.views);

  const toggleTouch = () => {
    setIsTouched(!isTouched);
  };
  const like = () => {
    if (isTouched === true) {
      isLiked = ++isLiked;
      setLiked(isLiked);
    } else{
      isLiked = --isLiked;
      setLiked(isLiked);
    }
    
  };

  const { deletePost } = useContext(PostsListData);
  return (
    <div className="w-[300px] rounded-md border mx-10 my-6">
      <div className="relative ">
        <div
          className="absolute top-3 right-2 bg-slate-100 h-8 w-8 p-0.5 rounded-full hover:bg-slate-300 "
          key={post.id}
          onClick={() => deletePost(post.id)}
        >
          <Trash className="h-29 w-7 "></Trash>
        </div>

        <img
          src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="Laptop"
          className="h-[200px] w-full rounded-md object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between">
          <h1 className="">{post.userid}</h1>
          <p className="">{post.id}</p>
          
        </div>
        <div className="flex justify-between">
          <h1 className="text-lg font-semibold">{post.title}</h1>
          <p className="font-bold" onClick={toggleTouch}>
            <HeartIcon
              onClick={like}
              className={`inline p-0.5 ${
                isTouched === false && "fill-red-500"
              } `}
            ></HeartIcon>
            {isLiked}
          </p>
        </div>
        <p className="mt-3 text-sm text-gray-600">{post.body}</p>

        {post.tags.map((post) => (
          <span
            key={post}
            className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1  m-1.5 ring-inset ring-red-600/10"
          >
            #{post}
          </span>
        ))}
      </div>
    </div>
  );
}
