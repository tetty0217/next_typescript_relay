import React from 'react';
import {NextPageContext} from "next"
import Head from "next/head";

type IProps = {
  title: string
  errorCode: number
}

class Error extends React.Component<IProps> {
  static async getInitialProps({res}: NextPageContext): Promise<IProps> {
    return {
      title: `ErrorCode is ${res!.statusCode}`,
      errorCode: res!.statusCode
    }
  }

  render() {
    return (
        <>
          <Head>
            <title>{this.props.title}</title>
          </Head>
          {this.props.errorCode}
        </>
    )
  }
}

export default Error;
