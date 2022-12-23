import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";
import {orangePage} from '@pages/OrangePage'

Given("I navigate to the Website", () => {
    orangePage.visit()
})

When("I provide with correct credentials", (table) => {
    table.hashes().forEach(row => {
        cy.log(row.username)
        cy.log(row.password)
        orangePage.fillUsername(row.username)
        orangePage.fillPassword(row.password)
    })
})

When("I provide with incorrect credentials", (table) => {
    table.hashes().forEach(row => {
        cy.log(row.username)
        cy.log(row.password)
        orangePage.fillUsername(row.username)
        orangePage.fillPassword(row.password)
    })
})

When("I click on sign in button", () => {
    orangePage.submit()
})

Then("Validate the title after login", () => {
    cy.contains("Dashboard").should('be.visible')
})

Then("I should see error message", () => {
    orangePage.errorMsg()
})


