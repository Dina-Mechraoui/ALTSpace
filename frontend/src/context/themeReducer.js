export const ThemeReducer = (state, action) => {
    switch (action.type) {
        case 'SETDARK': {
            return { theme: "dark" }
        }
        case 'SETLIGHT': {
            return { theme: "light" }
        }
        case "TOGGLE": {
            if (state.theme === "dark") return { theme: "light" }
             else return { theme: "dark" }
        }
        default: {
            return state;
        }
    }
}