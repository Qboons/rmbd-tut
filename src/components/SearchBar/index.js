import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';// Image
import searchIcon from '../../images/search-icon.svg';
// Styles
import { Wrapper, Content } from '../SearchBar/SearchBar.styles';

const SearchBar = ({ setSeatchTerm }) => {
  const [state, setState] = useState('');
  const initial = useRef(true);

  useEffect(() => {
    if(initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSeatchTerm(state);
    }, 500)

    return () => clearTimeout(timer)
  },[setSeatchTerm, state])

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt='search-icon'/>
        <input 
          type='text'
          placeholder='Search Movie'
          onChange={event => setState(event.currentTarget.value)}
          value={state}
        />

      </Content>
    </Wrapper>
  );
};

SearchBar.propTypes = {
  setSeatchTerm: PropTypes.func
}

export default SearchBar;
