import React from 'react';
import { Toolbar, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Search, NavbarStyled, SearchIconContainer, SearchInputBase } from './styles';
import { useDispatch } from 'react-redux';
import { actions } from 'core/store/food';

const Navbar = () => {
  const dispatch = useDispatch();

  const handleChange = name => {
    if (name === '') {
      dispatch(actions.getAll());
    } else {
      dispatch(actions.getByName(name));
    }
  };

  return (
    <NavbarStyled position="static">
      <Toolbar>
        <Typography variant="h6">Home</Typography>
        <Search>
          <SearchIconContainer>
            <SearchIcon />
          </SearchIconContainer>
          <SearchInputBase onChange={({ target }) => handleChange(target.value)} />
        </Search>
      </Toolbar>
    </NavbarStyled>
  );
};

export default Navbar;
