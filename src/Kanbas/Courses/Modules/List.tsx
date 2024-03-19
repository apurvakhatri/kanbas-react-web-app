import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./index.css"; // Import the CSS file with the styles
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule } from "./modulesReducer";
import { AiOutlinePlus, AiFillCheckCircle } from "react-icons/ai";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import { LuGripVertical } from 'react-icons/lu'

import { modules } from "../../Database";
import ModuleButtons from "./ModuleButtons";

import { KanbasState } from "../../store";

function List() {
  const { courseId } = useParams();
  const List = useSelector((state: KanbasState) => state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <div>
      <ul className="list-group wd-modules-list">
        <li className="list-group-item mb-4">
          <input
            value={module.name}
            onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
          />
          <br />
          <textarea
            value={module.description}
            onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))} />
          <br />
          <button className="btn btn-success" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add Module</button>
          <button className="btn btn-primary ms-2" onClick={() => dispatch(updateModule(module))}> Update Module</button>
        </li>
        {
          List
            .filter((module) => module.course === courseId)
            .map((module, index) => (
              <li key={index} className="list-group-item wd-module-item mb-4">
                <div className="wd-module-item-action-buttons float-end">
                  <button className="btn btn-success" onClick={() => dispatch(setModule(module))}>Edit</button>
                  <button className="btn btn-primary ms-2" onClick={() => dispatch(deleteModule(module._id))}> Delete </button>
                </div>
                <h5>{module.name}</h5>
                <p>{module.description}</p>

                <div className="module-content">
                  <div className="icons">
                    <AiFillCheckCircle color="green" />
                    <HiOutlineEllipsisVertical className="ellipsis-icon" />
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
