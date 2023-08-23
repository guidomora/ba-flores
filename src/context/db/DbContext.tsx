import { Products } from "@/interfaces/products";
import { createContext } from "react";


export interface ProductProps {
    products :Products[]

    getData: () => Promise<void>;
}

 const DbContext = createContext ({

} as  ProductProps)

export default DbContext