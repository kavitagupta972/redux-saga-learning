let state = {};
const bookReducer = (state, action) =>{
switch (action.type) {
    case "BOOK_FETCH_REQUESTED":
    return { ...state, response: null, loading: true }
    case "BOOK_FETCH_SUCCEEDED":
     return { ...state, response: action.response, loading: false }
    default:
      return {
        response: "Default State"
      };
  }
}
 
export default bookReducer;