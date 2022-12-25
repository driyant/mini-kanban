import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initState = {
  groupTasks : [],
  colors : ["#4DB5BC", "#f7c654", "#F5B1B7", "#50d896"],
  items1: [],
  items2: [],
  items3: [],
  items4: [],
}

const reducer = (state = initState, action) => {
  if (action.type === "FETCH_ALL_GROUP_TODOS") {
    return {
      ...state,
      groupTasks: action.payload
    }
  }
  if (action.type === "FETCH_ITEM_1") {
    return {
      ...state,
      items1: action.payload
    }
  }
  if (action.type === "FETCH_ITEM_2") {
    return {
      ...state,
      items2: action.payload
    }
  }
  if (action.type === "FETCH_ITEM_3") {
    return {
      ...state,
      items3: action.payload
    }
  }
  if (action.type === "FETCH_ITEM_4") {
    return {
      ...state,
      items4: action.payload
    }
  }
  return state;
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;