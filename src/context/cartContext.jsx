import { createContext, useState, useContext } from "react"

const cartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (quantity, options, id) => {
        setCart([...cart, { options, quantity, id}])
    }

    const removeToCart = (id) => {
        setCart(cart.filter((el) => id !== el.id));
    }

    return (
        <cartContext.Provider value={{ cart, setCart, addToCart, removeToCart }}>
            {children}
        </cartContext.Provider>
    )
}

export function useCart() {
    return useContext(cartContext)
}