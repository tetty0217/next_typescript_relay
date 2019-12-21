import React from "react";
import Header from "./Header"
import Footer from "./Footer"

const style = require("../../styles/layouts/AppLayout.sass");

export const AppLayout: React.FC = props => {
  const {children} = props;

  return (
      <>
        <Header/>
        <div className={style.AppLayout}>
          {children}
        </div>
        <Footer/>
      </>
  );
};
