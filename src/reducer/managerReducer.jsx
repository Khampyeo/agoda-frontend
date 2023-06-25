export const ACTION_FUNC = {
  TYPE: 'TYPE'
};

export const initialState = {
  type: 'hotel'
};

export const reducerManager = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_FUNC.TYPE:
      return {
        ...state,
        type: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
