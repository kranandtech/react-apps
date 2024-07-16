import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

const MyTest = () => {
  const refElem = useRef("");
  const navigate = useNavigate();
  const handleClick = ()=>{
    const elem = refElem;
    let h2 = elem.current;
    h2.innerText = "Jayho";
    h2.style.color = "red";
  }
  return (
    <div>
        <h2 ref={refElem} onClick={handleClick}>Hello</h2>
        <button onClick={()=>{
            navigate("/todo");
        }} >Go to Todo</button>
    </div>
  )
}

export default MyTest