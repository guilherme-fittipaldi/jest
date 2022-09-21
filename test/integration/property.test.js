const axios = require("axios").default;

it("POST /", async () => {
  const response = await axios.post("http://localhost:3000/", [
    { type: "apartment", value: 100000, square_meter: 100, city: "Santos" },
    {
      type: "apartment",
      value: 100000,
      square_meter: 100,
      city: "São Paulo",
    },
    { type: "house", value: 180000, square_meter: 200, city: "São Paulo" },
    { type: "house", value: 300000, square_meter: 80, city: "Santos" },
    { type: "house", value: 300000, square_meter: 40, city: "Santos" },
  ]);

  expect(response.data).toStrictEqual({
    apartment: {
      Santos: 0.001,
      "São Paulo": 0.001,
    },
    house: {
      "São Paulo": 0.0008547008547008547,
      Santos: 0.00030769230769230765,
    },
  });
});
