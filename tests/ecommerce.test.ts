import { describe, it, expect, beforeEach } from "vitest";
import {
  addProduct,
  addToCart,
  applyShippingDiscount,
  calculateTotal,
  clearCart,
} from "../src/ecommerce";

// let cart = {};
describe("E-commerce System", () => {
  beforeEach(() => {
    addProduct("Soap", 100, 6);
    addProduct("Shampoo", 200, 3);
    clearCart();
  });

  it("should calculate price of all products", () => {
    /*
      Pattern: Arrange, Act, Assertion
    */

    // Arrange
    addToCart("Soap", 1);
    addToCart("Shampoo", 1);

    // Act
    const sum = calculateTotal();

    // Assertion
    expect(sum).toBe(300);
  });

  it("should add items to cart", () => {
    let cart = {};
    const itemId = "Soap";

    cart = addToCart(itemId, 3);

    expect(cart[itemId]).toBe(3);
  });

  it("should apply shipping discount", () => {
    const soapItemId = "Soap";
    const shampooItemId = "Shampoo";

    addToCart(soapItemId, 5);
    addToCart(shampooItemId, 3);

    const total = calculateTotal();

    expect(applyShippingDiscount(total)).toBe(1090);
  });

  it("should not apply shipping discount", () => {
    const soapItemId = "Soap";

    addToCart(soapItemId, 1);

    const total = calculateTotal();

    expect(applyShippingDiscount(total)).toBe(100);
  });
});
