import React, {useState} from "react";
import {NextPage} from "next"
import {Button} from "@material-ui/core";

const Home: NextPage = () => {
  const [isClick, onClick] = useState<Boolean>(false);
  const switchState = () => {
    onClick(!isClick)
  };

  return (
      <>
        <h1>Hello world!</h1>
        <nav>
          <Button variant={'contained'} color={'primary'} onClick={switchState}>
            Button
          </Button>
          <p>isClick: {isClick.toString()}</p>
        </nav>
      </>
  )
};

export default Home;
