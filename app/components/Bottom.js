import { faRemove } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Bottom = (props) => {
  return (
    <div className="w-[90vw] my-3 mx-auto flex justify-between select-none">
      <div className="flex gap-6">
        <div className="flex items-center gap-3">
          <div className = "w-3 h-3 rounded-[50%] bg-completed"></div>
          <p className="text-completed uppercase font-bold text-sm">Completed</p>
        </div>
        <div className="flex items-center gap-3">
          <div className = "w-3 h-3 rounded-[50%] bg-due"></div>
          <p className="text-due uppercase font-bold text-sm">Due</p>
        </div>
        <div className="flex items-center gap-3">
          <div className = "w-3 h-3 rounded-[50%] bg-missed"></div>
          <p className="text-missed uppercase font-bold text-sm">Missed</p>
        </div>
      </div>
      <div className="flex gap-4">
        <div 
          className="px-4 py-2 border-2 border-gray-200 text-gray-200 hover:bg-gray-200 hover:text-main rounded-md uppercase font-bold text-sm cursor-pointer select-none duration-200"
          onClick={()=>props.removeTask(0)}
        >
          <FontAwesomeIcon icon={faRemove}/>
          <span className="pl-2">Remove All</span>
        </div>
        <div 
          className="px-4 py-2 border-2 border-completed text-completed hover:bg-completed hover:text-white rounded-md uppercase font-bold text-sm cursor-pointer select-none duration-200"
          onClick={()=>props.removeTask(1)}
        >
          <FontAwesomeIcon icon={faRemove}/>
          <span className="pl-2">Remove Completed</span>
        </div>
        <div 
          className="px-4 py-2 border-2 border-missed text-missed hover:bg-missed hover:text-white rounded-md uppercase font-bold text-sm cursor-pointer select-none duration-200"
          onClick={()=>props.removeTask(2)}
        >
          <FontAwesomeIcon icon={faRemove}/>
          <span className="pl-2">Remove Missed</span>
        </div>
      </div>
    </div>
  )
}

export default Bottom;