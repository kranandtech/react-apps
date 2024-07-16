import { useContext } from "react";
import AppContext from "./AppContext";

const TodoList = (props)=>{
    // const {todo,removeTodo} = props;
    const {todo} = useContext(AppContext);
    
    return(
        <div>
           {todo.map((elem)=>{
            return(
                <>
                <p key={elem}>{elem}</p>
                <button onClick={()=>{
                    removeTodo(elem);
                }}>Delete</button>
                </>   
            ) 
           })}
        </div>
    );
}

export default TodoList;