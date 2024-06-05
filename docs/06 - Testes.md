# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).

A documentação dos testes é dividida nas seguintes seções:

- [Testes](#testes)
- [Teste de Software](#teste-de-software)
  - [Plano de Testes de Software](#plano-de-testes-de-software)
  - [Registro dos Testes de Software](#registro-dos-testes-de-software)
  - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
  - [Testes de unidade automatizados (Opcional)](#testes-de-unidade-automatizados-opcional)
- [Testes de Usabilidade](#testes-de-usabilidade)
  - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
  - [Registro de Testes de Usabilidade](#registro-de-testes-de-usabilidade)
  - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

Preencha a tabela com o plano dos testes. Para cada Caso de Teste (CT), associe qual o Requisito Funcional ou não funcional que ele está verificando. Associe também a página (ou artefato) onde o teste será realizado e descreva o cenário do teste. Veja a tabela de exemplo.

|     **Caso de Teste**     | **CT01 - Consultar Receita Por Objetivo**                                                                                                                            |
| :-----------------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     **Procedimento**      | 1) Acesse o endereço https://icei-puc-minas-pmv-si.github.io/pmv-si-2024-1-pe1-t2-rotulocerto/src/pages/receitas-dietas.html <br> 2) Clique em Perda de Gordura <br> |
| **Requisitos associados** | RF-010                                                                                                                                                               |
|  **Resultado esperado**   | Receitas que são para perda de gordura                                                                                                                               |
|   **Dados de entrada**    | Nenhum                                                                                                                                                               |
|   **Resultado obtido**    | Sucesso                                                                                                                                                              |

|     **Caso de Teste**     | **CT02 - Consultar Receita Por Nome**                                                                                                                                                             |
| :-----------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     **Procedimento**      | 1) Acesse o endereço https://icei-puc-minas-pmv-si.github.io/pmv-si-2024-1-pe1-t2-rotulocerto/src/pages/receitas-dietas.html <br> 2) Preencher a barra de pesquisa<br> 3) Clicar no botão da lupa |
| **Requisitos associados** | RF-010                                                                                                                                                                                            |
|  **Resultado esperado**   | Receitas que tenha o nome                                                                                                                                                                         |
|   **Dados de entrada**    | Pão de Queijo                                                                                                                                                                                     |
|   **Resultado obtido**    | Sucesso                                                                                                                                                                                           |

|     **Caso de Teste**     | **CT03 - Consultar Receita Por Ingrediente**                                                                                                                                                      |
| :-----------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     **Procedimento**      | 1) Acesse o endereço https://icei-puc-minas-pmv-si.github.io/pmv-si-2024-1-pe1-t2-rotulocerto/src/pages/receitas-dietas.html <br> 2) Preencher a barra de pesquisa<br> 3) Clicar no botão da lupa |
| **Requisitos associados** | RF-010                                                                                                                                                                                            |
|  **Resultado esperado**   | Receitas que tenham o ingrediente na receita                                                                                                                                                      |
|   **Dados de entrada**    | Frango                                                                                                                                                                                            |
|   **Resultado obtido**    | Sucesso                                                                                                                                                                                           |

|     **Caso de Teste**     | **CT04 - Consultar alimento da base de dados**                                                                                                                                                                              |
| :-----------------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------                                                        |
|     **Procedimento**      | 1) Acesse o endereço https://icei-puc-minas-pmv-si.github.io/pmv-si-2024-1-pe1-t2-rotulocerto/src/pages/todos-alimentos.html <br> 2) Clique na seta para avançar a página ou voltar até encontrar o alimento dessejado <br> |
| **Requisitos associados** | RF-001                                                                                                                                                                                                                      |
|  **Resultado esperado**   | Encontro do alimento dessejado                                                                                                                                                                                              |
|   **Dados de entrada**    | Nenhum                                                                                                                                                                                                                      |
|   **Resultado obtido**    | Sucesso                                                                                                                                                                                                                     |

|     **Caso de Teste**     | **CT05 - Enviar sugestões na plataforma** |
| :-----------------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------                                                        |
|     **Procedimento**      | 1) Acesse o endereço https://icei-puc-minas-pmv-si.github.io/pmv-si-2024-1-pe1-t2-rotulocerto/src/pages/enviar-sugestoes.html <br> 2) Preencha os campos de Nome Completo, Email e Sugestão <br> 3) Clique no botão de Enviar <br> |
| **Requisitos associados** | RF-003 |
|  **Resultado esperado**   | Campos do formulário limpo após envio |
|   **Dados de entrada**    | Campo Nome Completo: João Marcos <br> Campo Email: joaomarcos@email.com <br> Campo Sugestão: Gostaria de sugerir uma sessão de comentários nas páginas das receitas.  |
|   **Resultado obtido**    | Sucesso |

## Registro dos Testes de Software


| *Caso de Teste*                   | *CT01 - Consultar Receita Por Objetivo*                                 |
| --------------------------------- | ----------------------------------------------------------------------- |
| Requisito Associado               | RF-010 - A aplicação deve exibir dietas comuns com diferentes objetivos |
| Link do vídeo do teste realizado: | https://1drv.ms/u/s!AhD2JqpOUvJChapRtRSQ9vPzbNLwGA?e=mxZs6t             |


| *Caso de Teste*                   | *CT02 - Consultar Receita Por Nome*                                     |
| --------------------------------- | ----------------------------------------------------------------------- |
| Requisito Associado               | RF-010 - A aplicação deve exibir dietas comuns com diferentes objetivos |
| Link do vídeo do teste realizado: | https://1drv.ms/u/s!AhD2JqpOUvJChapRtRSQ9vPzbNLwGA?e=mxZs6t             |


| *Caso de Teste*                   | *CT03 - Consultar Receita Por Ingrediente*                              |
| --------------------------------- | ----------------------------------------------------------------------- |
| Requisito Associado               | RF-010 - A aplicação deve exibir dietas comuns com diferentes objetivos |
| Link do vídeo do teste realizado: | https://1drv.ms/u/s!AhD2JqpOUvJChapRtRSQ9vPzbNLwGA?e=mxZs6t             |


## Avaliação dos Testes de Software

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

## Testes de unidade automatizados (Opcional)

Se o grupo tiver interesse em se aprofundar no desenvolvimento de testes de software, ele podera desenvolver testes automatizados de software que verificam o funcionamento das funções JavaScript desenvolvidas. Para conhecer sobre testes unitários em JavaScript, leia 0 documento  [Ferramentas de Teste para Java Script](https://geekflare.com/javascript-unit-testing/).

# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo;
2. Ruim;
3. Regular;
4. Bom;
5. Ótimo;

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.

Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário                                                                                                                                                                                |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------                                                         |
| 1             | Você é uma pessoa que deseja saber os valores nutricionais do Pão francês. Encontre no site dentro da aba de todos os alimentos o alimento Pão francês.                                             |
| 2             | Você é uma pessoa que deseja saber os valores nutricionais do Macarrão Cozido, s/ sal. Encontre no site dentro da aba de todos os alimentos o alimento Macarrão Cozido, s/ sal.                     |



## Registro de Testes de Usabilidade


Cenário 1: Você é uma pessoa que deseja saber os valores nutricionais do Pão francês. Encontre no site dentro da aba de todos os alimentos o alimento Pão francês.

| Usuário                                    | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
| ------------------------------------------ | --------------- | -------------------- | ------------------------------- |
| 1                                          | SIM             | 5                    | 16.89 segundos                  |
| 2                                          | SIM             | 5                    | 18.49 segundos                  |
| 3                                          | SIM             | 5                    | 12.27 segundos                  |
|                                            |                 |                      |                                 |
| **Média**                                  | 100%            | 5                    | 15.83 segundos                  |
| **Tempo para conclusão pelo especialista** | SIM             | 5                    | 09.88 segundos                  |

Cenário 2: Você é uma pessoa que deseja saber os valores nutricionais do Macarrão Cozido, s/ sal. Encontre no site dentro da aba de todos os alimentos o alimento Macarrão Cozido, s/ sal.

| Usuário                                    | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
| ------------------------------------------ | --------------- | -------------------- | ------------------------------- |
| 1                                          | SIM             | 5                    | 19.24 segundos                  |
| 2                                          | SIM             | 5                    | 17.66 segundos                  |
| 3                                          | SIM             | 5                    | 20.56 segundos                  |
|                                            |                 |                      |                                 |
| **Média**                                  | 100%            | 5                    | 19.15 segundos                  |
| **Tempo para conclusão pelo especialista** | SIM             | 5                    | 11.06 segundos                  |


    Comentários dos usuários: O site é fácil de acessar, mas algumas páginas poderiam
    redirecionar a gente automaticamente para outras. Senti a falta de mais opções de filtros,
    tanto na hora da pesquisa, quanto depois dela, nos resultados.

## Avaliação dos Testes de Usabilidade

Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.



