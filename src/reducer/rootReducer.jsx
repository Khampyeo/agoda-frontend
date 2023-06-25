import { combineReducers } from "redux";
import { reducerManager } from './managerReducer'
import { reducerSearchHotel } from './searchHotelReducer'


export const RootReducer = combineReducers({
  reducerManager,
  reducerSearchHotel
})