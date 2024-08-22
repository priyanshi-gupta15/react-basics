//import { useState } from 'react'

import "./App.css";
import Butoon from "./Components/Butoon";
import Input from "./Components/Input";
import { useState } from "react";

function App() {
  //let fooditems = ["dal", "chaval", "roti"];
  let numbers = [
    "c",
    "1",
    "2",
    "-",
    "3",
    "4",
    "+",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  const [text, setText] = useState("food items enter by user");
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [calval, setCalVal] = useState("");

  let display = (btn) => {
    console.log(btn);
    if (btn === "c") {
      setCalVal("");
    } else if (btn == "=") {
      let result = eval(calval);
      setCalVal(result);
    } else {
      let newval = calval + btn;
      setCalVal(newval);
    }

  };

  return (
    <>
      {/* for calculator</> */}
      <div className="bg-slate-50 w-72 mt-4 m-auto p-4 shadow-md shadow-current">
        <Input handleOnChange={handleOnChange} calval={calval}></Input>
        <p>{text}</p>
        <div className="flex flex-wrap px-9 justify-center  ">
          {numbers.map((items) => (
            <Butoon className key={items} btn={items} val={display}></Butoon>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

//  <h1 className="text-5xl uppercase text-center">healthy food</h1>
// {fooditems.length === 0 && <h3>i am still hungry</h3>}
// <ul className="">
//   {fooditems.map((item) => (
//     <li className="m-5 bg-red-200" key={item}>
//       {item}
//     </li>
//   ))}
// </ul>
// /* code for map function */
