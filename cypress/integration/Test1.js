/// <reference types="Cypress" />

describe("My First Test", () => {
  it("Test1", () => {
    cy.visit("https://savvy-shopper.netlify.app");

    cy.wait(3000);

    cy.get(".trending__products")
      .find(".product__item")
      .should("have.length", 4);

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
        } else {
          // do something else
        }
      });

    cy.get(".logo").then(function (logoelement) {
      cy.log(logoelement.text());
    });

    cy.get(".logo").should("have.text", "Savvy ShopperSavvy Shopper");
  });
});
