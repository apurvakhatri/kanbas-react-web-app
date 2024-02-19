import React from "react";
import { useParams } from "react-router-dom";
import { modules } from "../../Database";
import './index.css';

function List() {
  const { courseId } = useParams();
  return (
    <ul className="list-group wd-modules-list">
      {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item wd-module-item mb-4">
             <h5>{module.name}</h5>
             <p>{module.description}</p>

           </li>
      ))
    }
    </ul>
  );
}
export default List
