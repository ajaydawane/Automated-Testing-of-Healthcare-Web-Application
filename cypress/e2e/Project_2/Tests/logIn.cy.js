/// <reference types="Cypress" />

import { Constant } from "../Utils/constant"
import { login_PO } from "../Pages/logIn_PO"
import { appointment_PO } from "../Pages/makeAppointment_PO"




const logIn = new login_PO
const credentials = new Constant
const appointment1 = new appointment_PO

beforeEach("vist URL and LogIn click",()=>{
    logIn.visitURL(credentials.Base_URL)
    appointment1.clickAppointmentButtton()
    
})

describe("Log In Functionality",()=>{
    
    

    it("Log in with valid Credentials",()=>{

        logIn.usernameloginField(credentials.validuserName)
        logIn.userpasswordloginField(credentials.validuserPassword)
        logIn.userClick()
        logIn.verifyloginMsg()
    })

    it("Log in with invalid username and valid password",()=>{

        logIn.usernameloginField(credentials.invalidUserName)
        logIn.userpasswordloginField(credentials.validuserPassword)
        logIn.userClick()
        logIn.verifyloginFailedMsg()
    })

    it("Log in with valid username and invalid password",()=>{

        logIn.usernameloginField(credentials.validuserName)
        logIn.userpasswordloginField(credentials.invalidUserPassword)
        logIn.userClick()
        logIn.verifyloginFailedMsg()
    })

    it("Log in with blank Credentials",()=>{

        logIn.usernameloginField(credentials.blankUserName)
        logIn.userpasswordloginField(credentials.blankUserPassword)
        logIn.userClick()
        logIn.verifyloginFailedMsg()
    })
})