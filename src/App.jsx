//import AppRouter from "./routers/AppRouter";
import Menu from "./components/Menu";
import Productos from "./components/Productos";
import Footer from "./components/Footer";
//Importando el Context
import { UserProvider } from "./store/UserContext";
import { ProductProvider } from "./store/ProductContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <ProductProvider>
          <Menu />
          <Productos />
        </ProductProvider>
      </UserProvider>
      <Footer />
    </div>
  );
}

export default App;
