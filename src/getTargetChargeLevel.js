/*This program defines a function called getTargetChargeLevel that takes three parameters:

evType: a string representing the type of EV ("school-bus", "commuter-bus", or any other type of EV)
currentChargeLevel: a number representing the current charge level of the EV (in percent)
connectionTime: a number representing the time of day the EV is connected to the charger (in 24-hour format)
The function checks the EV type and connection time to determine the target charge level based on the rules you provided. If the EV is not a school bus or a commuter bus, it follows the default charging/discharging logic for other EVs.

The program includes an example usage of the getTargetChargeLevel function, where it calculates the target charge level for a school bus with a current charge level of 40% connected at 7am. The program prints the resulting target charge level to the console.*/

// Function to determine target charge level for an EV
function getTargetChargeLevel(evType, currentChargeLevel, connectionTime) {
  // Default values for other EVs
  let targetChargeLevel = null;
  let chargeLimit = 80;
  let dischargeLimit = 50;

  // Check EV type and connection time to determine target charge level
  if (evType === "school-bus") {
    if (connectionTime < 8) {
      targetChargeLevel = 90;
    } else if (
      connectionTime >= 8 &&
      connectionTime < 11 &&
      currentChargeLevel > 50
    ) {
      targetChargeLevel = 50;
    } else if (
      connectionTime >= 18 &&
      connectionTime < 24 &&
      currentChargeLevel > 50
    ) {
      targetChargeLevel = 30;
    }
  } else if (evType === "commuter-bus") {
    if (connectionTime >= 3 && connectionTime < 7) {
      targetChargeLevel = 95;
    } else if (connectionTime >= 23 && currentChargeLevel > 0) {
      targetChargeLevel = 30;
    }
  }

  // If target charge level hasn't been set yet, follow default logic for other EVs
  if (targetChargeLevel === null) {
    if (currentChargeLevel < 50) {
      targetChargeLevel = chargeLimit;
    } else if (currentChargeLevel >= 50 && currentChargeLevel <= 60) {
      targetChargeLevel = 70;
    } else if (currentChargeLevel > 60) {
      targetChargeLevel = dischargeLimit;
    }
  }

  return targetChargeLevel;
}

// Example usage
let evType = "school-bus";
let currentChargeLevel = 40;
let connectionTime = 7;

let targetChargeLevel = getTargetChargeLevel(
  evType,
  currentChargeLevel,
  connectionTime
);

console.log("Target charge level: " + targetChargeLevel);
