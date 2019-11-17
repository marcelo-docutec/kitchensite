import React from 'react';
import { Toolbar, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Search, NavbarStyled, SearchIconContainer, SearchInputBase } from './styles';

const Navbar = () => {
  return (
    <NavbarStyled position="static">
      <Toolbar>
        <Typography variant="h6">Home</Typography>
        <Search>
          <SearchIconContainer>
            <SearchIcon />
          </SearchIconContainer>
          <SearchInputBase />
        </Search>
      </Toolbar>
    </NavbarStyled>
  );
};

export default Navbar;
