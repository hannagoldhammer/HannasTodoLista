"use strict";

describe("About page", function () {
    it("Should load About page", function () {
        cy.visit("http://localhost:8030/todos");

        cy.contains("About").click();

        cy.url().should("include", "/about");

        cy.contains("This todo app was created by Hanna.");
    });
});