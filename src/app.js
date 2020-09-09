import React from "react";
import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const App = () => {
  return (
    <MuiThemeProvider>
      <Navbar />
      <Search />
    </MuiThemeProvider>
  );
};

export default App;
