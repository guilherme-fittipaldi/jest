const axios = require("axios").default;
const groupBy = require("../app");

test("Should return only apartments from santos", () => {
  expect(
    groupBy(
      [
        { area: 101, city: "santos", price: 100 },
        { area: 75, city: "guaruja", price: 200 },
        { area: 11, city: "santos", price: 200 },
        { area: 35, city: "guaruja", price: 20 },
      ],
      (ap) => ap.city
    ).get("santos")
  ).toStrictEqual([
    { area: 101, city: "santos", price: 100 },
    { area: 11, city: "santos", price: 200 },
  ]);
});

it("POST /", async () => {
  const response = await axios.post("http://localhost:3000/", [
    { area: 101, city: "santos", price: 100 },
    { area: 75, city: "guaruja", price: 200 },
    { area: 11, city: "santos", price: 200 },
    { area: 35, city: "guaruja", price: 20 },
  ]);

  expect(response.data).toStrictEqual({
    santos: 0.5325,
    guaruja: 1.0625,
  });
});
