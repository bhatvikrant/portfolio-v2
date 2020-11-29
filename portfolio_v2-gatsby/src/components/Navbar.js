import React from "react"
import { Link } from "gatsby"

import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/" className="black-links">
            <h3>Vikrant Bhat</h3>
          </Link>
          {/* <img src={logo} alt="logo" /> */}
          <button className="toggle-btn" type="button" onClick={toggleSidebar}>
            <FaAlignRight />
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
