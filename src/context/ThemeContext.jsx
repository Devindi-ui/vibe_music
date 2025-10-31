/**
 * React Hooks
 * 
 * 01 - createContext - transfeer data between components
 *                      parent component ---> child component
 * 02 - useContext - 
 * 
 * 03 - useState - manage states of a component
 * 
 * 04 - useEffect - manage component life cycle. (API calls, eventListners)
 */

// const userContext = createContext(); //create a context  //child ekkin parent ekkt data transfer krnne CONTEXT ekkin

// function App(){
//     const [user, setUser] = useState("Jone"); //create a state

//     useEffect(() => {
//         console.log('User changed:', user);  
//     }, [user]);

//     return (
    //         //context provider 
    //         <userContext.Provider>
    //             <childComponent/>
    //         </userContext.Provider>
//     )
// }

// function childComponent(){
//     //Use the context
//     const user = useContext(userContext);
//     return <h1>Hello {user}</h1>
// }


import React, {createContext, useContext, useState, useEffect, Children} from "react";

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if(!context){
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}

export const ThemeProvider = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        //check localStorage for saved theme reference
        const savedTheme = localStorage.getItem('vibefinder-theme');
        return savedTheme ? JSON.parse(savedTheme) : false;
    });

    useEffect(() => {
        //apply theme to document root
        document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
        //save theme preference to localStorage
        localStorage.setItem('vibefinder-theme', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(prev => !prev);
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};