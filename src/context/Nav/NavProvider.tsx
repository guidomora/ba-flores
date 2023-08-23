import { PropsWithChildren, useReducer } from "react";
import {NavContext} from "./NavContext"
import { navReducer } from "./navReducer";


// No es lo mismo que en el UIContext, esta va a ser la interfaz del estado
export interface NavState {
    sideMenuOpen: boolean;
    children?:JSX.Element;
}

const NAV_INITIAL_STATE: NavState = {
    sideMenuOpen: false,
}


// Creamos el provider
const NavProvider = ({children}:PropsWithChildren) => {
  
    // Como va a menejar el estado el provider
  const [state, dispatch] = useReducer(navReducer, NAV_INITIAL_STATE)


  const openSideMenu = () => {
    dispatch({type:"UI - Open Sidebar"})
  }

  const closeSideMenu = () => {
    dispatch({type: "UI - Close Sidebar"})
  }


    return (
    <NavContext.Provider value={{
        ...state,

        openSideMenu,
        closeSideMenu,
    }}>
        {children}
    </NavContext.Provider>
  )
}

export default NavProvider