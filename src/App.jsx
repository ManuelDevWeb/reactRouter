import { useState } from "react";
//import AppRouter from "./routers/AppRouter";
import Menu from "./components/Menu";
import Productos from "./components/Productos";
import Footer from "./components/Footer";
//Importando el Context
import UserContext from "./store/UserContext";

const initialState = {
  id: 1,
  name: "Manuel"
}

function App() {
  //useState para manejar estado del componente
  const [user, setUser] = useState(initialState);
  const data = { user }
  return (
    <div className="App">
      <UserContext.Provider value={data}>
        <Menu />
        <Productos />
      </UserContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
