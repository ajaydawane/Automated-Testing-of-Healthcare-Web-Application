export class login_PO {
    usernameField="#txt-username";
    userpasswordField="#txt-password";
    userclickButton="#btn-login";
    loginMsg="h2";
    loginFailedMsg=".text-danger"

    visitURL(url){
        cy.visit(url)
    }

    usernameloginField(name){
        cy.get(this.usernameField).type(name)
    }

    userpasswordloginField(pass){
        cy.get(this.userpasswordField).type(pass)
    }

    userClick(){
        cy.get(this.userclickButton).click()
    }

    verifyloginMsg(){
        cy.get(this.loginMsg).contains("Make Appointment")
    }

    verifyloginFailedMsg(){
        cy.get(this.loginFailedMsg).contains("Login failed! Please ensure the username and password are valid.")
    }
}