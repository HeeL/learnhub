import styled from '@emotion/styled';
import { css } from '@emotion/core';
import React from 'react';
import Head from '../components/Head';

const headlineStyles = css`
    color: #2E8B57;
`;
const Headline = styled.h1`
  ${headlineStyles};
`;
const Container = styled.div`
`;

export default () => (
  <React.Fragment>
    <Head title="Learnhub - learn where to learn" />
    <Container>
      <Headline>Learnhub</Headline>
    </Container>
  </React.Fragment>
);
