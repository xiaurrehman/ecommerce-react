import './App.css'
import {Provider} from "react-redux"
import store from './store';
import ProductList from "./components/ProductList.jsx";
import Cart from "./components/Cart.jsx";

function App() {
  return (
    <Provider store={store}>
        <div className="App">
            <div>
                <h1>E-Commerce App</h1>
                <ProductList />
                <Cart />
            </div>
        </div>
    </Provider>
  )
}

export default App
