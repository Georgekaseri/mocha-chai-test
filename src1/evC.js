export const calculateEVCha = (
  electricVehicleType,
  currentChargePercentage,
  timeOfDay
) => {
  // Any EV connected with less than 30% charge is automatically charged to 80%
 if (currentChargePercentage <30)
 return 80;
  }

  // Any EV with 30-60 % is charged to 90%
if (currentChargePercentage >=30 && currentChargePercentage <=60){
  return 90;
}
  

  // Any EV with 60-80 % to 95%
  if(currentChargePercentage >=60 && currentChargePercentage <=80){
    return 95;
  }

  // Any EV Charge Level above 80 % should not be charge further, and instead should be discharge to 50 %
  if(currentChargePercentage >=80){
    return 50;
  }

  // If a school bus is connected before 7am make sure to charge it to 100%
 if (electricVehicleType === "School bus" && timeOfDay <=7){
  return 100;
 }

  // If a School bus is connected after 7am but before 9am charge to 80%
  if(electricVehicleType === "School bus" && timeOfDay >7 && timeOfDay <9){
    return 80;
  }


  // If a School bus is connected after 9am but before 12pm it should be discharged to 50% if the charge level is above 60 %.<
  if(currentChargePercentage >60 && electricVehicleType === "School bus" && timeOfDay >9 && timeOfDay <12){
    return 50;

  }
 

 
 //If a commuter bus is connected between 1am to 5am, it should be charged to 80%.
 if(electricVehicleType === "commuter bus" && timeOfDay >1 && timeOfDay <5 ){
  return 80;
 }
  
  // If a commuter bus is connected between 8am but before 11pm it should be discharged  to 50% if the charge level is above 60 %
  if(currentChargePercentage >60 && electricVehicleType === "commuter bus" && timeOfDay >8 && timeOfDay <23){
    return 50;
  }


  // If a Taxi is connected at any time, it should be charged to 100% if the charge level is below 50%, charged to 80% if the charge level is between 50% and 80%, and discharged to 50% if the charge level is above 80%.

if( electricVehicleType === "Taxi" && timeOfDay >0 && timeOfDay <24 && currentChargePercentage>50  && currentChargePercentage<80){
  return 80
}
if( electricVehicleType === "Taxi" && timeOfDay >0 && timeOfDay <24 && currentChargePercentage>50  && currentChargePercentage<80){
  return 50
 

};
