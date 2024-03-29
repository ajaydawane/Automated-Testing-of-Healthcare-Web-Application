/// <reference types="Cypress" />

import { Constant } from "../Utils/constant"
import { history_PO } from "../Pages/history_PO"
import { login_PO } from "../Pages/logIn_PO"
import { appointment_PO } from "../Pages/makeAppointment_PO"




const login1 = new login_PO
const credential1 = new Constant
const appointment = new appointment_PO
const trackHistory = new history_PO

before(()=>{
    login1.visitURL(credential1.Base_URL)
})

describe("Appointment",()=>{
    
    it("User makes Appointment and verifying in History",()=>{


        // clicking on make appointment
        appointment.clickAppointmentButtton()

        // log in with valid credentials
        login1.usernameloginField(credential1.validuserName)
        login1.userpasswordloginField(credential1.validuserPassword)
        login1.userClick()
        login1.verifyloginMsg()

        //making appointment
        appointment.facilityfield()
         
        // clicking checkbox
        appointment.applyForHospitalReadmission()

        // clicking radio button
        appointment.healthCareProgram()

        // fixing appointment date
        appointment.appointmentDate()

        // commenting on the appointment
        appointment.appointmentComment()

        // clicking on book appointment
        appointment.bookMyAppointment()

        // verifing appointmetn confirmation message
        appointment.verifyAppointmetnMsg()

        //back to home page
        appointment.backToHomePage()


        // clicking on main menu
        trackHistory.clickmainMenu()

        // clicking on history
        trackHistory.clickHistory()

        // verify comment in history
        trackHistory.verifyCommentInHistory()

        //back to home page
        appointment.backToHomePage()

    })


})
