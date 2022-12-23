import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initState = {
  groupTasks : [],
  tasks : [],
}

const reducer = (state = initState, action) => {
  if (action.type === "FETCH_ALL_GROUP_TODOS") {
    return {
      ...state,
      groupTasks: action.payload
    }
  }
  return state;
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;