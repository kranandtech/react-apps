import ReactDOM from 'react-dom/client';
import Product from './Product';
import AppContext from "./AppContext";

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Product from './Product';
import { useEffect, useState } from 'react';

const parent = document.getElementById('root');

const root = ReactDOM.createRoot(parent);


const App = ()=>{
    const [products, setProducts] = useState([]);
    async function getData(){
        const prData = await fetch("https://fakestoreapi.com/products");
         data =  await prData.json();;
         setProducts(data);
        
    }
    useEffect(()=>{
         getData();
        
    },[])
    const router = createBrowserRouter([
        {
         path:"/",
         element:<Product/>  
        },
        
    ])
   const myData ={
    products
   }
    return(
        <AppContext.Provider value={myData}>
            <RouterProvider router={router}/>
        </AppContext.Provider>
        
       
    )
}


root.render(<App/>);

export default App;

