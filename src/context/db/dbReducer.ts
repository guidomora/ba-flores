import { Products } from "@/interfaces/products";
import { DbState } from "./DbProvider";


type DbActionType = 
| {type: "[Products] get products", payload:Products[] }

// Recibe un estado/accion y produce un nuevo estado
export const dbReducer = (state: DbState, action:DbActionType): DbState => {
    switch (action.type) {
        case "[Products] get products":
            return {
                ...state,
                products: action.payload
                
            }
    
        default:
            return state;
    }
}