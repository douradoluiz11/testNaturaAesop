Feature: Novo Cadastro Natura

    Scenario: Cadastro com sucesso 

        Given Eu acesso o site Natura
        And clico no botão Minha Conta Natura
        And clico no botão criar Conta Natura
        When preencho todos os dados Natura
        Then valido a criação do usuario Natura
       