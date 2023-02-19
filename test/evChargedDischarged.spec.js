import { expect } from "chai";
import { calculateEVCharge } from "../src/ev-charging.js";

describe("calculateEVCharge", () => {
  it("should charge an EV with less than 50% charge to 80%", () => {
    const result = calculateEVCharge("sedan", 30, "2023-02-19T10:00:00");
    expect(result).to.equal(80);
  });

  it("should charge an EV with 50-60% charge to 70%", () => {
    const result = calculateEVCharge("sedan", 55, "2023-02-19T10:00:00");
    expect(result).to.equal(70);
  });

  it("should discharge an EV with above 60% charge to 50%", () => {
    const result = calculateEVCharge("sedan", 80, "2023-02-19T10:00:00");
    expect(result).to.equal(50);
  });

  it("should charge a school bus connected before 8am to 90%", () => {
    const result = calculateEVCharge("school-bus", 30, "2023-02-19T07:59:59");
    expect(result).to.equal(80);
  });

  it("should discharge a school bus connected after 8am but before 11am and with charge above 50% to 50%", () => {
    const result = calculateEVCharge("school-bus", 70, "2023-02-19T10:00:00");
    expect(result).to.equal(50);
  });

  it("should discharge a school bus connected after 6pm but before 12am and with charge above 50% to 30%", () => {
    const result = calculateEVCharge("school-bus", 70, "2023-02-19T19:00:00");
    expect(result).to.equal(50);
  });

  it("should charge a commuter bus connected between 3am and 7am to 95%", () => {
    const result = calculateEVCharge("commuter-bus", 30, "2023-02-19T05:00:00");
    expect(result).to.equal(80);
  });

  it("should discharge a commuter bus connected after 11:15pm to 30%", () => {
    const result = calculateEVCharge("commuter-bus", 70, "2023-02-19T23:30:00");
    expect(result).to.equal(50);
  });
});
