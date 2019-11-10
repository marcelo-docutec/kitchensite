import React from 'react';
import { styled } from '@material-ui/core';
import Food from '../../components/Food';
import { foodData } from '../../data/data.foods';

const DivStyled = styled('div')({
  columnCount: 3,
  columnGap: '1,25em',
});

const Home = () => {
  return (
    <DivStyled>
      {foodData.map((v, k) => (
        <Food key={k} image={v.image} description={v.description} />
      ))}
    </DivStyled>
  );
};

export default Home;
