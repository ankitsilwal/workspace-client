import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>
            Home
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/create" style={styles.navLink}>
            Create
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px 20px",
  },
  navList: {
    listStyleType: "none",
    padding: 0,
    display: "flex",
    justifyContent: "left",
  },
  navItem: {
    marginRight: "15px",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    transition: "background-color 0.3s",
  },
};

export default Navbar;
