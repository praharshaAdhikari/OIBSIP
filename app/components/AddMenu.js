"useClient";
import { faAdd, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const AddMenu = (props) => {
  const [taskInput, setTaskInput] = useState({
    task: "",
    dueDate: new Date().toISOString().substring(0, 10)
  });

  const handleInputChange = (e)=> {
    setTaskInput({
      ...taskInput,
      [e.target.name] : e.target.value,
    })
  };
  const handleAddItem = ()=> {
    if (taskInput.task === "") return;
    props.handleTasksList(taskInput);
    props.handleAddDisplay(false);
    setTaskInput({
      task: "",
      dueDate: new Date().toISOString().substring(0, 10)
    });
  };
  return (
    <div className={`absolute flex justify-center items-center top-0 w-full h-full backdrop-brightness-50 duration-200 ${props.addMenu ? `` : `hidden`}`}>
      <div className="relative bg-main w-[40vw] h-[40vh] rounded-md drop-shadow-none flex flex-col justify-between">
        <div className="px-4 py-2 border-y-2 border-theme text-theme hover:bg-theme hover:text-white rounded-ss-md rounded-se-md uppercase font-bold text-sm cursor-pointer select-none duration-200"
        onClick={handleAddItem}>
          <FontAwesomeIcon icon={faAdd}/>
          <span className="pl-2">Add Task</span>
        </div>
        <form className="flex flex-col gap-4 px-4">
          <div>
            <p className="uppercase text-xs font-bold pb-1">Task</p>
            <input
              type="text"
              name="task"
              placeholder="Enter Task" 
              className="w-full bg-main border-slate-500 border-2 py-2 px-2 rounded-md text-white outline-none placeholder:text-gray-200 focus:border-white duration-200"
              value={taskInput.task}
              onChange={(e)=>handleInputChange(e)}
            />
          </div>
          <div>
            <p className="uppercase text-xs font-bold pb-1">Due Date</p>
            <input
              type="date"
              name="dueDate"
              className="w-full bg-main border-slate-500 border-2 py-2 px-2 rounded-md text-white outline-none focus:border-white duration-200"
              min={new Date().toISOString().substring(0, 10)}
              value={taskInput.dueDate}
              onChange={(e)=>handleInputChange(e)}
            />
          </div>
        </form>
        <div className="px-4 py-2 border-y-2 border-missed text-missed hover:bg-missed hover:text-white rounded-es-md rounded-ee-md uppercase font-bold text-sm cursor-pointer select-none duration-200" onClick={()=>props.handleAddDisplay(false)}>
          <FontAwesomeIcon icon={faClose}/>
          <span className="pl-2">Cancel</span>
        </div>
      </div>
    </div>
  )
}

export default AddMenu;