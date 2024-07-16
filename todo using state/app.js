import ReactDOM from 'react-dom/client';
import TodoForm from './TodoForm';
import TodoForm from './TodoForm';
import MyTest from './MyTest';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

const parent = document.getElementById('root');

const root = ReactDOM.createRoot(parent);


const App = ()=>{
    const router = createBrowserRouter([
        {
         path:"/",
         element:<MyTest/>   
        },
        {
            path:"/todo",
            element:<TodoForm/>   
           }
    ])
   
    return(
        <RouterProvider router={router}/>
       
    )
}


root.render(<App/>);

export default App;

