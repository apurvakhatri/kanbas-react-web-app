import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt,
        FaInbox, FaRegClock, FaLaptop, FaRegQuestionCircle } from "react-icons/fa";


function KanbasNavigation() {
  const links = [
    { label: "Account",   icon: <FaRegUserCircle className="wd-icon" />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="wd-icon" />  },
    { label: "Courses",   icon: <FaBook className="wd-icon" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="wd-icon" /> },
    { label: "Inbox",  icon: <FaInbox className="wd-icon" /> },
    { label: "History",  icon: <FaRegClock className="wd-icon" /> },
    { label: "Studio",  icon: <FaLaptop className="wd-icon" /> },
    { label: "Help",  icon: <FaRegQuestionCircle className="wd-icon" /> },
  ];
  const { pathname } = useLocation();
  return (
    <div className="list-group wd-kanbas-navigation-list">
        <a className={`kanbas-no-underline kanbas-sidebar-unselected kanbas-icon-padding`}>
            <img style={{ width: "75%" }} src="/images/neu_icon.png" />
        </a>
      {links.map((link, index) => (
        <li key={index} className={`mb-3 list-group-item ${pathname.includes(link.label) && "active"}`}>
          <Link to={`/Kanbas/${link.label}`}>
                {link.icon}
                 <br />
                {link.label}
          </Link>
        </li>
))} </div>
); }
export default KanbasNavigation;