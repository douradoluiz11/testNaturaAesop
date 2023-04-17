

const el = require ('./elements').ELEMENTS;

class AesopHome {


    acessarUrl () {

        cy.visit('https://www.aesop.com.br/');
        
    }

    clicarBtnCadastreSe () {

        cy.xpath(el.btnCadastreSe).click();
        
    }



}

export default new AesopHome();

