import styled from '@emotion/styled';
import { css } from '@emotion/core';

const headlineStyles = css`
    color: #2E8B57;
`;
const Headline = styled.h1`
  ${headlineStyles};
`;

export default () => <Headline>Learnhub</Headline>;
