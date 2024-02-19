import {assignments} from "../../Database";
import {enrollments} from "../../Database";
import {users} from "../../Database";
import {grades} from "../../Database";

import { useParams } from "react-router-dom";
import "./index.css";
import { FaGear } from 'react-icons/fa6'

function Grades() {
  const { courseId } = useParams();
  const assignmentsdata = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  const enrollmentsdata = enrollments.filter(
    (enrollment) => enrollment.course === courseId
  );
  return (
    <div className="mt-2 me-3">
      <div className="wd-grades-header">
        <div className="row float-end">
          <button className="col btn btn-light me-2">Import</button>
          <button className="col btn btn-light me-2">Export</button>
          <button className="col btn btn-light me-2">
            <FaGear />
          </button>
        </div>
      </div>

      <div className="wd-grades-searchbar">
        <form>
          <div className="form-group row">
            <div className="col">
              <label className="col-form-label col" htmlFor="student-search">
                Student Names
              </label>
            </div>
            <div className="col">
              <label className="col-form-label col-6" htmlFor="assignment-search">
                Assignment Names
              </label>
            </div>
          </div>

          <div className="form-group row">
            <div className="col">
              <input
                className="form-control"
                type="text"
                id="student-search"
                placeholder="Search Students"
              />
            </div>
            <div className="col">
              <input
                className="form-control"
                type="text"
                id="assignment-search"
                placeholder="Search Assignments"
              />
            </div>
          </div>
        </form>
      </div>

      <div className="table-responsive mt-3">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
            <th>Student Name</th>
            {assignmentsdata.map((assignment) => (
              <th>{assignment.title}</th>
            ))}
            </tr>
          </thead>

          <tbody>
            {enrollmentsdata.map((enrollment) => {
              const user = users.find(
                (user) => user._id === enrollment.user
              );
              return (
                <tr>
                  <td id="wd-student-name">
                    {user!.firstName} {user!.lastName}
                  </td>
                  {assignmentsdata.map((assignment) => {
                    const grade = grades.find(
                      (grade) =>
                        grade.student === enrollment.user &&
                        grade.assignment === assignment._id
                    );
                    return <td>{grade?.grade || ""}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Grades;