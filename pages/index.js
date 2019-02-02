import styled from '@emotion/styled';
import { css } from '@emotion/core';
import React from 'react';
import Head from '../components/Head';

const headlineStyles = css`
  display: flex;
  justify-content: center;
  color: #0058A3;
  font-size: 4rem;
  font-weight: 600;
`;
const SubHeadlineStyles = css`
  display: flex;
  justify-content: center;
  color: #8A9299;
  font-size: 1rem;
  letter-spacing: 0.2rem;
`;
const Headline = styled.div`
  ${headlineStyles};
`;
const SubHeadline = styled.span`
  ${SubHeadlineStyles};
`;

export default () => (
  <React.Fragment>
    <Head title="Learnhub - learn where to learn" />
    <Headline>Learnhub</Headline>
    <SubHeadline>learn where to learn</SubHeadline>
  </React.Fragment>
);
