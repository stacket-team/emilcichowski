import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const id = '5e55067dc3a3bb36c2dc785e';
const baseURL = 'http://localhost:5000';

const FETCH_PHOTOS = gql`
  query FetchPhotos($id: ID!) {
    photos(author: $id) {
      title
      description
      tags
      src
    }
  }
`;

const FetchPhotos = () => {
  const { loading, error, data } = useQuery(FETCH_PHOTOS, {
    variables: { id },
  });

  if (loading) return <p>loading photos</p>;
  if (error) return <p>an error occured: ${error.message}</p>;

  return data.photos.map(item => (
    <>
      <p>{item.title}</p>
      <p>{item.description}</p>
      <p>{item.tags.join(', ')}</p>
      <img src={baseURL + item.src} alt={item.title} />
    </>
  ));
};

export default FetchPhotos;
