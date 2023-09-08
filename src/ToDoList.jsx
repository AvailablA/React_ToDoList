import React from "react";

const ToDoList = (props)=>{

    
    return(
    <>
        <div className="todo_style">
            <i class="fa fa-times-circle" 
                aria-hidden="true" 
                onClick= {() =>{
                    props.onSelect(props.id)
                }} 
            />
            <h4>{props.text}</h4>
        </div>
    </>);
}

export default ToDoList;