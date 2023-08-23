import { NavState } from "./NavProvider"


type NavActionType = 
| {type: "UI - Open Sidebar" }
| {type: "UI - Close Sidebar"}


// Recibe un estado/accion y produce un nuevo estado
export const navReducer = (state: NavState, action:NavActionType): NavState => {
    switch (action.type) {
        case "UI - Open Sidebar":
            return {
                ...state,
                sideMenuOpen:true
            }
            case "UI - Close Sidebar":
            return {
                ...state,
                sideMenuOpen:false
            }
        default:
            return state;
    }
}