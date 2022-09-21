const calculator = require("../domain/propertyCalculator");

class PropertyService {
  calculate(values) {
    return values.reduce((total, next) => {
      var state = total[next.type];
      const average = calculator(next);

      if (typeof state === "undefined") {
        var new_state = {};
        new_state[next.city] = average;
        total[next.type] = new_state;
        return total;
      }

      var value_by_city = state[next.city];
      if (typeof value_by_city === "undefined") {
        state[next.city] = average;
        total[next.type] = state;
        return total;
      }

      value_by_city = value_by_city + average;
      state[next.city] = value_by_city;
      total[next.type] = state;
      return total;
    }, {});
  }
}

module.exports = new PropertyService();
