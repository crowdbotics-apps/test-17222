import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn249043Reducer from '../features/SignIn249043/redux/reducers'
import SignIn249029Reducer from '../features/SignIn249029/redux/reducers'
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn249043: SignIn249043Reducer,
SignIn249029: SignIn249029Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});