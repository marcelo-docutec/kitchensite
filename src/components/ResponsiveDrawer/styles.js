import { fade } from '@material-ui/core/styles';
import { styled, withStyles } from '@material-ui/styles';
import { AppBar, InputBase } from '@material-ui/core';

export const Search = styled('div')(({ theme }) => {
  return {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  };
});

export const NavbarStyled = withStyles(theme => {
  return {
    root: {
      flexGrow: 1,
    },
  };
})(AppBar);

export const SearchIconContainer = styled('div')(({ theme }) => {
  return {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
});

export const SearchInputBase = withStyles(theme => {
  return {
    root: {
      color: 'inherit',
    },
    input: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 200,
      },
    },
  };
})(InputBase);
