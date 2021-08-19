import { useContext } from "react";
import ProductContext from "../store/ProductContext";

const Productos = () => {
    console.log("Products")
    //Accediendo a los valores del useContext
    const { products } = useContext(ProductContext)
    return (
        <div>
            <h1>Productos</h1>
            <ul>
                {
                    products.map((product) => (
                        <li key={product.id}>{product.title}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Productos;