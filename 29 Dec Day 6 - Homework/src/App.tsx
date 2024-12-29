import Header from "./components/Header.jsx";
import "./App.css";
import Cart from "./components/Cart.js";
import { CartProvider } from "./context/CartProvider.js";

function App() {
   return (
      <CartProvider>
         <Header />
         <Cart />
      </CartProvider>
   );
}

export default App;
