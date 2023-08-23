import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
   const[edit,setEdit] = useState(false)
  const [editIndex, setEditIndex] = useState(-1);

  const handleadd = () => {
    if (editIndex !== -1) {
      const updatedList = [...todoList];
      updatedList[editIndex] = todo;
      setTodoList(updatedList);
     setEditIndex(-1)
      setTodo("");
      setEdit(false)
    } else {
      setTodoList((prev) => {
        const update = [...prev, todo];
        setTodo("");
        return update;
      });
    
    }
  };

  const handleremove = (i) => {
    const updateList = todoList.filter((item, id) => {
      return i !== id;
    });
    setTodoList(updateList);
  };

  const handleremoveall = (i) => {
    setTodoList([]);
  };

  const handleedit = (i) => {
    setTodo(todoList[i]);
    setEditIndex(i)
    setEdit(true)
  };

  return (
    <>
      <input
        type="text"
        required
        placeholder="Enter a todo ...."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      
    {edit ?  <button onClick={handleadd}>Update</button>: todo.length>0? <button onClick={handleadd}>Add</button>:<button disabled onClick={handleadd}>Add</button>}
      

      {todoList.length > 0 &&
        todoList.map((item, i) => {
          return (
            <div key={i}>
              <h1>{item}</h1>
              <button onClick={() => handleremove(i)}>Delete</button>
              <button onClick={() => handleedit(i)}>Edit</button>
            </div>
          );
        })}

      <button onClick={handleremoveall}>RemoveAll</button>
    </>
  );
};

export default Todo;
