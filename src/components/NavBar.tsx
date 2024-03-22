import { Box, Button, Drawer } from "@mui/material";
import { NavLink } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import NavLogo from "../assets/nav-logo.svg";
import "../styles/navbar.css";

type Anchor = "right";

const NavBar = () => {
  // Creating a basic isOpen type state did not use isOpen because the MUI drawer component was being finicky
  const [state, setState] = useState({
    right: false,
  });

  // MUI drawer does not natively support onClickAway or onClickOutside so we have to create our own logic
  const drawerRef = useRef(null);
  const useOnClickOutside = (
    ref: React.RefObject<HTMLElement>,
    handler: (event: MouseEvent | TouchEvent) => void
  ) => {
    useEffect(() => {
      const listener = (event: MouseEvent | TouchEvent) => {
        if (!ref.current || ref.current.contains(event.target as Node)) {
          return;
        }
        handler(event);
      };

      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [ref, handler]);
  };

  useOnClickOutside(drawerRef, () => {
    setState({ ...state, right: false });
  });

  // Logic to toggle the drawer
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };

  // Basic templating for the MUI drawer list
  const list = (anchor: Anchor) => (
    <Box
      ref={drawerRef}
      className="menu-open"
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="nav-links">
        <NavLink to="/" className="home-link" activeClassName="active">
          Home
        </NavLink>

        <p className="nav-category">Community</p>
        <NavLink to="/about" className="nav-link" activeClassName="active">
          About
        </NavLink>

        <NavLink to="/events" className="nav-link" activeClassName="active">
          Events
        </NavLink>

        <NavLink to="/petitions" className="nav-link" activeClassName="active">
          Petitions
        </NavLink>

        <NavLink to="/volunteer" className="nav-link" activeClassName="active">
          Volunteer
        </NavLink>

        <NavLink to="/partners" className="nav-link" activeClassName="active">
          Partners
        </NavLink>

        <p className="nav-category">Education</p>
        <NavLink to="/videos" className="nav-link" activeClassName="active">
          Videos
        </NavLink>

        <NavLink to="/workshops" className="nav-link" activeClassName="active">
          Workshops
        </NavLink>

        <NavLink
          to="/university_partners"
          className="nav-link"
          activeClassName="active"
        >
          University Partners
        </NavLink>

        <p className="nav-category">Get Involved</p>
        <NavLink to="/contact" className="nav-link" activeClassName="active">
          Contact
        </NavLink>

        <NavLink
          to="/start_petition"
          className="nav-link"
          activeClassName="active"
        >
          Start Petition
        </NavLink>

        <NavLink to="/donations" className="nav-link" activeClassName="active">
          Donations
        </NavLink>
      </div>
    </Box>
  );

  return (
    <div className="nav-wrapper">
      <div className="nav-bar">
        <NavLink to="/" className="logo">
          <img className="nav-logo" src={NavLogo} alt="GreenFuture logo" />
        </NavLink>
        {(["right"] as const).map((anchor) => (
          <React.Fragment key={anchor}>
            <Button
              onClick={toggleDrawer(anchor, true)}
              className="menu-button"
            >
              <div className="burger-contrast">
                <FaBars size={30} className="burger" />
              </div>
            </Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default NavBar;