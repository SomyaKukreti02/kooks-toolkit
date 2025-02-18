import { useState, useCallback, useEffect, useRef } from "react";

function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPasword] = useState("");
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 3);
    window.navigator.clipboard.writeText(password);
  }, [password]);
  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";

    if (numberAllowed) str = "1234567890" + str + "1234567890";
    if (charAllowed) str = "!@#$%^&*()" + str + "!@#$%^&*()";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPasword(pass);
  }, [length, numberAllowed, charAllowed, setPasword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed]);

  return (
    <div className="flex items-center justify-center">
      <div className=" text-white  p-4 rounded-md border">
        {/* heading */}
        <h1 className=" text-white text-center">password Generator</h1>
        {/* password + copy box */}
        <div className="flex shadow overflow-hidden mb-4 gap-1 my-2">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 rounded-lg text-blue-500"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="border-2 p-2 rounded-lg bg-yellow-500 text-white"
          >
            Copy
          </button>
        </div>
        {/* range + numbers + characters box */}
        <div className="input-box flex flex-wrap md:flex-nowrap gap-2">
          <div className="len flex gap-1 items-end ">
            <input
              type="range"
              min="6"
              max="30"
              value={length}
              className=""
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="length">Length:&nbsp;{length}</label>
          </div>
          <div className="num flex gap-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="num"
              name="num"
              onChange={() => {
                setNumberAllowed(
                  (prevNumberAllowedValue) => !prevNumberAllowedValue
                );
              }}
            />
            <label htmlFor="num">Number</label>
          </div>
          <div className="char flex gap-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="char"
              name="char"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="char">Character</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
