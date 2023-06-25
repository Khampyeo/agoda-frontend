export const SEARCH_HOTEL = {
  SEARCH: 'SEARCH',
  DATE: 'DATE',
  PEOPLE: 'PEOPLE',
  SORT: 'SORT',
  PRICE: 'PRICE',
  RATING: 'RATING'
};

export const initialState = {
  search: '',
  date: {
    startDate: (new Date(Date.now()).toLocaleString('sv')).split(' ')[0],
    endDate: (new Date(Date.now()).toLocaleString('sv')).split(' ')[0],
  },
  people: { adult: 1, children: 0 },
  sort: 0,
  price: { min: 0, max: 5000 },
  rating: 0
};

export const reducerSearchHotel = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_HOTEL.SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    case SEARCH_HOTEL.DATE:
      return {
        ...state,
        date: action.payload,
      };
    case SEARCH_HOTEL.PEOPLE:
      return {
        ...state,
        people: action.payload,
      };
    case SEARCH_HOTEL.SORT:
      return {
        ...state,
        sort: action.payload,
      };
    case SEARCH_HOTEL.PRICE:
      return {
        ...state,
        price: action.payload,
      };
    case SEARCH_HOTEL.RATING:
      return {
        ...state,
        rating: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
