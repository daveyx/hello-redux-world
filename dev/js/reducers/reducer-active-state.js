const initialState = {
    userInfo: "Click the button for change the state and display a message",
    message: "",
    buttonText: "click me"
}

export default function(state=initialState, action) {
  switch(action.type) {
    case "BUTTON_CLICKED":
      return action.payload;
      break;
  }
  return state;
}
