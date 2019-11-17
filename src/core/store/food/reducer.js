import { foodData } from '../../../data/data.foods';
import { foodTypes } from './types';

export const foodReducer = (state = foodData, action) => {
  switch (action.type) {
    case foodTypes.GET_FOOD_BY_NAME:
      return action.payload;
    case foodTypes.GET_ALL:
      return foodData;
    default:
      return state;
  }
};
