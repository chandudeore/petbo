import { PETERROR, PETLOADING, PETSUCCESS } from "./action";

const intitialState = {
  loading: false,
  pet: [],
  error: false,
};

export const petReducer = (store = intitialState, { type, payload }) => {
  switch (type) {
    case PETLOADING:
      return { ...store, loading: true };
    case PETSUCCESS:
      return { ...store, loading: false, pet: [...payload], error: false };
    case PETERROR:
      return { ...store, error: true, loading: false };
    default:
      return store;
  }
};
