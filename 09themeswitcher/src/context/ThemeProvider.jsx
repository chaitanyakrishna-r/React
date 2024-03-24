import React, { useContext,useState } from "react";
import ThemeContest from "./themes";

const ThemeProviders = ({Children})=>{

    const [theme, setTheme] = useState(null)
    return(
        <ThemeContest.Provider value={ {theme,setTheme} }>
            {Children}
        </ThemeContest.Provider>
    )

}
export default ThemeProviders

// const useTheme = useContext(ThemeContest)