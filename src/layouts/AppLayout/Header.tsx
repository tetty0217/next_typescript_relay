import React from "react";
import {AppBar} from "@material-ui/core/";

const style = require("../../styles/layouts/Header.sass");

const Header: React.FC = () => {
  return (
      <AppBar
          position="relative"
          elevation={0}
          color="inherit"
          className={style.Header}
      >
        header
      </AppBar>
  );
};

export default Header;
