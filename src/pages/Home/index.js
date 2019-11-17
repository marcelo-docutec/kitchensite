import React, { useEffect } from 'react';
import { styled } from '@material-ui/core';
import Food from '../../components/Food';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../core/store/food';

const DivStyled = styled('div')({
  columnCount: 3,
  columnGap: '1,25em',
});

const Home = () => {
  const dispatch = useDispatch();
  const food = useSelector(({ foodReducer }) => foodReducer);

  useEffect(() => {
    dispatch(actions.getAll());
  }, [dispatch]);

  return (
    <DivStyled>
      {food.map((v, k) => (
        <Food key={k} image={v.image} description={v.description} />
      ))}
    </DivStyled>
  );
};

export default Home;
