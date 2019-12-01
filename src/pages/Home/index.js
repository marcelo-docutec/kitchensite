import React, { useEffect } from 'react';
import { styled, CircularProgress } from '@material-ui/core';
import Food from '../../components/Food';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../core/store/food';

const DivStyled = styled('div')(({ theme }) => {
  return {
    columnGap: '1,25em',
    [theme.breakpoints.down('sm')]: {
      columnCount: 1,
    },
    [theme.breakpoints.up('md')]: {
      columnCount: 2,
    },
    [theme.breakpoints.up('lg')]: {
      columnCount: 3,
    },
  };
});

const Home = () => {
  const dispatch = useDispatch();
  const food = useSelector(({ foodReducer }) => foodReducer);

  useEffect(() => {
    dispatch(actions.getAll());
  }, [dispatch]);

  return (
    <DivStyled>
      {food ? (
        food.map((v, k) => <Food key={k} image={v.image + '.jpeg'} description={v.description} />)
      ) : (
        <CircularProgress value={100} variant="static" />
      )}
    </DivStyled>
  );
};

export default Home;
