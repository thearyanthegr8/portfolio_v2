import React from 'react';

const ThemeContext = React.createContext(localStorage.getItem('theme') || 'light');

const ThemeProvider = ({children}) => {
    const [ theme, setTheme ] = React.useState(localStorage.getItem('theme') || 'light');
    
    const toggleFunction = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleFunction }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider };