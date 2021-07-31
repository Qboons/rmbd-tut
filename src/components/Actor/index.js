import React from 'react';
import PropTypes from 'prop-types';
// Styles
import { Wrapper, Image } from './Actor.styles';

const Actor = ({ actorName, character, imageUrl }) => (
  <Wrapper>
    <Image src={imageUrl} alt='actor-thumb' />
    <h3>{actorName}</h3>
    <p>{character}</p>
  </Wrapper>
);

Actor.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  imageUrl: PropTypes.string
}

export default Actor;
