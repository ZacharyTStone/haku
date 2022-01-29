import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useAppContext } from "../context/appContext";
import Logo from "./Logo";
import React, { useState } from "react";

const Navbar = () => {
  const { toggleSidebar } = useAppContext();

  const [showLogout, setShowLogout] = useState(false);

  return (
    <Wrapper>
      <div className="nav-center">
        <button className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>

        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>

        <div className="btn-container">
          <button
            className="btn"
            onClick={() => {
              setShowLogout(!showLogout);
            }}
          >
            <FaUserCircle />
            john
            <FaCaretDown />
          </button>
          <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
            <button
              onClick={() => console.log("logout user")}
              className="dropdown-btn"
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
