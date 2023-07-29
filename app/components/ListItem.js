"use-client";
import { faTrashCan, faCheck} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const ListItem = (props) => {
  const [hover, setHover] = useState(false);
  const bgColor = props.status===0 ? "bg-completed" : props.status===1 ? "bg-due" : props.status===2 ? "bg-missed" : "";
  const textColor = props.status===0 ? "text-completed" : props.status===1 ? "text-due" : props.status===2 ? "text-missed" : "";
  return (
    <div className="px-6 py-3 flex justify-between items-center first:mt-3 last:mb-3 select-none hover:bg-theme hover:bg-opacity-50" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
      <div className="flex justify-between gap-3 items-center">
        <div className = {`w-3 h-3 rounded-[50%] ${bgColor}`}></div>
        <p>{props.task}</p>
      </div>
      <div className="flex items-center gap-3">
        <div 
          className={`w-8 h-8 flex items-center justify-center border-completed text-completed bg-zinc-700 hover:bg-completed hover:text-white rounded cursor-pointer select-none duration-200 ${hover ? `opacity-100` : `opacity-0`} ${props.status==1 ? `` : `hidden`}`}
          onClick={()=>props.handleStatusChange(props.index, 0)}
        > 
          <FontAwesomeIcon icon={faCheck}/> 
        </div>
        <div 
          className={`w-8 h-8 flex items-center justify-center border-missed text-missed hover:bg-missed bg-zinc-700 hover:text-white rounded cursor-pointer select-none duration-200 ${hover ? `opacity-100` : `opacity-0`} mr-5`}
          onClick={()=>props.handleStatusChange(props.index, 1)}
        > 
          <FontAwesomeIcon icon={faTrashCan}/> 
        </div>
        <p className={`${textColor}`}>{props.dueDate}</p>
      </div>
    </div>
  )
}

export default ListItem;