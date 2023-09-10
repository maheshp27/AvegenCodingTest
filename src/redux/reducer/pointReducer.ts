import {LOOSE_POINTS, WIN_POINTS} from '../../appConstants';
import {WIN, LOOSE} from '../actions/constants';

const initialState = {
  points: 0,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case WIN:
      return {
        ...state,
        points: state.points + WIN_POINTS,
      };
    case LOOSE:
      return {
        ...state,
        points: state.points - LOOSE_POINTS,
      };
    default:
      return state;
  }
};
