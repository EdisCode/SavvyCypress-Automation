/// <reference types="Cypress" />

describe("My Second Test", () => {
  it("Test2", () => {
    cy.visit("https://savvy-shopper.netlify.app");

    cy.wait(3000);

    // Parent child chaining
    cy.get(".trending__products").as("productLocator");

    cy.get("@productLocator").find(".product__item").eq(0).find("i").click();

    // Itrating through products
    cy.get("@productLocator")
      .find(".product__item")
      .each(($el, index, $list) => {
        // $el is a wrapped jQuery element
        const textVal = $el.find("h3").text();

        if (textVal.includes("Baltsar")) {
          // wrap this element so we can
          // use cypress commands on it
          cy.wrap($el).find("i").click();
        }
      });

    cy.get(".cart__icon").invoke("show").click({ force: true });
    cy.get("button").contains("Checkout").click();
  });
});
