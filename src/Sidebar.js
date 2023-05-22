import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MDBIcon } from "mdb-react-ui-kit";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`sidebar vh-100 ${isOpen ? "open" : ""}`} id="side_nav">
        <div class="header-box px-2 pt-3 pb-4 d-flex justify-content-between">
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            <MDBIcon icon={isOpen ? "times" : "bars"} />
          </button>
        </div>

        <ul class="list-unstyled px-2">
          <li class="active">
            <Link
              to="/dashboard"
              class="text-decoration-none px-3 py-2 d-block"
            >
              <i class="fas fa-home"></i> Dashboard
            </Link>
          </li>
          <li class="">
            <Link to="/reports" class="text-decoration-none px-3 py-2 d-block">
              <i class="fas fa-list"></i> Reports
            </Link>
          </li>
          <li class="">
            <Link
              to="/analytics"
              class="text-decoration-none px-3 py-2 d-block d-flex justify-content-between"
            >
              <span>
                <i class="fas fa-comment"></i> Analytics
              </span>
              <span class="bg-dark rounded-pill text-white py-0 px-2">02</span>
            </Link>
          </li>
          <li class="">
            <Link href="#" class="text-decoration-none px-3 py-2 d-block">
              <i class="fas fa-envelope-open-text"></i> Services
            </Link>
          </li>
          <li class="">
            <Link href="#" class="text-decoration-none px-3 py-2 d-block">
              <i class="fas fa-users"></i> Customers
            </Link>
          </li>
        </ul>
        <hr class="h-color mx-2" />

        <ul class="list-unstyled px-2">
          <li class="">
            <Link href="#" class="text-decoration-none px-3 py-2 d-block">
              <i class="fas fa-bars"></i> Settings
            </Link>
          </li>
          <li class="">
            <Link href="#" class="text-decoration-none px-3 py-2 d-block">
              <i class="fas fa-bell"></i> Notifications
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
