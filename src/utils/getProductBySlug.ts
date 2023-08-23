import { db } from "@/firebase/firebase";
import { Products } from "@/interfaces/products";
import { getDocs, collection } from "firebase/firestore";


const getProductBySlug = async () => {
    const data:string[] = []
    const querySnapshot = await getDocs(collection(db, "productos"));
    querySnapshot.forEach((doc) => {
        // doc.data() es del tipo DocumentData, por lo que necesitas convertirlo a Products
        const productData = doc.data() as Products;
        const product = productData.slug
        data.push(product);
        
    });
    return data
}

export default getProductBySlug