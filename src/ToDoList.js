import React, { useState } from "react";
function ToDoList() {
       const [tasks, setTasks] = useState(["Eat Breakfast", "Take a Shower", "Walk the dog"])
       const [newtasks, setNewTasks] = useState("")
       const [imptasks, setNewImpTasks] = useState(new Set())
       function inputChange(event) {
              setNewTasks(event.target.value)
       }
       function AddTask() {
              if (newtasks.trim() !== "") {
                     setTasks(t => [...tasks, newtasks])
                     setNewTasks("")
              }
       }
       function DeleteTask(index) {
              const updatedTasks = tasks.filter((_, i) => i !== index)
              setTasks(updatedTasks)
       }
       function MoveTaskUp(index) {
              if (index > 0) {
                     const updatedTasks = [...tasks];
                     [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]
                     setTasks(updatedTasks)
              }
       }
       function MoveTaskDown(index) {
              if (index < tasks.length - 1) {
                     const updatedTasks = [...tasks];
                     [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]
                     setTasks(updatedTasks)
              }

       }
       function MarkTaskImp(index) {
              const updatedSet = new Set(imptasks);
              if (updatedSet.has(index)) {
                     updatedSet.delete(index);
              } else {
                     updatedSet.add(index);
              }
              setNewImpTasks(updatedSet);

       }
       return (
              <div className="todolist">
                     <h1>To-Do List</h1>
                     <div className="todoinput">
                            <input type="text" placeholder="Enter Task" value={newtasks} onChange={inputChange}></input>
                            <button onClick={AddTask} className="addButton">Add</button>
                     </div>
                     <ol>
                            {tasks.map((task, index) =>
                                   <li key={index} style={{
                                          backgroundColor: imptasks.has(index)
                                                 ? "yellow"
                                                 : "transparent",
                                   }}>
                                          <span className="text">{task}</span>
                                          <button className="deleteButton" onClick={() => DeleteTask(index)}>Delete</button>
                                          <button className="moveUp" onClick={() => MoveTaskUp(index)}>⬆️</button>
                                          <button className="moveDown" onClick={() => MoveTaskDown(index)}>⬇️</button>
                                          <button className="markImp" onClick={() => MarkTaskImp(index)}>⭐</button>
                                   </li>
                            )}
                     </ol>
              </div>
       );
}
export default ToDoList