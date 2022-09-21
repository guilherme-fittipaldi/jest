const calculator = require("../../domain/propertyCalculator");

test("Should return correct square meter price from apartment", () => {
  expect(
    calculator({
      type: "apartment",
      value: 100000,
      square_meter: 100,
      city: "Santos",
    })
  ).toStrictEqual(0.001);
});

test("Should return correct square meter price from house", () => {
  expect(
    calculator({
      type: "house",
      value: 100000,
      square_meter: 100,
      city: "Santos",
    })
  ).toStrictEqual(0.0007692307692307692);
});
