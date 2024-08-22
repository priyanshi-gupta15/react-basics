import { ArrowRight } from "lucide-react";
import { GiFeather } from "react-icons/gi";
import { useContext, useRef } from "react";
import { PostsListData } from "../stores/PostStore";
// eslint-disable-next-line react/prop-types
export function CreatePost({ selectTab, setSelectTab }) {
 const {addPost} = useContext(PostsListData)


  const useridElement= useRef();
  const titleElement = useRef();
  const bodyElement= useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleOnSubmit = ( event) =>{
    event.preventDefault();
    const userid = useridElement.current.value;
    const title = titleElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split("#");
    const body = bodyElement.current.value;

    addPost(userid,title,body,tags,reactions);

    useridElement.current.value="";
    titleElement.current.value="";
   reactionsElement.current.value ="";
    tagsElement.current.value = "";
    bodyElement.current.value= "";


  }
  return (
    <section>
      <div
        className={`flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 ${
          selectTab === "post" && "hidden"
        }`}
      >
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="mb-2 flex justify-center">
            <a href="#">
              {/* =====================logo================ */}
              <span>
                <GiFeather className="bg-red-300 rounded-full h-10 w-10 p-1 inline-block mx-1"></GiFeather>
              </span>
              <span className="font-bold">social</span>
              {/* ===================end of logo ========== */}
            </a>
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 ">
            Don&apos;t have an account?{" "}
            <a
              href="#"
              title=""
              className="font-semibold text-black transition-all duration-200 hover:underline"
            >
              Create a free account
            </a>
          </p>
          <form action="" method="POST" className="mt-8">
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="post"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Email address{" "}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Email"
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Password{" "}
                  </label>
                  <a
                    href="#"
                    title=""
                    className="text-sm font-semibold text-black hover:underline"
                  >
                    {" "}
                    Forgot password?{" "}
                  </a>
                </div>
                <div className="mt-2">
                  <input
                  
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                  ></input>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  onClick={() => {
                    setSelectTab("post");
                  }}
                >
                  post <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* =============================================================new content */}

      <div
        className={`flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24  ${
          selectTab === "Create post" && "hidden"
        }`}
      >
        <div className="xl:mx-auto p-2 xl:w-full xl:max-w-sm 2xl:max-w-md w-80 border ">
          <div className="mb-2 flex justify-center ">
            <a href="#">
              {/* =====================logo================ */}
              <span>
                <GiFeather className="bg-red-300 rounded-full h-10 w-10 p-1 inline-block mx-1"></GiFeather>
              </span>
              <span className="font-bold">social</span>
              {/* ===================end of logo ========== */}
            </a>
          </div>

          <form action="" method="POST" className="mt-8" onSubmit={handleOnSubmit}>
            <div className="space-y-5">
              <div>
                <label htmlFor="userid" className=" font-medium text-gray-500">
                  User Id
                </label>
                <div className="mt-2">
                  <input
                  ref={useridElement}
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 shadow-md"
                    type="number"
                    min={0}
                    max={7}
                    placeholder="enter your 6 digit id."
                  ></input>
                </div>
              </div>
              <div >
                <label htmlFor="title" className=" font-medium text-gray-500">
                  Title
                </label>
                <input
                ref={titleElement}
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 shadow-md"
                  type="text"
                  placeholder="what's in your mind"
                ></input>
              </div>
              <div className="">
                <label htmlFor="body" className=" font-medium text-gray-500">
                Description
                </label>
                <textarea
                ref={bodyElement}
                  rows={6}
                  className="flex  w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed shadow-md disabled:opacity-50  "
                  type="password" 
                  placeholder="what's in your mind"
                ></textarea>
              </div>
              <div >
                <label htmlFor="tags" className=" font-medium text-gray-500">
                  Tags
                </label>
                <input
                ref={tagsElement}
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400  shadow-md focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="#"
                ></input>
              </div>
              <div >
                <label htmlFor="reactions" className=" font-medium text-gray-500">
                  Reactions 
                </label>
                <input
                 ref={reactionsElement}
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed  shadow-md disabled:opacity-50"
                  type="number"
                  placeholder="reactions on post"
                ></input>
              </div>

              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  post <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
