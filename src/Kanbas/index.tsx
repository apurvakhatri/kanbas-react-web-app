import { Routes, Route, Navigate, Link } from "react-router-dom";
import Nav from "../Nav";
import KanbasNavigation from "./Navigation";
import "./styles.css";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { useState } from "react";
import { courses as db} from "./Database";

import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
  const [courses, setCourses] = useState(db);

  const [course, setCourse] = useState({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/${course.image}"
   });


  const addNewCourse = () => {
    const newCourse = { ...course,
      _id: new Date().getTime().toString() };
      setCourses([...courses, { ...course, ...newCourse }]);
    };

  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else{
          return c;
        }
      })
    );
  };


  return (
    <Provider store={store}>
      <div className="d-flex">
        <div className="wd-kanbas-navigation">
                <KanbasNavigation />
        </div>
        <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route path="Dashboard" element={
                    <Dashboard
                      courses={courses}
                      course={course}
                      setCourse={setCourse}
                      addNewCourse={addNewCourse}
                      deleteCourse={deleteCourse}
                      updateCourse={updateCourse}/>
            } />
            <Route path="Courses" element={<Dashboard
                      courses={courses}
                      course={course}
                      setCourse={setCourse}
                      addNewCourse={addNewCourse}
                      deleteCourse={deleteCourse}
                      updateCourse={updateCourse} />} />
            <Route path="Courses/:courseId/*" element={<Courses courses={courses} />}  />
        </Routes>
    </div>
</Provider>
);}
export default Kanbas;