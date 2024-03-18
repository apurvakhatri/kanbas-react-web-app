import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { modules } from "../../Database";
import './index.css';
import ModuleButtons from "./ModuleButtons";
import { AiOutlinePlus, AiFillCheckCircle } from "react-icons/ai";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule } from "./modulesReducer";
import { KanbasState } from "../../store";

function List() {
  const { courseId } = useParams();
  const List = useSelector(
    (state: KanbasState) =>
    state.modulesReducer.modules
  );
  const module = useSelector(
    (state: KanbasState) =>
    state.modulesReducer.module
  );
  const dispatch = useDispatch();
  const modulesData = modules;
  return (
  <div>
    <ModuleButtons/>
    <br/><br/>
    <ul className="list-group wd-modules-list">
      <li className="list-group-item">
        <button onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
        <button onClick={() => dispatch(updateModule(module))}> Update </button>
        <input
          value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }/>
        <textarea
          value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
}/>
      </li>
      {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item wd-module-item mb-4">
            <button onClick={() => dispatch(setModule(module))}>Edit</button>
             <button onClick={() => dispatch(deleteModule(module._id))}> Delete </button>
             <div className="module-content">
              <div>
                <h5>{module.name}</h5>
                <p>{module.description}</p>
              </div>
              <div className="icons">
                <AiFillCheckCircle color="green" />
                <HiOutlineEllipsisVertical className="ellipsis-icon"/>
              </div>
            </div>
           </li>
      ))
    }
    </ul>
  </div>
  );
}
export default List;