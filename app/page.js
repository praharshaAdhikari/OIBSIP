"use client";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.js";
import List from "./components/List.js";
import Bottom from "./components/Bottom.js";
import AddMenu from "./components/AddMenu.js";

const Home = () => {
  const [storedTasks, setStoredTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const handlePageChange = (i)=> {
    if(currentPage!==i) setCurrentPage(i);
  };

  const [addMenu, showAddMenu] = useState(false);
  const handleAddDisplay = value=> showAddMenu(value);

  const customDate = (item) => {
    let currentDate = new Date();
    if (item.getFullYear() === currentDate.getFullYear() && item.getMonth() == currentDate.getMonth()) {
      if (item.getDate() - currentDate.getDate() === 1) return "Tomorrow";
      else if (item.getDate() - currentDate.getDate() === -1) return "Yesterday";
      else if (item.getDate() === currentDate.getDate()) return "Today";
    };
    let temp = item.toDateString().split(' ');
    temp.shift();
    if (temp[1].startsWith('0') || temp[1].startsWith('2') || temp[1].startsWith('3')) {
      if (temp[1].startsWith('0')) temp[1] = temp[1].substring(1);
      if (temp[1].endsWith('1')) temp[1] += 'st';
      else if (temp[1].endsWith('2')) temp[1] += 'nd';
      else if (temp[1].endsWith('3')) temp[1] += 'rd';
      else temp[1] += 'th';
    }
    else temp[1] += 'th';
    return temp.toString().replaceAll(',', ' ');
  };
  const setStatus = (date) => new Date() < new Date(date) ? 1 : 2;

  useEffect(()=> {
    let temp = localStorage.getItem("tasks");
    if (temp) setStoredTasks(JSON.parse(temp));
  }, []);

  const handleStoredTasks = (taskInput)=> {
    taskInput = {...taskInput, status: setStatus(taskInput.dueDate+"T23:59:59"), dueDate: customDate(new Date(taskInput.dueDate+"T23:59:59"))};
    let newTasks = [...storedTasks, taskInput];
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setStoredTasks(newTasks);
  };

  const handleRemoveTask = (i)=> {
    let temp;
    switch (i) {
      case 0:
        localStorage.removeItem("tasks");
        setStoredTasks([]);
        break;
      case 1:
        temp = storedTasks.filter(item => item.status !== 0);
        setStoredTasks(temp);
        localStorage.setItem("tasks", JSON.stringify(temp));
        break;
      case 2:
        temp = storedTasks.filter(item => item.status !== 2);
        setStoredTasks(temp);
        localStorage.setItem("tasks", JSON.stringify(temp));
        break;
    };
  };

  const handleStatusChange = (index, status)=> {
    let temp = storedTasks.slice();
    if (status === 0) temp[index].status = 0;
    else if (status === 1) temp.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(temp));
    setStoredTasks(temp);
  };

  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
      <List currentPage={currentPage} handleAddDisplay={handleAddDisplay} tasksList={storedTasks} handleStatusChange={handleStatusChange}/>
      <Bottom removeTask={handleRemoveTask}/>
      <AddMenu addMenu={addMenu} handleAddDisplay={handleAddDisplay} handleTasksList={handleStoredTasks}/>
    </div>
  );
}

export default Home;