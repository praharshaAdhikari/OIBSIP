"use client";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ListItem from "./ListItem.js";
import { useEffect, useState } from "react";

const List = (props) => {
  const [listEl, setListEl] = useState();
  const initializeList = () => {
    switch (props.currentPage) {
      case 0:
        return (
          props.tasksList.map((item, index) => {
            return (<ListItem key={index} status={item.status} task={item.task} dueDate={item.dueDate} handleStatusChange={props.handleStatusChange} index={index}/>);
          })
        );
      case 1:
        return (
          props.tasksList.filter(item => item.status === 0).map((item, index) => {
            return (<ListItem key={index} status={item.status} task={item.task} dueDate={item.dueDate} handleStatusChange={props.handleStatusChange} index={index}/>);
          })
        );
      case 2:
        return (
          props.tasksList.filter(item => item.status === 1).map((item, index) => {
            return (<ListItem key={index} status={item.status} task={item.task} dueDate={item.dueDate} handleStatusChange={props.handleStatusChange} index={index}/>);
          }));
      case 3:
        return (
          props.tasksList.filter(item => item.status === 2).map((item, index) => {
            return (<ListItem key={index} status={item.status} task={item.task} dueDate={item.dueDate} handleStatusChange={props.handleStatusChange} index={index}/>);
          }));
      default:
        return;
    };
  };

  useEffect(()=>{
    setListEl(initializeList());
  }, [props.tasksList, props.currentPage]);

  return (
    <div className="w-[90vw] m-auto">
      <div className="flex justify-between items-end select-none">
        <span>
          <label htmlFor="sort" className="font-bold">Sort By | </label>
          <select name="sort" id="sort" className="bg-transparent outline-none">
            <option className="bg-main"> Due Date [ Ascending ] </option>
            <option className="bg-main"> Due Date [ Descending ] </option>
          </select>
        </span>
        <div className="px-4 py-2 border-2 border-theme text-theme hover:bg-theme hover:text-white rounded-md uppercase font-bold text-sm cursor-pointer select-none duration-200" onClick={() => props.handleAddDisplay(true)}>
          <FontAwesomeIcon icon={faAdd} />
          <span className="pl-2">Add Task</span>
        </div>
      </div>
      <div className="h-[63vh] bg-stone-800 rounded-xl my-4 overflow-y-auto scrollbar">
        {listEl}
      </div>
    </div>
  )
}

export default List;