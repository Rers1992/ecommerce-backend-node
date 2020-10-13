const { getAllProduct, getProductByCode } = require("../src/service/product-service");

describe("product-service", () => {
  it("should return all products", () => {
    expect(getAllProduct().length).toBe(5);
  });

  it.skip("should return a product by code", () => {
    const p = getProductByCode("123");
  });
});
