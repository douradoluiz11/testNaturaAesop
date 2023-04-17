
import AesopHome from '../pages/AesopHome/actions';
import AesopCadastro from '../pages/AesopCadastro/actions';

Given(/^Eu acesso o site Aesop$/, () => {

    AesopHome.acessarUrl();

});


When(/^clico no botão cadastre-se$/, () => {

    AesopHome.clicarBtnCadastreSe();
});


When(/^preencho todos os dados$/, () => {

    AesopCadastro.gerarNomeFake();
    AesopCadastro.gerarSobrenomeFake();
    AesopCadastro.gerarEmailFake();
    AesopCadastro.gerarSenhaFake();
    AesopCadastro.confirmaSenhaFake();
    AesopCadastro.geraCpfFake();
    AesopCadastro.selecionaGenero();
    AesopCadastro.dateBirth();
    AesopCadastro.phoneNumber();
    AesopCadastro.receiveNews();
    AesopCadastro.optIn();
    AesopCadastro.terms();
    AesopCadastro.confirmarCadastro();


});

Then(/^valido que o cliente foi cadastrado com sucesso$/, () => {

    AesopCadastro.validaClientelogado();
    
});


