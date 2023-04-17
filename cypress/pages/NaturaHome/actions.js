

const el = require ('./elements').ELEMENTS;

class NaturaHome {


    acessarUrl () {

        cy.visit('https://www.natura.com.br/');
        
    }

    clicarBtnMinhaConta () {


        cy.wait(1000);
        cy.xpath(el.btnMinhaConta).click();
        
    }



}

export default new NaturaHome();

