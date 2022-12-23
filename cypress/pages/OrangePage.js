class OrangePage{
    elements = {
        url: () => cy.visit('https://opensource-demo.orangehrmlive.com'),
        usernameInput: () => cy.get('input[name=username]'),
        passwordInput: () => cy.get('input[name=password]'),
        submitBtn: () => cy.get('.oxd-button'),
        errorMessage: () => cy.get('.oxd-alert-content > .oxd-text')
    }

    visit(){
        this.elements.url()
    }

    fillUsername(username){
        this.elements.usernameInput().type(username)
    }

    
    fillPassword(password){
        this.elements.passwordInput().type(password)
    }

    submit(){
        this.elements.submitBtn().click()
    }

    errorMsg(){
        this.elements.errorMessage()
    }
}

export const orangePage = new OrangePage()