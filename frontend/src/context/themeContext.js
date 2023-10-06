import { createContext, useEffect, useReducer } from "react"
import { ThemeReducer } from "./themeReducer"

const INITIAL_STATE = {
    theme: JSON.parse(localStorage.getItem("theme")) || "light",
}

export const ThemeContext = createContext(INITIAL_STATE);

export const ThemeContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ThemeReducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(state.theme));
    }, [state.theme]);

    return (
        <ThemeContext.Provider value={{ theme: state.theme, dispatch }}>
            {children}
        </ThemeContext.Provider>
    )
}