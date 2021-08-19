import { createContext, useState } from "react";

const ProductContext = createContext();

const initialState = [
    { id: 1, title: "Product #1" },
    { id: 2, title: "Product #2" },
    { id: 3, title: "Product #3" },
];

const ProductProvider = ({ childer }) => {
    const [products, setProducts] = useState(initialState)
    const data = { products };
    return (
        <ProductContext.Provider value={data}>
            {children}
        </ProductContext.Provider>
    )
}

export { ProductProvider }
export default ProductContext;