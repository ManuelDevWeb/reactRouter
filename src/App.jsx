//import AppRouter from "./routers/AppRouter";
import Menu from "./components/Menu";
import Productos from "./components/Productos";
import Footer from "./components/Footer";
//Importando el Context
import { StoreProvider } from "./store/StoreProvider";

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <Menu />
        <Productos />
      </StoreProvider>
      <Footer />
    </div>
  );
}

export default App;
