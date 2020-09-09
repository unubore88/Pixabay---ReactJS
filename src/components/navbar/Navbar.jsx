import React from "react";
import AppBar from "material-ui/AppBar";

const styles = {
  customNavbar: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
};

const Navbar = () => {
  return (
    <AppBar
      style={{ background: "#2E3B55" }}
      title=" Pixabay React-material ui"
      showMenuIconButton={false}
    />
  );
};

export default Navbar;
