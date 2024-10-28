import { createContext, useContext } from "react"
import data from "../assets/data"

const MenuContext = createContext()

export const MenuProvider = ({ children }) => {
    return (
        <MenuContext.Provider value={{ menu: data.menu }}>
            {children}
        </MenuContext.Provider>
    )
}

export function useMenu() {
    return useContext(MenuContext)
}