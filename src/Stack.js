import React, { useState } from "react";

const Stack = () => {
  const [value, setValue] = useState("");
  const [stack, setStack] = useState([]);
  const [status, setStatus] = useState("");

  const handlePush = () => {
    if(value!==""){
        setStack((prev) => {
            const update = [...prev, value];
            return update;
          });
    }

    setValue("");
  };
  console.log(stack);

  const handlePop = () => {
    if (stack.length > 0) {
      setStack((prev) => {
        const update = [...prev];
        update.pop();
        return update;
      });
    }
  };

  const handlePeak = () => {
    if (stack.length === 0) {
      return setStatus("stack is empty");
    }
    const lastElement = stack[stack.length - 1];
    return setStatus(`last element is ${lastElement}`);
  };

  const handleEmpty = () => {
    if (stack.length === 0) {
      return setStatus("stack is empty");
    } else {
      return setStatus("stack is not empty");
    }
  };

  const handleFull = () => {
    setStatus("stack is not full");
  };
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handlePush}>Push</button>
      <button onClick={handlePop}> Pop</button>
      <button onClick={handlePeak}>Peak</button>
      <button onClick={handleEmpty}>IsEmpty</button>
      <button onClick={handleFull}>IsFull</button>
      <div>{status}</div>

      {stack.length > 0 &&
        stack.map((item, i) => {
          return <div key={i}>{item}</div>;
        })}
    </div>
  );
};

export default Stack;
