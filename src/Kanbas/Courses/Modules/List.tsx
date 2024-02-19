import React from "react";
import { useParams } from "react-router-dom";
import { modules } from "../../Database";
import './index.css';
import ModuleButtons from "./ModuleButtons";
import { AiOutlinePlus, AiFillCheckCircle } from "react-icons/ai";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";

function List() {
  const { courseId } = useParams();
  const modulesData = modules;
  return (
  <div>
    <ModuleButtons/>
    <br/><br/>
    <ul className="list-group wd-modules-list">
      {
       modulesData
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item wd-module-item mb-4">
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
export default List
