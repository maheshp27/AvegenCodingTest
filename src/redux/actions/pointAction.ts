import {LOOSE, WIN} from './constants';

export const win = () => {
  return {
    type: WIN,
  };
};

export const loose = () => {
  return {
    type: LOOSE,
  };
};
