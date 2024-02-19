import { Routes, Route, Navigate, Link } from "react-router-dom";
import Nav from "../Nav";
import KanbasNavigation from "./Navigation";
import "./styles.css";
import Dashboard from "./Dashboard";
import Courses from "./Courses";

function Kanbas() {
  return (
    <div className="d-flex">
      <div className="wd-kanbas-navigation">
              <KanbasNavigation />
      </div>
      <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
      </Routes>
</div>
);}
export default Kanbas;