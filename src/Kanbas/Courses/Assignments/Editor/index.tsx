import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import {assignments} from "../../../Database";

function Editor() {
  const { assignmentId } = useParams();
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId
  );

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="mt-2">
      <h6>Assignment Name</h6>
      <input value={assignment.title} className="form-control mb-2" />
      <hr />
      <div className="float-end me-3">
      <Link
        to={`/Kanbas/Courses/${courseId}/Assignments`}
        className="btn btn-light me-2"
      >
        Cancel
      </Link>
      <button onClick={handleSave} className="btn btn-danger me-2">
        Save
      </button>
      </div>
    </div>
  );
}

export default Editor;