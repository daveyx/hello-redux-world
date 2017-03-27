const initialState = {
    userInfo: "Click the button for change the state and display a message",
    message: "",
    buttonText: "click me"
}

export default function(state=initialState, action) {
  console.log("reducer called... actiontype=" + action.type);
  switch(action.type) {
    case "BUTTON_CLICKED":
      return action.payload;
      break;
    case "RESET_CLICKED":
      return initialState;
      break;
  }
  return state;
}
