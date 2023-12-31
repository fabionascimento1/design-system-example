import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { styled } from "./styles";

function App() {
  const [count, setCount] = useState(0);
  const Button = styled("button", {
    fontFamily: "$default",
    backgroundColor: "$ignite500",
    width: "$64",
  });
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Button>olaaaa</Button>
    </>
  );
}

export default App;
