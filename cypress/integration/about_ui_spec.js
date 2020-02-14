describe("About page", () => {
    it("Should load About page", () => {
        cy.visit("http://localhost:8030/todos")
    
        cy.contains("About").click()
    
        cy.url().should("include", "/about")
    
        cy.contains("This todo app was created by Hanna.")
    })
})