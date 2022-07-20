import React from "react";
import Task from "./Task";
function TaskList({selectedCategory,TASKS}) {

const selectedCategoryTasks = TASKS.filter(task=>{
 if(selectedCategory === 'All') return true;
 return task.category === selectedCategory;
});

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {selectedCategoryTasks.map((task,index)=>{
        return <Task key={index} task={task}/>})}
    </div>
  );
}

export default TaskList;
