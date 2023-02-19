/*Charging an EV with less than 50% charge to 80%
Charging an EV with 50-60% charge to 70%
Discharging an EV with over 60% charge to 50%
Charging a school bus connected before 8am to 90%
Discharging a school bus connected after 8am but before 11am to 50%
Discharging a school bus with charge above 50% and connected after 6pm and before 12am to 30%
Charging a commuter bus connected between 3am and 7am to 95%
Discharging a commuter bus connected after 11:15pm to 30%*/

const assert = require("chai").assert;
const getTargetChargeLevel = require("../path/to/getTargetChargeLevel");

describe("getTargetChargeLevel", function () {
  it("should charge an EV with less than 50% charge to 80%", function () {
    assert.strictEqual(getTargetChargeLevel(40, 9, "car"), 80);
  });

  it("should charge an EV with 50-60% charge to 70%", function () {
    assert.strictEqual(getTargetChargeLevel(55, 14, "car"), 70);
  });

  it("should discharge an EV with over 60% charge to 50%", function () {
    assert.strictEqual(getTargetChargeLevel(75, 19, "car"), 50);
  });

  it("should charge a school bus connected before 8am to 90%", function () {
    assert.strictEqual(getTargetChargeLevel(60, 7, "school-bus"), 90);
  });

  it("should discharge a school bus connected after 8am but before 11am to 50%", function () {
    assert.strictEqual(getTargetChargeLevel(70, 10, "school-bus"), 50);
  });

  it("should discharge a school bus with charge above 50% and connected after 6pm and before 12am to 30%", function () {
    assert.strictEqual(getTargetChargeLevel(60, 20, "school-bus"), 30);
  });

  it("should charge a commuter bus connected between 3am and 7am to 95%", function () {
    assert.strictEqual(getTargetChargeLevel(40, 5, "commuter-bus"), 95);
  });

  it("should discharge a commuter bus connected after 11:15pm to 30%", function () {
    assert.strictEqual(getTargetChargeLevel(60, 23.5, "commuter-bus"), 30);
  });
});
