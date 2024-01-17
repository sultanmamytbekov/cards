import { useState } from "react";
import "./App.scss";
import Header from "./components/Header";

function App() {
  const [dark , setDark] = useState(false)
  return (
    <div style={{background:dark ? 'black' : '' , transition:'1s'}} className="App">
      <Header dark={dark} setDark={setDark}/>
    </div>
  );
}

export default App;
