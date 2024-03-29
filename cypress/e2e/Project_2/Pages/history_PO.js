
export class history_PO {

    mainMenu="#menu-toggle";
    history="#sidebar-wrapper>ul>li:nth-child(4)>a";
    historyComment="#comment";

    clickmainMenu(){
        cy.get(this.mainMenu).click()
    }

    clickHistory(){
        cy.get(this.history).click()
    }

    verifyCommentInHistory(){
        cy.get(this.historyComment).contains("Please fix my appointment, Thank You.")
    }
}