import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.color.secondary};
  padding: 5rem;
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  align-items: center;
`;

const StyledCategory = styled(Link)`
  font-size: 12rem;
  text-transform: capitalize;
  letter-spacing: 0.4rem;
  color: ${({ highlighted, theme }) =>
    highlighted ? theme.color.dark : theme.color.tertiary};
  font-family: ${({ theme }) => theme.font.fontRegular};
  font-weight: ${({ theme }) => theme.font.bold};
  text-decoration: none;
  transition: color 0.2s ease-out;
`;

const Collection = () => {
  const [categories, setCategories] = useState([
    ['wild', true, '/wild'],
    ['portraits', false, '/portraits'],
    ['landscapes', false, '/landscapes'],
  ]);

  const handleMouseLeave = () => {
    setCategories(prevState => {
      return prevState.map((value, j) => {
        value[1] = 0 === j;
        return value;
      });
    });
  };

  return (
    <StyledWrapper onMouseLeave={handleMouseLeave}>
      {categories.map((category, i) => (
        <StyledCategory
          key={category[0]}
          highlighted={category[1]}
          to={category[2]}
          onMouseEnter={() => {
            setCategories(prevState => {
              return prevState.map((value, j) => {
                value[1] = i === j;
                return value;
              });
            });
          }}
        >
          {category[0]}
        </StyledCategory>
      ))}
    </StyledWrapper>
  );
};

export default Collection;
