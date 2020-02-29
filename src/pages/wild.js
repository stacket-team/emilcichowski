import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import FetchPhotos from 'components/FetchPhotos/FetchPhotos';

const WildPage = () => (
  <MainTemplate>
    <FetchPhotos tag="trzecie" />
  </MainTemplate>
);

export default WildPage;
