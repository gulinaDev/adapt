// import React from 'react';
// import{useState} from "react"
//
// const Tabs = () => {
//     const [toggleState,setToggleState] = useState(1)
//     const toggleTab = (index) =>{
//         setToggleState(index)
//     }
//     return (
//         <div className="container">
//             <div className="bloc-tabs">
//                 <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
//                 onClick={() => toggleTab(1)}
//                 >Tab1</div>
//
//                 <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
//                      onClick={() => toggleTab(2)}
//                 >Tab2</div>
//
//                 <div className= {toggleState === 3 ? "tabs active-tabs" : "tabs"}
//                      onClick={() => toggleTab(3)}
//                 >Tab3</div>
//             </div>
//
//
//             <div className="content-tabs">
//                 <div className={toggleState === 1 ? "content active-content" : "content"}>
//                     <h2>Content1</h2>
//                     <hr/>
//                     <p>
//                         Lorem ipsum dolor sit amet,
//                         consectetur adipisicing elit.
//                         Omnis, vitae!
//                     </p>
//                 </div>
//
//
//                 <div className={toggleState === 2 ? "content active-content" : "content"}>
//                     <h2>Content 2</h2>
//                     <hr/>
//                     <p>
//                         Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                         Cum facere facilis fugit id qui. At blanditiis, dolores
//                     </p>
//
//                 </div>
//                 <div className={toggleState === 3 ? "content active-content" : "content"}>
//                     <h2>Content 3</h2>
//                     <hr/>
//                     <p>
//                         Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                         Cum facere facilis fugit id qui. At blanditiis, dolores
//                     </p>
//
//                 </div>
//             </div>
//
//         </div>
//     );
// };
//
// export default Tabs;