import { Routes, Route } from "react-router-dom";
import HomeDisplay from "./views/HomeDisplay";
import SuccessDisplay from "./views/SuccessDisplay";
import AppContext from "./libs/context";
import { useState } from "react";

function App() {
  const [loggedUser, setLoggedUser] = useState();
  return (
    <AppContext.Provider value={{loggedUser, setLoggedUser}}>
      <Routes>
        <Route path="/" element={<HomeDisplay/>} />
        <Route path="/success" element={<SuccessDisplay />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
