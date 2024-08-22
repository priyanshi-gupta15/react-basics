import "./App.css";
import Card from "./component/Card";
import "./index.css";
function App() {
  let myname =["riya","priya","siya","neha","naina","me"];
  let count=0;
  
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="flex flex-1 flex-wrap gap-5">
      <Card username={myname[count++]}/>
      <Card username={myname[count++]}/>
      <Card username={myname[count++]} />
      <Card username={myname[count++]}/>
      <Card username={myname[count++]}/>
      <Card username={myname[count++]}/>
      </div>

    </>
  );
}

export default App;
