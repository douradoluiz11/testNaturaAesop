
import { Faker, faker } from '@faker-js/faker';

const el = require('./elements').ELEMENTS;
faker.locale = 'pt_BR';
var name = faker.name.firstName();
var letraMaiuscula = faker.random.alpha({ count: 1, casing: 'upper' });
var letraMinuscula = faker.random.alpha({ count: 5 });
var numeroRandom = faker.random.numeric();
var pass = letraMaiuscula + letraMinuscula + numeroRandom + "@";


class AesopCadastro {



    gerarNomeFake() {

        cy.wait(1000);
        cy.xpath(el.firstName).type(name);

    }

    gerarSobrenomeFake() {

        cy.wait(1000);
        cy.xpath(el.lastName).type(faker.name.lastName());

    }

    gerarEmailFake() {
        cy.wait(1000);

        cy.xpath(el.email).type(faker.internet.email(name));

    }

    gerarSenhaFake() {
        cy.wait(1000);

        cy.xpath(el.password).type(pass);

    }

    confirmaSenhaFake() {
        cy.wait(1000);

        cy.xpath(el.confirmPass).type(pass);

    }

    geraCpfFake() {
        cy.wait(1000);

        let create_array = (total, numero) => Array.from(Array(total), () => number_random(numero));
        let number_random = (number) => (Math.round(Math.random() * number));
        let mod = (dividendo, divisor) => Math.round(dividendo - (Math.floor(dividendo / divisor) * divisor));



        function cpf() {
            let total_array = 9;
            let n = 9;
            let [n1, n2, n3, n4, n5, n6, n7, n8, n9] = create_array(total_array, n);

            let d1 = n9 * 2 + n8 * 3 + n7 * 4 + n6 * 5 + n5 * 6 + n4 * 7 + n3 * 8 + n2 * 9 + n1 * 10;
            d1 = 11 - (mod(d1, 11));
            if (d1 >= 10) d1 = 0;

            let d2 = d1 * 2 + n9 * 3 + n8 * 4 + n7 * 5 + n6 * 6 + n5 * 7 + n4 * 8 + n3 * 9 + n2 * 10 + n1 * 11;
            d2 = 11 - (mod(d2, 11));
            if (d2 >= 10) d2 = 0;


            return `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}${d1}${d2}`;
        }

        cy.xpath(el.cpf).type(cpf());

    }

    selecionaGenero() {

        cy.xpath(el.gender).click();

    }

    
    dateBirth() {


        cy.xpath(el.birth).type("05/09/1992");

    }

    phoneNumber() {


        cy.xpath(el.phone).type(faker.phone.number('11 9########'));

    }

    receiveNews (){

        cy.xpath(el.receiveNews).click();
    }

    optIn (){

        cy.xpath(el.optIn).click();
    }

    terms (){

        cy.xpath(el.terms).click();
    }

    confirmarCadastro (){

        cy.wait(2000);

        cy.xpath(el.btnCriarConta).click();
    }

   validaClientelogado (){

    cy.xpath(el.clienteLogado).should('have.text',name);

   }







}

export default new AesopCadastro();

