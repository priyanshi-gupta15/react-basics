import { useState } from "react";

import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  const addvalue = () => {
    if (count > 19) {
      if (confirm("Press if you want value more than 20!") == true) {
        count = count + 1;
        setCount(count);
      } else {
        count = count;
        setCount(count);
      }
    } else {
      count = count + 1;
      setCount(count);
    }
  };

  const reducevalue = () => {
    if (count < 1) {
      if (confirm("value is negative now!") == true) {
        count = count - 1;
        setCount(count);
      } else {
        count = count;
        setCount(count);
      }
    } else {
      count = count - 1;
      setCount(count);
    }
  };

  return (
    <>
      <h1>my counter</h1>
      <span className="number">{count}</span>
      <div className="card">
        <button onClick={addvalue}>count by 1</button>
        <button onClick={reducevalue}>reduce by 1</button>
      </div>
    </>
  );
}

export default App;
