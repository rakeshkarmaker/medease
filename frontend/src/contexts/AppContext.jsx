// **React Context:**
// A built-in state-sharing system that lets you pass data (state/functions) across many components without manually sending props at every level.

// **AppContext:**
// A global container created with `createContext()` that holds shared data like doctors, user info, theme, etc.

// **AppContextProvider:**
// A wrapper component that supplies this shared data to the entire app so any child component can access it using `useContext(AppContext)`.


import { createContext} from "react";
//Error if I put this in AppContext.jsx, because of circular dependency, so I have to put it here in context.jsx
//Error: Fast refresh only works when a file only exports components. Move your React context(s) to a separate file.
// So, we will create a new context called AppContext, and a provider component called AppProvider that will wrap our application and provide the context value to all components that need it. 
export const AppContext = createContext()
