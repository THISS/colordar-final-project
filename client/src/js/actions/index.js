// Create the action controller which returns the ACTION within the function
export const selectEvent = (event) => {
  console.log("You clicked on event:", event.title);
  return {
    type: "EVENT_SELECTED",
    payload: event
  }
};
