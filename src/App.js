import "./App.css";
import { useState } from "react";

import DashBoard from "./components/DashBoard";
import SignUp from "./components/SignUp";
import HeaderBar from "./components/HeaderBar";
function App() {
  const [isLoggedIn, setIsLogged] = useState(false);

  return (
    <div className="App">
      <HeaderBar />
      {isLoggedIn ? (
        <DashBoard />
      ) : (
        <SignUp state={isLoggedIn} setState={setIsLogged} />
      )}
    </div>
  );
}

export default App;
