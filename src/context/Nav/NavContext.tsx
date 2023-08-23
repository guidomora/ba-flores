// Solo la creacion del context

import { createContext } from 'react';


export interface ContextProps {
     sideMenuOpen:boolean;


    //  Como esta funcion no regresa nada va que es una funcion y void
     openSideMenu: () => void;
     closeSideMenu: () => void;
}

export const NavContext = createContext({

} as ContextProps);