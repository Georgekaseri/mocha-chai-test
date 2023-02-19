import {
  getChargeDifferential,
  getChargeDifferentialWithLocation,
  getChargeDifferentialWithDates,
} from "../src/charge-diff.js";
import { assert, expect, should } from "chai";
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

  it("should return the charge differential for 25 and 30 kWh", function () {
    const chargeDifferential = getChargeDifferential(25, 30);

    expect(chargeDifferential).equal(5);
  });

  it("should return 0 on same entry", function () {
    const chargeDifferential = getChargeDifferential(0, 0);

    expect(chargeDifferential).equal(0);
  });

  it("should verify that the charge differential method correctly handles negative values for charges.", function () {
    const chargeDifferential = getChargeDifferential(-90, -120);
    expect(chargeDifferential).equal(30);
  });

  it("should verify that the charge differential method correctly handles decimal values for charges.", function () {
    const chargeDifferential = getChargeDifferential(9.89, 89.9);
    expect(chargeDifferential).equal(80.01);
  });

  it("should verify that the charge differential method returns  negative value when one of them is smaller than another one. ", function () {
    const chargeDifferential = getChargeDifferential(9, 18);
    expect(chargeDifferential).equal(9);
  });

  it("should verify that the charge differential method returns a positive value when one of the charges is greater than another one", function () {
    const chargeDifferential = getChargeDifferential(18, 9);
    expect(chargeDifferential).equal(9);
  });
});

describe("getChargeDifferentialWithLocation", () => {
  it("should return an error message for an invalid origin location", () => {
    const result = getChargeDifferential("Invalid Location", "Location B", 70);
  });

  it("should return an error message for an invalid destination location", () => {
    const result = getChargeDifferentialWithLocation(
      "Location A",
      "Invalid Location",
      70
    );
    expect(result).to.equal("Error: Invalid destination location");
  });
});

describe("getChargeDifferentialWithDates", () => {
  it("should return the difference in charges between two dates", () => {
    const date1 = new Date("2022-01-01");
    const date2 = new Date("2022-02-01");
    const charge1 = 100;
    const charge2 = 200;
    const expectedResult = 3.225806451612903;

    const result = getChargeDifferentialWithDates(
      date1,
      date2,
      charge1,
      charge2
    );

    expect(result).to.equal(expectedResult);
  });

  it("should return 0 if the charges are the same", () => {
    const date1 = new Date("2022-01-01");
    const date2 = new Date("2022-02-01");
    const charge1 = 100;
    const charge2 = 100;
    const expectedResult = 0;

    const result = getChargeDifferentialWithDates(
      date1,
      date2,
      charge1,
      charge2
    );

    expect(result).to.equal(expectedResult);
  });

  it("should return a negative number if the charge decreased", () => {
    const date1 = new Date("2022-01-01");
    const date2 = new Date("2022-02-01");
    const charge1 = 200;
    const charge2 = 100;
    const expectedResult = -3.225806451612903;

    const result = getChargeDifferentialWithDates(
      date1,
      date2,
      charge1,
      charge2
    );

    expect(result).to.equal(expectedResult);
  });

  it("should return a positive number if the charge increased", () => {
    const date1 = new Date("2022-01-01");
    const date2 = new Date("2022-02-01");
    const charge1 = 100;
    const charge2 = 200;
    const expectedResult = 100;

    const result = getChargeDifferentialWithDates(
      date1,
      date2,
      charge1,
      charge2
    );

    expect(result).to.equal(3.225806451612903);
  });
});
