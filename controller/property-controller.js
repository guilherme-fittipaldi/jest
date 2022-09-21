const PropertyService = require("../service/property-service");

class PropertyController {
  getAveragePriceByCity = (payload) => {
    return PropertyService.calculate(payload);
  };
}

module.exports = new PropertyController();
