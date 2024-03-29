import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'
import { createContext } from 'react'
import { useState } from 'react'
import schema from './componentes/schema'

export const server = "https://adhikar-backend.onrender.com/api/v1";

export const Context = createContext({ isAuthenticated: false });

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [schemeData , setSchemeData] = useState({...schema});

  return (
    <Context.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        loading,
        setLoading,
        user,
        setUser,
        schemeData,
        setSchemeData,
      }}
    >
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Context.Provider>
  );
};

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
      <AppWrapper />
  </React.StrictMode>,
)
