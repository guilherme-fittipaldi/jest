function calculator(property) {
  const { type, square_meter } = property;
  const percentage = 1.3;
  let value = property.value;

  if (type === "house") {
    value = value * percentage;
  }
  return square_meter / value;
}

module.exports = calculator;
