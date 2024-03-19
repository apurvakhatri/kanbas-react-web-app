import React from "react";
import { Link, useParams } from "react-router-dom";
// import { assignments } from "../../Database";
import { AiOutlinePlus, AiFillCheckCircle } from "react-icons/ai";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import { TfiPencilAlt } from 'react-icons/tfi';
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  updateAssignment,
  deleteAssignment,
  selectAssignment,
} from "./assignmentsReducer";
import "./index.css";
import { KanbasState } from "../../store";

function Assignments() {
  const { courseId } = useParams();
  // const assignments = useSelector(
  //   (state) => state.assignmentsReducer.assignments
  // );

  const assignments = useSelector(
    (state: KanbasState) =>
    state.assignmentsReducer.assignments
  );

  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  const dispatch = useDispatch();

  return (
    <div className="me-5">
      <div className="wd-assignments-header mt-2">
        <input
          className="form-control w-25 float-start"
          type="text"
          placeholder="Search for Assignment"
        />
        <div className="buttons float-end">
          <button className="btn wd-bg-lightgray">
            <AiOutlinePlus />
            Group
          </button>
          <Link to={`/Kanbas/Courses/${courseId}/Assignments/addAssignment`}>
            <button className="btn btn-danger">
              <AiOutlinePlus />
              Assignment
            </button>
          </Link>
          <button className="btn wd-bg-lightgray">
            <HiOutlineEllipsisVertical />
          </button>
        </div>
      </div>
      <br />
      <br />
      <hr />
      <div className="list-group">
        <div className="list-group-item wd-assignment-type">
          <HiOutlineEllipsisVertical />
          ASSIGNMENTS
          <div className="wd-assignment-type-right-text float-end">
            <span className="wd-assignment-type-weightage me-2">
              40% of Total
            </span>
            <AiOutlinePlus />
            <HiOutlineEllipsisVertical />
          </div>
        </div>
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item wd-assignment-detail"
          >
            <HiOutlineEllipsisVertical />
            <TfiPencilAlt color="green" />
            <span className="wd-assignment-title ms-2">{assignment.title}</span>
            <span className="wd-check-ellipse-button-float-end float-end">
              <AiFillCheckCircle color="green" />
              <HiOutlineEllipsisVertical />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Assignments;
