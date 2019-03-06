import { USER_SELECTED } from "../actions/action-types";

export default (state=null, action) => {
  switch (action.type) {
    case USER_SELECTED:
      return action.payload;
    default:
      return state;
  }
};
