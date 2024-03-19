import List from "./List";
import './index.css';
import { HiOutlineEllipsisVertical } from 'react-icons/hi2';
import { AiOutlinePlus } from 'react-icons/ai';
import CourseHeader from "../CourseHeader";

function Modules() {
  return (
    <div className="wd-modules-screen mt-3 me-5">
      <CourseHeader />
      <List />
    </div>
  );
}
export default Modules;