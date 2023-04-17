

import NaturaHome from '../pages/NaturaHome/actions';
import NaturaCadastro from '../pages/NaturaCadastro/actions';
import NaturaLogin from '../pages/NaturaLogin/actions';




Given(/^Eu acesso o site Natura$/, () => {
	NaturaHome.acessarUrl();
});

Then(/^clico no botão Minha Conta Natura$/, () => {
	NaturaHome.clicarBtnMinhaConta();
});

Then(/^clico no botão criar Conta Natura$/, () => {
    NaturaLogin.clicarBtnCriarConta();
});

When(/^preencho todos os dados Natura$/, () => {
	NaturaCadastro.gerarNomeFake();
    NaturaCadastro.gerarSobrenomeFake();
    NaturaCadastro.gerarEmailFake();
    NaturaCadastro.gerarSenhaFake();
    NaturaCadastro.confirmaSenhaFake();
    NaturaCadastro.geraCpfFake();
    NaturaCadastro.dateBirth();
    NaturaCadastro.selecionaGenero();
    NaturaCadastro.phoneNumber();
    NaturaCadastro.terms();
});

Then(/^valido a criação do usuario Natura$/, () => {
	NaturaCadastro.confirmarCadastro();
});

