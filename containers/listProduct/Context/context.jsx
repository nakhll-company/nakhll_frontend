import { createContext } from "react";

const ContextListProductPage = createContext({
    listProducts:[],
    sortPorductDes:()=>{},
    sortPorductAsc:()=>{},
    sortBestsellingProduct:()=>{}
});



export default ContextListProductPage;
