import { css, Global } from '@emotion/core';
import Head from 'next/head';

const globalStyles = css`
    html,
    body {
        padding: 0;
        margin: 0;
        min-height: 100%;
        font-family: Helvetica, Arial, sans-serif;
        font-size: 12px;
    }
`;

export default props => (
  <Head>
    <Global styles={globalStyles} />
    <title>{props.title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
);
