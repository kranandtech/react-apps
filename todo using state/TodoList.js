const TodoList = (props)=>{
    const {todo,removeTodo} = props;
    
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