// So, Context API is a way to share data across components without having to pass props down manually at every level. It's like a global state that can be accessed by any component in the component tree.
// Here, we will create a context for our application, which will hold the state and functions that we want to share across components.
// First, we need to import the necessary functions from React.
// We will use createContext to create a new context, and useState to manage our state.
// We will create a new context called AppContext, and a provider component called AppProvider that will wrap our application and provide the context value to all components that need it.
//

import { AppContext } from "./AppContext";
import { doctors } from "../assets/assets";

const AppContextProvider = (props) =>{

    const value = {
        // Here we can add any state or functions that we want to share across componentsS
        doctors: doctors,
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider