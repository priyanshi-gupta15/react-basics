import { useState } from "react";
import "./App.css";

function App() {
  let [color, setColor] = useState("blue");

  return (
    <>
     <div className="h-screen  w-screen" style={{backgroundColor:color}}>
         <div className="flex flex-wrap">
          <div className="rounded p-5  bottom-24 bg-green-300 flex flex-wrap m-52 gap-3" >
            <button onClick={() => {setColor("red")}}  style={{backgroundColor: "red"}}>red</button>
            <button onClick={() => {setColor("white")}}  style={{backgroundColor: "white"}}>white</button>
            <button onClick={() => {setColor("hotpink")}}  style={{backgroundColor: "hotpink"}}>hotpink</button>
            <button onClick={() => {setColor("maroon")}}  style={{backgroundColor: "maroon"}}>maroon</button>
            <button onClick={() => {setColor("grey")}}  style={{backgroundColor: "grey"}}>grey</button>

          </div>
         </div>
     </div>
     <button >white</button>
     <button>ref</button>
    </>
  );
}

export default App;
