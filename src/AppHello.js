import React, { Component, useState } from "react";

function Hello({ init = "555" }) {
  const [hello, setHello] = useState(init);
  const addX = () => setHello((prve) => "HHHHH");
  const addMinus = () => setHello((prev) => prev + "Y");

  return (
    <>
      <h1>{hello}</h1>
      <button onClick={addX}>click add X</button>
      <button onClick={addMinus}>click add Y</button>
    </>
  );
}

export default Hello;

// export default class Hello extends Component {
//   state = { helloState: "hello World" };
//   setHello = (helloState) => this.setState({ helloState });
//   render() {
//     const { helloState } = this.state;
//     return (
//       <div>
//         <div title="click me!" onClick={() => this.setHello("Hi Stranger!")}>
//           {helloState}
//         </div>
//         <button onClick={() => this.setHello("hello World")}>Reset</button>
//       </div>
//     );
//   }
// }
