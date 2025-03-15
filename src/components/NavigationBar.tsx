import { useState } from "react";
import Button from "./Button";

const NavigationBar = () => {
  const [isCollapse, setCollapse] = useState(false);
  // const [isDropdown, setDropdown] = useState(false);

  const [openDropdown, setOpenDropdown] = useState("");

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? "" : menu);
  };

  return (
    <>
      <nav className="navbar navbar-expand-md bg-white py-0 rounded-5">
        <div className="container-fluid">
          {/* Logo */}
          <a className="navbar-brand p-0" href="/">
            <img src="/logo.png" alt="Website Logo" width="100" />
          </a>

          {/* Navbar Toggle Button (for small screens) */}

          <button
            className="navbar-toggler border-0 outline-0 bg-transparent fs-1"
            type="button"
            onClick={() => setCollapse(!isCollapse)}
            style={{
              outline: "none",
              boxShadow: "none",
              border: 0,
            }}
          >
            {isCollapse ? (
              <i className="bi bi-x"></i>
            ) : (
              <i className="bi bi-list"></i>
            )}
          </button>

          {/* Navbar Links (Collapsible on Small Screens) */}
          <div
            className={`navbar-collapse text-center w-100 ${
              isCollapse ? "show" : "collapse"
            }`}
          >
            <ul className="navbar-nav ms-auto">
              <li
                className="nav-item me-lg-3 me-1"
                style={{ fontVariant: "small-caps" }}
              >
                <a
                  className="nav-link active"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li
                className="nav-item dropdown"
                style={{ fontVariant: "small-caps" }}
              >
                <a
                  className="nav-link dropdown-toggle "
                  href="#"
                  onClick={() => toggleDropdown("browse")}
                >
                  Browse
                </a>
                {openDropdown === "browse" && (
                  <ul
                    className="dropdown-menu show border-0 outline-0 text-center text-md-start mx-0"
                    style={{ minWidth: 0, marginLeft: "-1rem" }}
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Institution
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li
                className="nav-item me-lg-3 me-1"
                style={{ fontVariant: "small-caps" }}
              >
                <a className="nav-link " href="#">
                  Blogs
                </a>
              </li>
              <li
                className="nav-item dropdown"
                style={{ fontVariant: "small-caps" }}
              >
                <a
                  className="nav-link dropdown-toggle "
                  href="#"
                  onClick={() => toggleDropdown("about")}
                >
                  About
                </a>
                {openDropdown === "about" && (
                  <ul
                    className="dropdown-menu show border-0 outline-0 text-center text-md-start mx-0"
                    style={{ minWidth: 0, marginLeft: "-1rem" }}
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Our Goal
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Our Mission
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Our Vision
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li
                className="nav-item me-lg-3 me-1"
                style={{ fontVariant: "small-caps" }}
              >
                <a className="nav-link " href="#">
                  Contact
                </a>
              </li>
            </ul>

            {/* Button on Navbar */}
            <div className="m-3 mx-0">
              <Button text="Get Our App" px={3} py={2} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
