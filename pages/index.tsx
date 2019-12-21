import React from "react";
import {NextPage} from "next"
import Link from "next/link";
import {Button} from "@material-ui/core";

const Home: NextPage = () => (
    <>
      <h1>Hello world!</h1>
      <nav>
        <Link href={'/test'}>
          <Button variant={'contained'} color={'primary'}>
            test link
          </Button>
        </Link>
      </nav>
    </>
);

export default Home;
