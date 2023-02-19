export const calculateEVCharge = (
  electricVehicleType,
  currentChargePercentage,
  timeOfDay
) => {
  // Any EV connected with less than 50% charge is automatically charged to 80%
  if (currentChargePercentage < 50) {
    return 80;
  }

  // Any EV with 50-60 % is charged to 70%
  if (currentChargePercentage >= 50 && currentChargePercentage <= 60) {
    return 70;
  }

  // Any EV above 60% is discharged to 50%
  if (currentChargePercentage > 60) {
    return 50;
  }

  // If a school bus is connected before 8am make sure to charge it to 90%
  if (electricVehicleType === "schoolBus" && timeOfDay < 8) {
    return 90;
  }

  // If it is connected after 8am but before 11am discharge to 50%
  if (electricVehicleType === "schoolBus" && timeOfDay >= 8 && timeOfDay < 11) {
    return 50;
  }

  // If the charge is above 50% and if the school bus is connected after 6pm and before 12am discharge to 30%
  if (
    electricVehicleType === "schoolBus" &&
    currentChargePercentage > 50 &&
    timeOfDay >= 18 &&
    timeOfDay < 24
  ) {
    return 30;
  }

  // If a commuter bus is connected between 3am and 7am charge up to 95%
  if (
    electricVehicleType === "commuterBus" &&
    timeOfDay >= 3 &&
    timeOfDay < 7
  ) {
    return 95;
  }

  // If connected after 11:15pm then discharge to 30%
  if (electricVehicleType === "commuterBus" && timeOfDay >= 23.25) {
    return 30;
  }

  // Return -1 to indicate an invalid combination of parameters
  return -1;
};
