import React from 'react';
import { useState } from 'react';
import './index.css';
import ToDoList from './ToDoList';



const App= ()=>{

  const[inputList,setInputList] = useState("");

  const[Items,setItems]= useState([])

  const itemEvent = (event)=>{
      setInputList(event.target.value);
  };

  const deleteItems = (id)=>{
    console.log("deleted");

    setItems((oldItems) => {
      return oldItems.filter((ele,index)=>{
        return index !== id;
      });
    });
  };
  
  const listOfItems = ()=>{
    setItems((oldItems) => {
      if (inputList !== "" && inputList !== " " && inputList.length > 0) {
        return [...oldItems, inputList];
                //call,return
      }
      return oldItems;
    });
    setInputList("");
  };
  
  return(<>

    <div className='main_div'>
      <div className='center_div'>
        <br/>
        <h1> ToDo List</h1>
        <br/>
        <input type="text" 
              placeholder="Add favourite List" 
              value={inputList} 
              onChange={itemEvent}
       />

        <button onClick={listOfItems}> + </button>
        <ol>
          {/* <li>{inputList}</li> */}
          {Items.map((intial_item,index)=>{
            return <ToDoList key={index}
                            id={index}
                            text={intial_item}
                    onSelect={deleteItems}        />
          })}
        </ol>
      </div>
    </div>
  </>)
}

export default App;
