import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { modules } from "../../Database";
import './index.css';
import ModuleButtons from "./ModuleButtons";
import { AiOutlinePlus, AiFillCheckCircle } from "react-icons/ai";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";

function List() {
  const { courseId } = useParams();

  const [moduleList, setModuleList] = useState(modules);

  const [module, setModule] = useState({
    name: "New Module",
    description: "New Description",
    course: courseId,
  });

  const addModule = (module: any) => {
    const newModule = { ...module,
      _id: new Date().getTime().toString() };
      const newModuleList = [newModule, ...moduleList];
      setModuleList(newModuleList);
    };

  const modulesData = modules;
  return (
  <div>
    <ModuleButtons/>
    <br/><br/>
    <ul className="list-group wd-modules-list">
      <li className="list-group-item">
        <button onClick={() => { addModule(module) }}>Add</button>
        <input value={module.name} onChange={
          (e) => setModule({...module, name: e.target.value })
        }/>
        <textarea value={module.description}
          onChange={(e) => setModule({
          ...module, description: e.target.value })}
        />
      </li>
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
