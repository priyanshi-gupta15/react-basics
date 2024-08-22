import { useState } from "react";

function App(){
 const [first, setFirst] = useState("blue")

  return(
    <>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <h2>hyy i am back with {first}</h2>
    <div className="flex p-4 gap-4 ">
    <button className="outline py-2 px-4"  onClick={()=>setFirst("red")}>red</button>
    
    <button onClick={()=>setFirst("yellow")}>yellow</button>
    
    <button onClick={()=>setFirst("white")}>white</button>
    </div>
    </>

  );
}

export default App;