export const getChargeDifferential = (charge1, charge2) => {
  return Math.abs(charge1 - charge2);
};

export const getChargeDifferentialWithLocation = (
  origin,
  destination,
  charge
) => {
  const validLocations = ["Location A", "Location B", "Location C"]; // example valid locations

  if (!validLocations.includes(origin)) {
    return "Error: Invalid origin location";
  }

  if (!validLocations.includes(destination)) {
    return "Error: Invalid destination location";
  }
};

export const getChargeDifferentialWithDates = (
  date1,
  date2,
  charge1,
  charge2
) => {
  const timeDiff = date2.getTime() - date1.getTime();
  const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Convert time difference to days

  const chargeDiff = charge2 - charge1;

  return chargeDiff / dayDiff;
};
