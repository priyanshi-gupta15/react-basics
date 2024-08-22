import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [pass, setPass] = useState("");

  //useRef hook
  const passref = useRef(null);

  ///copy pass
  const copypass = useCallback(() => {
    passref.current?.select();
    passref.current?.setSelectionRange(0, 6); //for select restricted password
    window.navigator.clipboard.writeText(pass);
  }, [pass]);

  const passGenerator = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvxywz";
    if (number) str += "0123456789";
    if (char) str += "!~@#$%^&**()_+=`';/.,<>";

    for (let i = 0; i <= length; i++) {
      let value = Math.random() * str.length + 1;
      password += str.charAt(value);
    }
    setPass(password);
  }, [length, number, char, setPass]);

  useEffect(() => {
    passGenerator();
  }, [length, number, char, setPass]);
  //here we use setpass to cache the pre output or for store in memory , for optimizing , if we want we alse not use this

  return (
    <>
      <div className="w-full max-w-md px-4 py-3 m-8  max-auto shadow-lg text-orange-500  bg-gray-500 rounded-lg   ">
        <h1 className="text-center text-xl p-1 uppercase">
          password generator
        </h1>
        <div className="flex shadow overflow-hidden rounded-lg mb-4">
          <input
            type="text"
            value={pass}
            className="outline-none w-full py-1 px-3"
            readOnly
            placeholder="password"
            ref={passref}
          />
          <button
            className="bg-blue-700 text-white px-3 py-0.5  shrink-0 outline-none"
            onClick={copypass}
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              max={20}
              min={6}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label> length:{length} </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={number}
              id="numberinput"
              onChange={() => setNumber((prev) => !prev)}
            />
            <label htmlFor="numberinput">numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={char}
              id="charinput"
              onChange={() => setChar((prev) => !prev)}
            />
            <label htmlFor="numberinput">char</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
