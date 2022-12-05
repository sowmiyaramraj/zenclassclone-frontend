import React from "react";
import "./sidenavmenubar.css";
import {NavLink} from "react-router-dom";
function Sidenavmenubar(){
    return(
       
         <div className="side_nav">      
              <nav>
                <ul>
                        <NavLink to="/class" >
                                <li>
                                    <div className="menu_text">
                                        Class
                                    </div>
                                </li>
                        </NavLink>
                        <NavLink to="/dashboard" >
                                <li>
                                    <div className="menu_text">
                                        Dashboard
                                    </div>
                                </li>
                        </NavLink>
                        <NavLink to="/task" >
                                <li>
                                    <div className="menu_text">
                                        Task
                                    </div>
                                </li>
                        </NavLink>
                        <NavLink to="/webcode" >
                                <li>
                                    <div className="menu_text">
                                        Webcode
                                    </div>
                                </li>
                        </NavLink>
                        <NavLink to="/capestone" >
                                <li>
                                    <div className="menu_text">
                                        Capestone
                                    </div>
                                </li>
                        </NavLink>
                        <NavLink to="/query" >
                                <li>
                                    <div className="menu_text">
                                        Query
                                    </div>
                                </li>
                        </NavLink>
                        <NavLink to="/application" >
                                <li>
                                    <div className="menu_text">
                                        Application
                                    </div>
                                </li>
                        </NavLink>
                        <NavLink to="/interviewtask" >
                                <li>
                                    <div className="menu_text">
                                        Interviewtask
                                    </div>
                                </li>
                        </NavLink>
                        <NavLink to="/requirement" >
                                <li>
                                    <div className="menu_text">
                                        Requirement
                                    </div>
                                </li>
                        </NavLink>
                        <NavLink to="/leaveapplication" >
                                <li>
                                    <div className="menu_text">
                                        Leave Application
                                    </div>
                                </li>
                        </NavLink>
                        <NavLink to="/mockinterview" >
                                <li>
                                    <div className="menu_text">
                                        Mock Interview
                                    </div>
                                </li>
                        </NavLink>
                        <NavLink to="/certificate" >
                                <li>
                                    <div className="menu_text">
                                        Certificate
                                    </div>
                                </li>
                        </NavLink>
                        <NavLink to="/testimonial" >
                                <li>
                                    <div className="menu_text">
                                        Testimonial
                                    </div>
                                </li>
                        </NavLink>
                        <NavLink to="/leadership" >
                                <li>
                                    <div className="menu_text">
                                        Leadership
                                    </div>
                                </li>
                        </NavLink>
                        <NavLink to="/syllabus" >
                                <li>
                                    <div className="menu_text">
                                        Syllabus
                                    </div>
                                </li>
                        </NavLink>
                </ul>
            </nav>
          
        </div>
      
    );
}

export default Sidenavmenubar;