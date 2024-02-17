import {Link} from "react-router-dom";
import Nav from "../Nav";
import KanbasNavigation from "./Navigation";
import "./styles.css";

function Kanbas() {
  return (
    <div className="d-flex">
      <div className="wd-kanbas-navigation">
              <KanbasNavigation />
      </div>
      {/*
      <div>
        <h1>Kanbas Navigation</h1>
      </div>
      <div style={{ flexGrow: 1 }}>
        <h1>Account</h1>
        <h1>Dashboard</h1>
        <h1>Courses</h1>
      </div> */}
</div>
);}
export default Kanbas;