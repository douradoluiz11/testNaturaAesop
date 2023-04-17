


Feature: Novo Cadastro Aesop

    Scenario: Cadastro com sucesso 

        Given Eu acesso o site Aesop
        And clico no botão cadastre-se
        When preencho todos os dados 
        Then valido que o cliente foi cadastrado com sucesso

    