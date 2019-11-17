import { foodData } from '../../../data/data.foods';
import { foodTypes } from './types';

export const getByName = name => {
  const result = foodData.filter(f => {
    f.description.contains(name);
  });
  return {
    type: foodTypes.GET_FOOD_BY_NAME,
    payload: result,
  };
};

export const getAll = () => {
  return {
    type: foodTypes.GET_ALL,
  };
};
