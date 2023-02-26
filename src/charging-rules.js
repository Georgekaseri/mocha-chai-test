export function getChargeTarget(
  chargeLevel,
  vehicleType = "",
  currentTime = new Date()
) {
  if (vehicleType === "school") {
    if (currentTime.getHours() < 7) {
      return 100;
    } else if (currentTime.getHours() < 9) {
      return 80;
    } else if (currentTime.getHours() < 12 && chargeLevel > 60) {
      return 50;
    }
  } else if (vehicleType === "commuter") {
    if (currentTime.getHours() >= 1 && currentTime.getHours() < 5) {
      return 95;
    } else if (
      currentTime.getHours() >= 20 &&
      currentTime.getHours() < 23 &&
      chargeLevel > 60
    ) {
      return 50;
    }
  } else if (vehicleType === "taxi") {
    if (chargeLevel < 50) {
      return 100;
    } else if (chargeLevel >= 50 && chargeLevel < 80) {
      return 80;
    } else if (chargeLevel >= 80) {
      return 50;
    }
  }

  if (chargeLevel < 30) {
    return 80;
  } else if (chargeLevel >= 30 && chargeLevel < 60) {
    return 90;
  } else if (chargeLevel >= 60 && chargeLevel < 80) {
    return 95;
  } else if (chargeLevel >= 80) {
    return 50;
  }
}
