export const PETLOADING = "PETLOADING";
export const PETSUCCESS = "PETSUCCESS";
export const PETERROR = "PETERROR";

export const petLoading = () => {
  return { type: PETLOADING };
};

export const petSuccess = (payload) => {
  return {
    type: PETSUCCESS,
    payload,
  };
};

export const petError = () => {
  return { type: PETERROR };
};

export const getPetData = () => (dispatch) => {
  dispatch(petLoading());
  fetch("http://localhost:3001/petbo")
    .then((res) => res.json())
    .then((res) => dispatch(petSuccess(res)))
    .catch(() => dispatch(petError()));
};
