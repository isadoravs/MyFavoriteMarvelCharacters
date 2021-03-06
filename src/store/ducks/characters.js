import api from '~/services/api';

export const Types = {
  GET_PAGE: 'page/LOAD',
  GET_PAGE_SUCCESS: 'page/LOAD_SUCCESS',
  GET_PAGE_FAIL: 'page/LOAD_FAIL',
  REFRESH_PAGE: 'page/REFRESH',
};

const initialState = {
  loading: true,
  characters: [],
  error: undefined,
  totalItems: 1,
};

const ITEMS_PER_PAGE = 20;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.GET_PAGE:
      return {...state, loading: true};
    case Types.GET_PAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        characters: action.payload.data.results
          ? [...state.characters, ...action.payload.data.results]
          : [...state.characters],
        totalItems: action.payload.data.total,
        error: undefined,
      };
    case Types.GET_PAGE_FAIL:
      return {...state, loading: false, error: action.error};
    case Types.REFRESH_PAGE:
      return initialState;
    default:
      return state;
  }
}

export const getPage = (value, index, refresh) => async (dispatch) => {
  dispatch({
    type: Types.GET_PAGE,
  });

  if (refresh) {
    dispatch({
      type: Types.REFRESH_PAGE,
    });
  }

  const search = value ? `&nameStartsWith=${value}` : '';
  const offset = (refresh ? 0 : index) * ITEMS_PER_PAGE;

  try {
    const res = await api.get(
      `/characters?limit=${ITEMS_PER_PAGE}&offset=${offset}${search}`,
    );
    dispatch({
      type: Types.GET_PAGE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: Types.GET_PAGE_FAIL,
      payload: error,
    });
  }
};
