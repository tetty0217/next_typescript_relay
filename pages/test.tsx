import React from "react";
import {NextPage} from "next"
import Link from "next/link";
import {Button} from "@material-ui/core";

const TestPage: NextPage<{ ua: string }> = ({ua}) => (
    <>
      <h1>Hello world!</h1>
      <p>{ua || ''}</p>
      <nav>
        <Link href={'/'}>
          <Button variant={'contained'} color={'primary'}>
            home link
          </Button>
        </Link>
      </nav>
    </>
);

TestPage.getInitialProps = async ({req}) => {
  const ua = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return {ua};
}
;

export default TestPage;
