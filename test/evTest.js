import { expect } from "chai";
import { getChargeTarget } from "../src/charging-rules.js"; // assuming the charging rules are in a separate module called charging-rules.js

describe("Charging rules", () => {
  it("should charge an EV with less than 30% charge to 80%", () => {
    const chargeLevel = 20;
    const targetChargeLevel = getChargeTarget(chargeLevel);
    expect(targetChargeLevel).to.equal(80);
  });

  it("should charge an EV with charge level between 30% and 60% to 90%", () => {
    const chargeLevel = 40;
    const targetChargeLevel = getChargeTarget(chargeLevel);
    expect(targetChargeLevel).to.equal(90);
  });

  it("should charge an EV with charge level between 60% and 80% to 95%", () => {
    const chargeLevel = 70;
    const targetChargeLevel = getChargeTarget(chargeLevel);
    expect(targetChargeLevel).to.equal(95);
  });

  it("should discharge an EV with charge level above 80% to 50%", () => {
    const chargeLevel = 90;
    const targetChargeLevel = getChargeTarget(chargeLevel);
    expect(targetChargeLevel).to.equal(50);
  });

  it("should charge a school bus connected before 7am to 100%", () => {
    const chargeLevel = 20;
    const currentTime = new Date("2023-02-26T06:59:59");
    const targetChargeLevel = getChargeTarget(
      chargeLevel,
      "school",
      currentTime
    );
    expect(targetChargeLevel).to.equal(100);
  });

  it("should charge a school bus connected after 7am but before 9am to 80%", () => {
    const chargeLevel = 20;
    const currentTime = new Date("2023-02-26T08:59:59");
    const targetChargeLevel = getChargeTarget(
      chargeLevel,
      "school",
      currentTime
    );
    expect(targetChargeLevel).to.equal(80);
  });

  it("should discharge a school bus connected after 9am but before 12pm to 50% if charge level is above 60%", () => {
    const chargeLevel = 70;
    const currentTime = new Date("2023-02-26T11:59:59");
    const targetChargeLevel = getChargeTarget(
      chargeLevel,
      "school",
      currentTime
    );
    expect(targetChargeLevel).to.equal(50);
  });

  it("should charge a commuter bus connected between 1am and 5am to 95%", () => {
    const chargeLevel = 20;
    const currentTime = new Date("2023-02-26T03:59:59");
    const targetChargeLevel = getChargeTarget(
      chargeLevel,
      "commuter",
      currentTime
    );
    expect(targetChargeLevel).to.equal(95);
  });

  it("should discharge a commuter bus connected after 8pm but before 11pm to 50% if charge level is above 60%", () => {
    const chargeLevel = 70;
    const currentTime = new Date("2023-02-26T22:59:59");
    const targetChargeLevel = getChargeTarget(
      chargeLevel,
      "commuter",
      currentTime
    );
    expect(targetChargeLevel).to.equal(50);
  });
});
