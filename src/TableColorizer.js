// import React, { useState } from 'react';
// import styles from './table-colorizer.module.css';

// const TableColorizer = () => {
//   const [colorArray, setColorArray] = useState([]);

//   const onColorMe = (e) => {
//     e.preventDefault();
//     const inputValue = parseInt(e.target.elements.colRef.value);

//     if (isNaN(inputValue) || inputValue < 1 || inputValue > 9) {
//       alert('Enter a valid number between 1 and 9');
//       return;
//     }

// if (!colorArray.includes(inputValue)) {
//   setColorArray((prev) => [...prev, inputValue]);
// }
//   };

//   const clearColors = () => {
//     setColorArray([]);
//   };

//   const numberList = [];
//   for (let i = 1; i <= 9; i++) {
//     numberList.push(i);
//   }

//   return (
//     <div className={styles.color}>
//       <form className={styles.form} onSubmit={onColorMe}>
//         <input type="number" className={styles.numberInput} name="colRef" />
//         <div className="buttons">
//           <button type="submit">Color Me</button>
//           <button onClick={clearColors}>Clear Me</button>
//         </div>
//       </form>

//       <div className={styles.containers}>
//         {numberList.map((number) => (
//           <div
//             key={number}
//             className={colorArray.includes(number) ? styles.containerColor : styles.container}
//           >
//             {number}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TableColorizer;

import React, { useState } from "react";
import "./App.css";
const TableColorizer = () => {
  const [colorArray, setColorArray] = useState([]);
  const [value, setValue] = useState(0);
  const clearColor = () => {
    setColorArray([]);
    setValue(0)
  };
console.log(value)
console.log(colorArray)
  const colorMe = () => {
    let newVal=parseInt(value)
    console.log(typeof(newVal))
    if (isNaN(newVal) || newVal < 1 || newVal > 9) {
      alert("na");
      return;
    }

    if (!colorArray.includes(newVal)) {
      setColorArray((prev) => [...prev, newVal]);
    }
 
  };

  let numberList = [];
  for (let i = 1; i <= 9; i++) {
    numberList.push(i);
  }
  return (
    <>
      <input type="Number" name="colorRef" value={value} onChange={(e)=>setValue(e.target.value)} />
      <button onClick={colorMe}>Color Me</button>
      <button onClick={clearColor}>Clear</button>

      <div className="containers">
        {numberList.map((number) => {
          return <div key={number} className={colorArray.includes(number) ? "colorConatiner":"container"}>{number}</div>;
        })}
      </div>
    </>
  );
};

export default TableColorizer;
