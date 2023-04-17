

const el = require ('./elements').ELEMENTS;

class NaturaLogin {


    
    clicarBtnCriarConta () {


        cy.wait(3000);
        cy.xpath(el.btnCriarConta).click();
        
    }



}

export default new NaturaLogin();

