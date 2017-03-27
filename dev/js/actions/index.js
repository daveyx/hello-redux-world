export const clickButtonAction = (data) => {
  console.log("clickButtonAction called");
  return {
    type: "BUTTON_CLICKED",
    payload: data
  }
};

export const resetAction = () => {
  console.log("reset action called");
  return {
    type: "RESET_CLICKED",
    payload: {}
  }
};
