import { foodData } from '../../../data/data.foods';
import { foodTypes } from './types';

/**
 * get all food with contains name
 * @param {string} name
 */

export const getByName = name => {
  const result = foodData.filter(f => f.description.includes(name));
  return {
    type: foodTypes.GET_FOOD_BY_NAME,
    payload: result,
  };
};

/**
 * get all foods
 */

export const getAll = () => {
  return {
    type: foodTypes.GET_ALL,
  };
};
