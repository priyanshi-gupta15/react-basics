import { useState } from "react";
import Show from "./Show";
import "./App.css";
import Input from "./Input";

function App() {
  const [fooditems, setFoodItems] = useState(["dal", "roti", "salat"]);

  const onkeydown = (event) => {
    if (event.key === "Enter" && event.target.value != ""  ) {
      let key = event.target.value;
      let newfood =[...fooditems,key];
      setFoodItems(newfood);
      
    }
  };

  return (
    <>
    <body className="max-w-96 bg-slate-100 min-h-80 m-auto p-4 shadow-md">
      
      <h1 className="text-5xl uppercase text-center">healthy food</h1>

      <Input keydown={onkeydown}></Input>

      <Show key={fooditems} item={fooditems}></Show>


       </body>
    </>
  );
}

export default App;
