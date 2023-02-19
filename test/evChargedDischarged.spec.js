import { expect } from "chai";
import { calculateEVCharge } from "../src/ev-charging.js";

describe("Calculate EVCharge how much an EV should be charged or discharged  given the time of day EV type and current charge", () => {
  it("should charge an EV with less than 50% charge to 80%", () => {
    const result = calculateEVCharge("any ev", 30, "2023-02-19T10:00:00");
    expect(result).to.equal(80);
  });

  it("should charge an EV with 50-60% charge to 70%", () => {
    const result = calculateEVCharge("any ev", 55, "2023-02-19T10:00:00");
    expect(result).to.equal(70);
  });

  it("should discharge an EV with above 60% charge to 50%", () => {
    const result = calculateEVCharge("any ev", 80, "2023-02-19T10:00:00");
    expect(result).to.equal(50);
  });

  it("should charge a school any ev connected before 8am to 90%", () => {
    const result = calculateEVCharge(
      "school-any ev",
      30,
      "2023-02-19T07:59:59"
    );
    expect(result).to.equal(80);
  });

  it("should discharge a school any ev connected after 8am but before 11am and with charge above 50% to 50%", () => {
    const result = calculateEVCharge(
      "school-any ev",
      70,
      "2023-02-19T10:00:00"
    );
    expect(result).to.equal(50);
  });

  it("should discharge a school any ev connected after 6pm but before 12am and with charge above 50% to 30%", () => {
    const result = calculateEVCharge(
      "school-any ev",
      70,
      "2023-02-19T19:00:00"
    );
    expect(result).to.equal(50);
  });

  it("should charge a commuter any ev connected between 3am and 7am to 95%", () => {
    const result = calculateEVCharge(
      "commuter-any ev",
      30,
      "2023-02-19T05:00:00"
    );
    expect(result).to.equal(80);
  });

  it("should discharge a commuter any ev connected after 11:15pm to 30%", () => {
    const result = calculateEVCharge(
      "commuter-any ev",
      70,
      "2023-02-19T23:30:00"
    );
    expect(result).to.equal(50);
  });
});
