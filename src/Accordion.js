
//single accordian

// import React, { useState } from 'react'
// import "./App.css";
// const Accordion = () => {
//     const[show,setShow]=useState(false)
//   return (
//     <div>
//         <div className='acc'>
//             <div>
//               ques
//             </div>
//             {show ? <button onClick={()=>setShow(!show)}>-</button> :<button onClick={()=>setShow(!show)}>+</button>}
            
//         </div>
//         {show?  <div>answer</div>:""}
       
//     </div>
//   )
// }

// export default Accordion



//multiple accordian
// import React, { useState } from 'react'
// import "./App.css";
// const Accordion = () => {
//     const[show,setShow]=useState(-1)
//    

//   return (
//     data.map((item,index)=>{
//         return(
//            <div key={index}>
//                 <div className='acc'>
//                     <div>{item.ques}</div>
//                 {show ===index?<button onClick={()=>setShow(-1)}>-</button>:<button  onClick={()=>setShow(index)}>+</button>}    
//                 </div>

//                {show===index? <div>{item.Answer}</div>:""} 
//            </div>
//         )
//     })
//   )
// }

// export default Accordion




