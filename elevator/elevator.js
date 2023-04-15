function createElevator(buildingName, numberFloors, currentFloor, passengers) {
  return {
    building: buildingName,
    floors: numberFloors, 
    currentFloor: currentFloor,
    passengers: passengers
  }
}

function changeFloors(elevator, floor) {
  if (floor > elevator.floors) {
    return `Floor ${floor} does not exist!`;
  }  else if (elevator.currentFloor !== floor) {
    elevator.currentFloor = floor;
    return `Taking you to floor ${elevator.currentFloor}!`;
  } else {
    return `You're already on floor ${floor}!`;
  }
}

function dropOffPassenger(elevator, passengers) {
  for (var i = 0; i < elevator.passengers.length; i++) {
    if (elevator.passengers[i].includes(passengers)) {
      elevator.passengers.splice(i, 1);
    }
  }
  return elevator.passengers;
}

module.exports = {
  createElevator,
  changeFloors,
  dropOffPassenger
};
