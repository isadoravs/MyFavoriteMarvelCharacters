const Types = {
  ADD_SEARCH: 'search/ADD',
};

const initialState = {
  query: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.ADD_SEARCH:
      return {...state, query: action.payload.data};
    default:
      return state;
  }
}

export const addQuery = (item) => async (dispatch) => {
  dispatch({
    type: Types.ADD_SEARCH,
    payload: {
      data: item,
    },
  });
};
