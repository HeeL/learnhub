import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Link from 'next/link';

const categories = [
  { name: 'Conferences', link: '/conferences' },
  { name: 'Online Courses', link: '/online-courses' },
  { name: 'Video Courses', link: '/video-courses' },
];

const linkStyles = css`
  cursor: pointer;
  color: #0058A3;
  padding: 1rem;
  margin: 2rem;
  font-size: 2rem;
  text-decoration: underline;
  &:hover {
      color: #79A2C6;
  }
`;
const CategoryLink = styled.a`
  ${linkStyles};
`;
const categoriesContainerStyles = css`
    @media (max-width: 500px) {
      flex-direction: column;
    }
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 4rem;
`;
const CategoriesContainer = styled.div`
    ${categoriesContainerStyles}
`;

const renderCategory = category => (
  <Link href={category.link} key={category.name}>
    <CategoryLink>{category.name}</CategoryLink>
  </Link>
);

export default () => (
  <CategoriesContainer>
    {categories.map(renderCategory)}
  </CategoriesContainer>
);
