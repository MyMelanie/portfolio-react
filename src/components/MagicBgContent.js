import React, { createContext, useState, useContext } from 'react';

const MagicBackgroundContext = createContext();

export const MagicBackgroundProvider = ({ children }) => {
    const [isMagicBackground, setIsMagicBackground] = useState(false)

    const toggleMagicBackground = () => {
        setIsMagicBackground(!isMagicBackground)
    }

    return (
        <MagicBackgroundContext.Provider
        value={{ isMagicBackground, toggleMagicBackground }}
        >
            {children}
        </MagicBackgroundContext.Provider>
  )
}

export const useMagicBackground = () => {
    return useContext(MagicBackgroundContext);
}
