const Types = {
  ADD_FAVORITE: 'favorite/ADD',
  REMOVE_FAVORITE: 'favorite/REMOVE',
  GET_FAVORITES: 'favorite/LOAD',
  GET_FAVORITES_SUCCESS: 'favorite/LOAD_SUCCESS',
  GET_FAVORITES_FAIL: 'favorite/LOAD_FAIL',
};

const initialState = {
  loading: true,
  favorites: [],
  error: undefined,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.ADD_FAVORITE:
      return {...state, favorites: [...state.favorites, action.payload.data]};
    case Types.REMOVE_FAVORITE:
      const fav = state.favorites.filter(
        (data) => data.id !== action.payload.data.id,
      );
      return {...state, favorites: fav};
    default:
      return state;
  }
}

export const addFavorite = (item) => async (dispatch) => {
  dispatch({
    type: Types.ADD_FAVORITE,
    payload: {
      data: item,
    },
  });
};

export const removeFavorite = (item) => async (dispatch) => {
  dispatch({
    type: Types.REMOVE_FAVORITE,
    payload: {
      data: item,
    },
  });
};
