import { getChargeDifferential } from "./helper.js";
import { assert, expect } from "chai";
describe("getChargeDifferential", function () {
  it("should return the charge differential between two charges", function () {
    let charge1 = 50;
    let charge2 = 20;
    let expectedResult = 30;
    assert.equal(getChargeDifferential(charge1, charge2), expectedResult);
  });

  it("should return 0 if the two charges are equal", function () {
    let charge1 = 42;
    let charge2 = 42;
    let expectedResult = 0;
    assert.equal(getChargeDifferential(charge1, charge2), expectedResult);
  });
});

it("should return the charge differential for 25 and 30 kWh", function () {
  const chargeDifferential = getChargeDifferential(25, 30);

  expect(chargeDifferential).equal(5);
});

it("should return the 0 on same entry", function () {
  const chargeDifferential = getChargeDifferential(0, 0);

  expect(chargeDifferential).equal(0);
});
