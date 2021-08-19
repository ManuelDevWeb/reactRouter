import { useContext } from "react";
import StoreContext from "../store/StoreProvider";
import { types } from "../store/StoreReducer";

const Productos = () => {
    console.log("Products")
    //Accediendo a los valores del useContext
    const [{ products }, dispatch] = useContext(StoreContext);

    const handlerDeleteAll = () => {
        //Dispatch permite actualizar el reducer
        dispatch({
            type: types.PRODUCT_DELETE_ALL
        })
    }

    const handlerChange = () => {
        dispatch({
            type: types.PRODUCT_CHANGE,
            payload: [{ id: 5, title: 'Product #5' }]
        })
    }

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
            <button onClick={handlerDeleteAll}>DeleteAll</button>
            <button onClick={handlerChange}>Change</button>
        </div>
    );
}

export default Productos;