/// <reference types="Cypress" />

describe("My Third Test", () => {
  it("Checkbox", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice");

    cy.get("#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1");

    cy.get("#checkBoxOption1")
      .uncheck()
      .should("not.be.checked")
      .and("have.value", "option1");

    cy.get('input[type="checkbox"]')
      .check(["option2", "option3"])
      .should("be.checked");
  });

  it("Dropdowns", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice");

    // Static
    cy.get("select").select("option2").should("have.value", "option2");

    // Dynamic
    cy.get("#autocomplete").type("ind");

    cy.get(".ui-menu-item div").each(($el, index, $list) => {
      // $el is a wrapped jQuery element
      const textVal = $el.text();

      if (textVal === "India") {
        // wrap this element so we can
        // use cypress commands on it
        cy.wrap($el).click();
      } else {
        // do something else
      }
    });

    cy.get("#autocomplete").should("have.value", "India");
  });

  it("Hide/Show", () => {
    cy.get("#displayed-text").should("be.visible");
    cy.get("#hide-textbox").click();
    cy.get("#displayed-text").should("not.be.visible");
    cy.get("#show-textbox").click();
    cy.get("#displayed-text").should("be.visible");
  });

  it("Radio buttons", () => {
    cy.get('[value="radio2"]').check().should("be.checked");
  });
});
