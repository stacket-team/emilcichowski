import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const FETCH_PHOTOS = gql`
  query FetchPhotos($tag: String!) {
    photos(tag: $tag) {
      title
      description
      src
    }
  }
`;

const StyledWrapper = styled.div`
  margin-top: -3rem;
  width: 100%;
  height: calc(100% - 2rem);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImg = styled.div`
  width: 90rem;
  height: 70rem;
  background: url(${props => props.src}) no-repeat center/contain;
  margin-bottom: 2rem;
`;

const StyledTitle = styled.h1`
  font-weight: ${({ theme }) => theme.font.bold};
  text-transform: uppercase;
  font-size: 3.6rem;
`;

const StyledDescription = styled.p`
  font-size: 1.8rem;
`;

const FetchPhotos = ({ tag }) => {
  const { loading, error, data } = useQuery(FETCH_PHOTOS, {
    variables: { tag },
  });
  const [imageIndex, setImageIndex] = useState(0);

  if (loading) return <p>loading photos</p>;
  if (error) return <p>an error occured: ${error.message}</p>;

  const handleImageClick = () => {
    setImageIndex(prevState => {
      prevState += 1;
      if (imageIndex === data.photos.length - 1) {
        prevState = 0;
      }
      return prevState;
    });
  };

  return (
    <StyledWrapper>
      <StyledInnerWrapper>
        <StyledImg
          src={`http://localhost:5000${data.photos[imageIndex].src}`}
          onClick={handleImageClick}
        />
        <StyledTitle>{data.photos[imageIndex].title}</StyledTitle>
        <StyledDescription>
          {data.photos[imageIndex].description}
        </StyledDescription>
      </StyledInnerWrapper>
    </StyledWrapper>
  );
};

FetchPhotos.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default FetchPhotos;
