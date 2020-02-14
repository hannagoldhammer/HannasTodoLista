// Här skriver vi våra UI tester 

// mocha syntax:

// Valfri testrubrik som besktiver att detta är en sasmlig av test för din mapp/sida
describe("UI tests for Todo app", () => {
    it("Should visit the localhost page", () => {
        // Cypress kommer att besöka denna sidan och testa om allt går bra
        cy.visit("http://localhost:8030/todos")

        // Kolla om en länk finns, eller en knapp eller någont annat 
        // "Finns det något på denna sidan som har en knapp som går att kliakc på? Om den har det - gör det."
        cy.contains("My todo list")

        // "När jag klickar på knappen så ska jag komma till "commands/actions". Om den gjordet det - bra!"
        cy.url().should("include", "/todos")

        // cy.contains("Delete todo").click({multiple: true})
        // Denna ska ta bort alla todos på sidan... 
        // cy.contains("Delete").click(({multiple: true}))

        // Hämta det elementet med detta id

        // Hämta något på sidan som har innehållet "Add to list" och klicka på den  
        
        

    
        // Hämta input fält 
        cy.get("#input").type("Andra testet {enter}")

        cy.get(".delete").each(() => {
            cy.get(".delete").first().click()
        }) 

        cy.get("#input").type("Hannas lilla test").should("have.value", "Hannas lilla test")
        cy.contains("Add to list").click(({multiple: true}))


    })
})