function comments(state=[],action) {
    if(action.postId !== 'undefined') {
        return {
          ...state,
          [action.postId]: postComments(state[action.postId],action)
        }
    }
    return state;
}

function postComments(state=[],action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      // you can update json file here
      console.log("Add comment with text");
      return [
        ...state,{
          user: action.author,
          text: action.comment
        }];
    case 'REMOVE_COMMENT':
      console.log("Remove comment");
      // you can update json file here
      return [
        ...state.slice(0,action.i),
        ...state.slice(action.i+1)
      ];
    default:
      return state;
  }
}
export default comments;
