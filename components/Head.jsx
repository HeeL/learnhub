import { css, Global } from '@emotion/core';
import Head from 'next/head';

const globalStyles = css`
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    html,
    body {
        padding: 0.5rem;
        margin: 0;
        min-height: 100%;
        font-size: 12px;
        font-family: Roboto;
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
