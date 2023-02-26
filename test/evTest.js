import { expect } from "chai";
import { calculateEVCha } from "../src1/evC.js"

describe("Calculate EVCharge how much an EV should be charged or discharged  given the time of day EV type and current charge", () => {

it('Any EV connected with less than 30% charge is automatically charged to 80%',()=>{
  const result = calculateEVCha("any ev", 30, "2023-02-26T10:00:00");
  expect(result).to.equal(80);
});

it('Any EV with 60-80 % to 95%', ()=>{
  const result = calculateEVCha("any ev", 65, "2023-02-26T10:00:00");
  expect(result).to.equal(95);
});

it('Any EV Charge Level above 80 % should not be charge further, and instead should be discharge to 50 %', ()=>{
  const result = calculateEVCha("any ev", 85, "2023-02-26T10:00:00")
  expect(result).to.equal(50);
});

it('If a school bus is connected before 7am make sure to charge it to 100%',()=>{
  const result =calculateEVCha("School bus", 1, "2023-02-26T10:00:00")
  expect(result).to.equal(100);

});

it('If a School bus is connected after 7am but before 9am charge to 80%',()=>{
  const result=calculateEVCha("School bus", 8, "2023-02-26T10:00:00")
  expect(result).to.equal(80);
})



})