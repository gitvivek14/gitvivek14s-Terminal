"use client"
import React,{useState,useEffect} from "react";
import {Theme} from "@/interfaces/index"
import Themes from "../themes.json"
import config  from "../../../config.json";
export interface ThemeContextType{
    setTheme : (name : string) => string;
    theme : Theme;   
}
interface Props{
    children : React.ReactNode
}
const defaultContextValue: ThemeContextType = {
    setTheme: () => "Default theme set function",
    theme: Themes[0],
};

const ThemeContext = React.createContext<ThemeContextType>(defaultContextValue);

export const useTheme = () => React.useContext(ThemeContext);

export const ThemeProvider:React.FC<Props> = ({children})=>{
    const [theme, _setTheme] = useState<Theme>(Themes[0]);

    useEffect(()=>{
        const savedTheme  = localStorage.getItem('theme')
        setTheme(savedTheme || config.theme)
    },[])

    const setTheme = (name:string)=>{
        const index = Themes.findIndex(
            (colorScheme) => colorScheme.name.toLowerCase() === name
        );

        if(index===-1){
            return `Theme '${name}' not found. Try 'theme ls' to see the list of available themes.`
        }
        _setTheme(Themes[index])

        localStorage.setItem('theme',name)
        return `Theme ${Themes[index].name} set successfully!`;
    }
    return (
        <ThemeContext.Provider value={{setTheme,theme}}>
            {children}
            </ThemeContext.Provider>
    )

}