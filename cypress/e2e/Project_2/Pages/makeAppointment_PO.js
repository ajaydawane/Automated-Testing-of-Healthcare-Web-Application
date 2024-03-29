
export class appointment_PO  {

    makeMyAppointmentButton="#btn-make-appointment";
    facility="#combo_facility";
    hospitalReadmission="#chk_hospotal_readmission";
    healthProgram="#radio_program_medicaid";
    visitDate="#txt_visit_date";
    comment="#txt_comment";
    bookAppointment="#btn-book-appointment";
    appointmentConfirmMsg="h2";
    homepage=".text-center > .btn"


    clickAppointmentButtton(){
        cy.get(this.makeMyAppointmentButton).click()
    }

    facilityfield(){
        cy.get(this.facility).select("Seoul CURA Healthcare Center")
    }

    applyForHospitalReadmission(){
        cy.get(this.hospitalReadmission).click()
    }

    healthCareProgram(){
        cy.get(this.healthProgram).click()
    }

    appointmentDate(){
        cy.get(this.visitDate).type("22/04/2024")
    }

    appointmentComment(){
        cy.get(this.comment).click({force:true})
        cy.get(this.comment).type("Please fix my appointment, Thank You.")
    }

    bookMyAppointment(){
        cy.get(this.bookAppointment).click()
    }

    verifyAppointmetnMsg(){
        cy.get(this.appointmentConfirmMsg).contains("Appointment Confirmation")
    }

    backToHomePage(){
        cy.get(this.homepage).click()
    }
}