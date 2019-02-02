import styled from '@emotion/styled';
import { css } from '@emotion/core';
import React from 'react';
import Head from '../components/Head';

const headlineStyles = css`
    color: #2E8B57;
    font-size: 4rem;
    font-weight: bold;
    letter-spacing: 0.1rem;
`;
const SubHeadlineStyles = css`
    color: #cccccc;
    font-size: 1.2rem;
    font-style: italic;
    letter-spacing: 0.2rem;
    margin-left: 2rem;
`;
const Headline = styled.div`
  ${headlineStyles};
`;
const SubHeadline = styled.span`
  ${SubHeadlineStyles};
`;
const Container = styled.div`
`;

export default () => (
  <React.Fragment>
    <Head title="Learnhub - learn where to learn" />
    <Container>
      <Headline>Learnhub</Headline>
      <SubHeadline>Learn where to learn</SubHeadline>
    </Container>
  </React.Fragment>
);
