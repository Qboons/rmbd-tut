import React, { Component } from 'react';
import PropTypes from 'prop-types';// Image
import searchIcon from '../../images/search-icon.svg';
// Styles
import { Wrapper, Content } from '../SearchBar/SearchBar.styles';

class SearchBar extends Component {
  state = {
    value: ''
  };
  timeout = null;

  componentDidUpdate(_prevsProps, prevState) {
    if (this.state.value !== prevState.value) {
      const { setSeatchTerm } = this.props;

      clearTimeout(this.timeout)

      this.timeout = setTimeout(() => {
        const { value } = this.state;
        setSeatchTerm(value);
      }, 500)
  
    }
  }

  render() {

    const { value } = this.state;
    
    return (
      <Wrapper>
        <Content>
          <img src={searchIcon} alt='search-icon'/>
          <input 
            type='text'
            placeholder='Search Movie'
            onChange={event => this.setState( {value : event.currentTarget.value})}
            value={value}
          />
        </Content>
      </Wrapper>
    );
  };
};

SearchBar.propTypes = {
  setSeatchTerm: PropTypes.func
}

export default SearchBar;
