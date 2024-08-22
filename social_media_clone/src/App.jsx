import { useState } from "react";
import "./App.css";
import { Footer } from "./components/footer";
import { SidebarOne } from "./components/SidebarOne";
import { CreatePost } from "./components/CreatePost";
import { Header } from "./components/Header";
import { PostList } from "./components/PostList";
import PostsListProvider from "./stores/PostStore";
//import WritePost from "./components/WritePost";



function App() {
  const [selectTab, setSelectTab] = useState("Home");

 
  return (
    <PostsListProvider>
      <div className="flex">
        <SidebarOne
          selectTab={selectTab}
          setSelectTab={setSelectTab}
        ></SidebarOne>
        <div className="flex flex-col w-full">
          <Header></Header>
          {selectTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost  selectTab={selectTab}
            setSelectTab={setSelectTab}></CreatePost>
          )}
        
        </div>
      </div>
      <Footer></Footer>
    </PostsListProvider>
  );
}

export default App;
