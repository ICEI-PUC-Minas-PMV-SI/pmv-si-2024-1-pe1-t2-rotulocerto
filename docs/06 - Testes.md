# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo.

A documentação dos testes é dividida nas seguintes seções:

- [Testes](#testes)
- [Teste de Software](#teste-de-software)
  - [Plano de Testes de Software](#plano-de-testes-de-software)
  - [Registro dos Testes de Software](#registro-dos-testes-de-software)
  - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
- [Testes de Usabilidade](#testes-de-usabilidade)
  - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
  - [Registro de Testes de Usabilidade](#registro-de-testes-de-usabilidade)
  - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

## Plano de Testes de Software

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
| :-----------------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     **Procedimento**      | 1) Acesse o endereço https://icei-puc-minas-pmv-si.github.io/pmv-si-2024-1-pe1-t2-rotulocerto/src/pages/todos-alimentos.html <br> 2) Clique na seta para avançar a página ou voltar até encontrar o alimento dessejado <br> |
| **Requisitos associados** | RF-001                                                                                                                                                                                                                      |
|  **Resultado esperado**   | Encontro do alimento dessejado                                                                                                                                                                                              |
|   **Dados de entrada**    | Nenhum                                                                                                                                                                                                                      |
|   **Resultado obtido**    | Sucesso                                                                                                                                                                                                                     |

|     **Caso de Teste**     | **CT05 - Realizar o teste de IMC**                                                                                                                                                                                                                                                                                                   |
| :-----------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|     **Procedimento**      | 1) Acesse o endereço https://icei-puc-minas-pmv-si.github.io/pmv-si-2024-1-pe1-t2-rotulocerto/src/index.html <br> 2) Através do header de navegação, acesse o menu "Saúde" e, posteriormente, o submenu "Teste de IMC"  <br> 3) Selecione o sexo e preencha os campos de idade, altura e peso <br> 4) Clicar no botão "Calcular IMC" |
| **Requisitos associados** | RF-012                                                                                                                                                                                                                                                                                                                               |
|  **Resultado esperado**   | Exibição do resultado de IMC do usuário e da tabela com as referências                                                                                                                                                                                                                                                               |
|   **Dados de entrada**    | Homem / 24 / 168 / 60                                                                                                                                                                                                                                                                                                                |
|   **Resultado obtido**    | Sucesso                                                                                                                                                                                                                                                                                                                              |

|     **Caso de Teste**     | **CT06 - Diferentes Navegadores**                                                                                                                                                                                                                                                                                        |
| :-----------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|     **Procedimento**      | 1) O usuário escolhe um dos principais navegadores disponiveis: Google Chrome, Monzilla Firefox ou Microsotf Edge <br> 2) Acesse o endereço https://icei-puc-minas-pmv-si.github.io/pmv-si-2024-1-pe1-t2-rotulocerto/src/index.html <br> 3) O usuário deve navegar em diferentes páginas e funcionalidades da aplicação. |
| **Requisitos associados** | RNF-002                                                                                                                                                                                                                                                                                                                  |
|  **Resultado esperado**   | A aplicação deve funcionar normalmente sem dificuldade na renderização das paginas ou problemas nas funcionalidades do sistema.                                                                                                                                                                                          |
|   **Dados de entrada**    | Nenhum.                                                                                                                                                                                                                                                                                                                  |
|   **Resultado obtido**    | Sucesso                                                                                                                                                                                                                                                                                                                  |

|     **Caso de Teste**     | **CT07 - exibir os participantes do desenvolvimento do projeto e seus githubs e linkedins**                                                                                                      |
| :-----------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|     **Procedimento**      | 1) Acesse o endereço https://icei-puc-minas-pmv-si.github.io/pmv-si-2024-1-pe1-t2-rotulocerto/src/pages/sobrenos.html <br> 2) Clique no botao do linkedin ou github do participante que preferir |
| **Requisitos associados** | RF-015                                                                                                                                                                                           |
|  **Resultado esperado**   | Visitar o Linkedin ou Github do participante do projeto                                                                                                                                          |
|   **Dados de entrada**    | Nenhum                                                                                                                                                                                           |
|   **Resultado obtido**    | Sucesso                                                                                                                                                                                          |

|     **Caso de Teste**     | **CT08 - exibir mercados mais próximos**                                                                                                                                                              |
| :-----------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     **Procedimento**      | 1) Acesse o endereço https://icei-puc-minas-pmv-si.github.io/pmv-si-2024-1-pe1-t2-rotulocerto/src/pages/mercados.html <br> 2) Ative a localização no navegador <br> 3) Veja os mercados mais proximos |
| **Requisitos associados** | RF-009                                                                                                                                                                                                |
|  **Resultado esperado**   | Encontrar os mercados mais próximos de você                                                                                                                                                           |
|   **Dados de entrada**    | Localização                                                                                                                                                                                           |
|   **Resultado obtido**    | Sucesso                                                                                                                                                                                               |

|     **Caso de Teste**     | **CT09 - exibir profissionais de nutrição mais próximos**                                                                                                                                                                         |
| :-----------------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     **Procedimento**      | 1) Acesse o endereço https://icei-puc-minas-pmv-si.github.io/pmv-si-2024-1-pe1-t2-rotulocerto/src/pages/profissionais-saude.html <br> 2) Ative a localização no navegador <br> 3) Veja os profissionais de nutrição mais próximos |
| **Requisitos associados** | RF-003                                                                                                                                                                                                                            |
|  **Resultado esperado**   | Encontrar profissionais de nutrição mais próximos                                                                                                                                                                                 |
|   **Dados de entrada**    | Localização                                                                                                                                                                                                                       |
|   **Resultado obtido**    | Sucesso                                                                                                                                                                                                                           |

|     **Caso de Teste**     | **CT10 - exibir a responsividade da aplicação**                                                                                                                                                                         |
| :-----------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     **Procedimento**      | 1) Acesse o endereço https://icei-puc-minas-pmv-si.github.io/pmv-si-2024-1-pe1-t2-rotulocerto/src/index.html ou qualquer pagina da aplicação <br> 2) coloque em diferentes tamanhos de janela para ver a responsividade |
| **Requisitos associados** | RNF-001                                                                                                                                                                                                                 |
|  **Resultado esperado**   | Testar a responsividade da aplicação                                                                                                                                                                                    |
|   **Dados de entrada**    | Nenhum                                                                                                                                                                                                                  |
|   **Resultado obtido**    | Sucesso                                                                                                                                                                                                                 |

|     **Caso de Teste**     | **CT11 - Mover a tela automaticamente ao clicar no botão referente a seção desejada**                                                                                                                                                                                            |
| :-----------------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     **Procedimento**      | 1) Acesse o endereço https://icei-puc-minas-pmv-si.github.io/pmv-si-2024-1-pe1-t2-rotulocerto/src/pages/index.html <br> 2) Clicar em qualquer um dos botões: alimentos, saúde, mercados, recomendações, sugestões. 3) esperar a página inicial move a tela até a seção escolhida |
| **Requisitos associados** | RF-016                                                                                                                                                                                                                                                                           |
|  **Resultado esperado**   | Aplicação deve renderizar a pagina inicial e ser possivel acessar as seções da pagina utilizando os botões                                                                                                                                                                       |
|   **Dados de entrada**    | Nenhum                                                                                                                                                                                                                                                                           |
|   **Resultado obtido**    | Sucesso                                                                                                                                                                                                                                                                          |

|     **Caso de Teste**     | **CT12 - Realizar login como administrador**                                                                                                                                                                                                                              |
| :-----------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     **Procedimento**      | 1) Acesse o endereço https://icei-puc-minas-pmv-si.github.io/pmv-si-2024-1-pe1-t2-rotulocerto/src/index.html <br> 2) Clique em "Acesso Admin", no header da aplicação <br> 3) Insira os dados de entrada nos campos "Usuário" e "Senha" <br> 4) Clique no botão "Acessar" |
| **Requisitos associados** | RF-014                                                                                                                                                                                                                                                                    |
|  **Resultado esperado**   | Login e redirecionamento para a tela de Sugestões Enviadas                                                                                                                                                                                                                |
|   **Dados de entrada**    | Usuário: rotulocerto@gmail.com / Senha: senha22                                                                                                                                                                                                                           |
|   **Resultado obtido**    | Sucesso                                                                                                                                                                                                                                                                   |

|     **Caso de Teste**     | **CT13 - A aplicação deve ser desenvolvida com HTML, CSS e Javascript**                                                                             |
| :-----------------------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
|     **Procedimento**      | 1) Acesso o diretório do projeto através de: https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t2-rotulocerto <br> 2) Acesse a pasta "src" |
| **Requisitos associados** | RNF-005                                                                                                                                             |
|  **Resultado esperado**   | Código do projeto todo desenvolvido utilizando HTML, CSS e Javascript                                                                               |
|   **Dados de entrada**    | Nenhum                                                                                                                                              |
|   **Resultado obtido**    | Sucesso                                                                                                                                             |

|     **Caso de Teste**     | **CT14 - Visualizar as recomendações estáticas de pessoas que utilizam a plataforma**                                                                                                                                           |
| :-----------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     **Procedimento**      | 1) Acesse o endereço https://icei-puc-minas-pmv-si.github.io/pmv-si-2024-1-pe1-t2-rotulocerto/src/index.html <br> 2) Nessa mesma página, desça a barra de rolagem até chegar na seção "Quem usou a plataforma também recomenda" |
| **Requisitos associados** | RF-017                                                                                                                                                                                                                          |
|  **Resultado esperado**   | Visualizar as recomendações estáticas                                                                                                                                                                                           |
|   **Dados de entrada**    | Nenhum                                                                                                                                                                                                                          |
|   **Resultado obtido**    | Sucesso                                                                                                                                                                                                                         |


|     **Caso de Teste**     | **CT15 - Enviar sugestões na plataforma**                                                                                                                                                                                          |
| :-----------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     **Procedimento**      | 1) Acesse o endereço https://icei-puc-minas-pmv-si.github.io/pmv-si-2024-1-pe1-t2-rotulocerto/src/pages/enviar-sugestoes.html <br> 2) Preencha os campos de Nome Completo, Email e Sugestão <br> 3) Clique no botão de Enviar <br> |
| **Requisitos associados** | RF-003                                                                                                                                                                                                                             |
|  **Resultado esperado**   | Campos do formulário limpo após envio                                                                                                                                                                                              |
|   **Dados de entrada**    | Campo - Nome Completo: João Marcos <br> Campo - Email: joaomarcos@email.com <br> Campo - Sugestão: Gostaria de sugerir uma sessão de comentários nas páginas das receitas.                                                         |
|   **Resultado obtido**    | Sucesso                                                                                                                                                                                                                            |


|     **Caso de Teste**     | **CT16 - Consultar sugestões que foram enviadas a plataforma**                                                                                                                                                                                                                                       |
| :-----------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     **Procedimento**      | 1) Acesse o endereço https://icei-puc-minas-pmv-si.github.io/pmv-si-2024-1-pe1-t2-rotulocerto/src/pages/login-admin.html <br> 2) Loque na plataforma como admin <br> 3) Acesso o endereço https://icei-puc-minas-pmv-si.github.io/pmv-si-2024-1-pe1-t2-rotulocerto/src/pages/sugestoes-enviadas.html |
| **Requisitos associados** | RF-002                                                                                                                                                                                                                                                                                               |
|  **Resultado esperado**   | Visualizar a lista de sugestões enviadas                                                                                                                                                                                                                                                             |
|   **Dados de entrada**    | Campo Usuário: rotulocerto@gmail.com <br> Campo Senha: senha22                                                                                                                                                                                                                                       |
|   **Resultado obtido**    | Sucesso                                                                                                                                                                                                                                                                                              |


|     **Caso de Teste**     | **CT17 - A aplicação deve contar com um header de navegação rápida**                                                                                                         |
| :-----------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     **Procedimento**      | 1) Acesse o endereço https://icei-puc-minas-pmv-si.github.io/pmv-si-2024-1-pe1-t2-rotulocerto/src/index.html <br> 2) Navegue pelas páginas ultilizando o header da aplicação |
| **Requisitos associados** | RNF-002                                                                                                                                                                      |
|  **Resultado esperado**   | Navegar pelas páginas do site com sucesso                                                                                                                                    |
|   **Dados de entrada**    | Nenhum                                                                                                                                                                       |
|   **Resultado obtido**    | Sucesso                                                                                                                                          

|     **Caso de Teste**     | **CT18 - Adequação da aplicação às Heuríssticas de Nielsen**                                                                            |
| :-----------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     **Procedimento**      | 1) Acesse o endereço https://icei-puc-minas-pmv-si.github.io/pmv-si-2024-1-pe1-t2-rotulocerto/src/index.html <br> 2) De acordo com as heurísticas de Nielsen, foram implementadas interfaces semples e intuitivas para o usuário |
| **Requisitos associados** | RNF-003                                                                                                                                                                      |
|  **Resultado esperado**   | O usuário deve conseguir navegar de maneiras simples e intuitiva                                                                                                                                 |
|   **Dados de entrada**    | Nenhum                                                                                                                                                                       |
|   **Resultado obtido**    | Sucesso                                                                                                                                                                      |



## Registro dos Testes de Software


| *Caso de Teste*                   | *CT01 - Consultar Receita Por Objetivo*                                                                                                                                                                                                                                                                                                                                                    |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Requisito Associado               | RF-010 - A aplicação deve exibir dietas comuns com diferentes objetivos                                                                                                                                                                                                                                                                                                                    |
| Link do vídeo do teste realizado: | [Link - Caso de teste 01](https://sgapucminasbr-my.sharepoint.com/personal/1517072_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=ESOBeBVwWWBFgEfoDOxVvm4BAQFdxGQhTYT6foFnPoLZFg&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=yBLuNc) |


| *Caso de Teste*                   | *CT02 - Consultar Receita Por Nome*                                                                                                                                                                                                                                                                                                                                                        |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Requisito Associado               | RF-010 - A aplicação deve exibir dietas comuns com diferentes objetivos                                                                                                                                                                                                                                                                                                                    |
| Link do vídeo do teste realizado: | [Link - Caso de teste 02](https://sgapucminasbr-my.sharepoint.com/personal/1517072_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=EUpsFuyj0z1DmAL8iYwf8jYBmAdYwhcBwu0HxAVC91W6mg&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=qjI30H) |


| *Caso de Teste*                   | *CT03 - Consultar Receita Por Ingrediente*                                                                                                                                                                                                                                                                                                                                                 |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Requisito Associado               | RF-010 - A aplicação deve exibir dietas comuns com diferentes objetivos                                                                                                                                                                                                                                                                                                                    |
| Link do vídeo do teste realizado: | [Link - Caso de teste 03](https://sgapucminasbr-my.sharepoint.com/personal/1517072_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=ERt_W6F5ypxDvviFsnPnSbsB5gau_l3FwP1j4IR5f0p52A&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=DTN1fh) |

| *Caso de Teste*                   | *CT05 -  Realizar o teste de IMC*                                                                                                                                                                                                                                                                                                                                                          |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Requisito Associado               | RF-012 - A aplicação deve permitir que o usuário realize o teste de IMC                                                                                                                                                                                                                                                                                                                    |
| Link do vídeo do teste realizado: | [Link - Caso de teste 05](https://sgapucminasbr-my.sharepoint.com/personal/1517072_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=ERVzF8Zfpo9Hl9Db3rsPfE4BOuqLJa3NOHQlb-JHDI1Ppw&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=DEAgql) |

| *Caso de Teste*                   | *CT06 - Diferentes Navegadores*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisito Associado               | RNF-002 - A aplicação deve ser compatível com principais navegadores                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Link do vídeo do teste realizado: | [Link - Caso de teste 06 - Firefox Monzilla](https://sgapucminasbr-my.sharepoint.com/personal/1517072_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=EQGhAG7kTgdGqsffxMO-mP0B6KaXw3RFNpSIzUbz0cq8Gw&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=pd5ibd) <br> [Link - Caso de teste 06 - Google Chrome](https://sgapucminasbr-my.sharepoint.com/personal/1517072_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=ETqkg9ci-gVMhu2rqSOD0noBg6rPAcCv8rzeIrBLSAA6HQ&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=1CNSOt) <br> [Link - Caso de teste 06 - Microsoft Edge](https://sgapucminasbr-my.sharepoint.com/personal/1517072_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=ETdP2MHPNa1PkO1zuodindQB-UWEK3MQtNAP_LpjA9CVJw&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=bDNDCW) |

| *Caso de Teste*                   | *CT07 - exibir os participantes do desenvolvimento do projeto e seus githubs e linkedins*                                                                                                                                                                                                                                                                                                  |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Requisito Associado               | RF-015 - A aplicação deve exibir os participantes do desenvolvimento do projeto.                                                                                                                                                                                                                                                                                                           |
| Link do vídeo do teste realizado: | [Link - Caso de teste 07](https://sgapucminasbr-my.sharepoint.com/personal/1517072_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=ESFcexglN3NLktVJlzfoWt0BXbpUEukgSztNHRPwZY6rVQ&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=bsatLR) |

| *Caso de Teste*                   | *CT08 - exibir mercados mais próximos*                                                                                                                                                                                                                                                                                                                                                     |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Requisito Associado               | RF-009 - A aplicação deve exibir mercados mais próximos                                                                                                                                                                                                                                                                                                                                    |
| Link do vídeo do teste realizado: | [Link - Caso de teste 08](https://sgapucminasbr-my.sharepoint.com/personal/1517072_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=EaybeIduVVJJjZan3_APmikBAoFmosiBSvoDUEi7mghnYg&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=gepGYQ) |

| *Caso de Teste*                   | *CT09 - exibir profissionais de nutrição mais próximos*                                                                                                                                                                                                                                                                                                                                    |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Requisito Associado               | RF-003 -	A aplicação deve permitir que o usuário envie sugestões de produtos ou informações nutricionais                                                                                                                                                                                                                                                                                   |
| Link do vídeo do teste realizado: | [Link - Caso de teste 09](https://sgapucminasbr-my.sharepoint.com/personal/1517072_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=EX3-HYgs1uNCvkX0iWv903oBYL5MxH1SQGjmRuz3RXXwWw&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=prbR9R) |

| *Caso de Teste*                   | *CT10 - exibir a responsividade da aplicação*                                                                                                                                                                                                                                                                                                                                              |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Requisito Associado               | RNF-001 -	A aplicação deve ser responsiva                                                                                                                                                                                                                                                                                                                                                  |
| Link do vídeo do teste realizado: | [Link - Caso de teste 10](https://sgapucminasbr-my.sharepoint.com/personal/1517072_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=ETEsoqqPletGqZ7TJAprcNABqeAELj6wWM7_RouAg94m_w&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=RvQmFw) |

| *Caso de Teste*                   | *CT11 - Mover a tela automaticamente ao clicar no botão referente a seção desejada*                                                                                                                                                                                                                                                                                                        |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Requisito Associado               | RF-016 - A aplicação deve ter uma página inicial informativa que apresenta o propósito da plataforma e que incentive os usuarios a utilizar a aplicação                                                                                                                                                                                                                                    |
| Link do vídeo do teste realizado: | [Link - Caso de teste 11](https://sgapucminasbr-my.sharepoint.com/personal/1517072_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=EdEjKW06V2BLhjT_FZWbSuoBiH6FZdH0Ntx67gdu59sHgQ&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=Q2NhuF) |

| *Caso de Teste*                   | *CT12 -  Realizar login como administrador*                                                                                                                                                                                                                                                                                                                                                |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Requisito Associado               | RF-014 - A aplicação deve permitir que os administradores façam login para terem acesso as sugestões envidas pelo formulario                                                                                                                                                                                                                                                               |
| Link do vídeo do teste realizado: | [Link - Caso de teste 12](https://sgapucminasbr-my.sharepoint.com/personal/1517072_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=EUBoYnHfKEJLtCX70niT-VwBQje7CuWWj4uRX8WBQTFfzg&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=a6sthm) |

| *Caso de Teste*                   | *CT13 -  A aplicação deve ser desenvolvida com HTML, CSS e Javascript*                                                                                                                                                                                                                                                                                                                     |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Requisito Associado               | RNF-005 - A aplicação deve ser desenvolvida com Frontend ( Javascript, HMTL, CSS)                                                                                                                                                                                                                                                                                                          |
| Link do vídeo do teste realizado: | [Link - Caso de teste 13](https://sgapucminasbr-my.sharepoint.com/personal/1517072_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=EXrPLXu8LhJGifNNENfayfEBBn10iShsywEYEEle1Kltyg&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=SHE0yB) |

| *Caso de Teste*                   | *CT14 -  Visualizar as recomendações estáticas de pessoas que utilizam a plataforma*                                                                                                                                                                                                                                                                                                       |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Requisito Associado               | RF-017 - A aplicação deve exibir recomendações estáticas de pessoas que utilizam a plataforma                                                                                                                                                                                                                                                                                              |
| Link do vídeo do teste realizado: | [Link - Caso de teste 14](https://sgapucminasbr-my.sharepoint.com/personal/1517072_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=EdVbfukmlnROsXKBpYdYrfABXqDomj64c3EpV6az--2Lhw&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=ENm7LX) |

| *Caso de Teste*                   | *CT15 -  Enviar sugestões na plataforma*                                                                                                                                                                                                                                                                                                                                              |
| :-------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Requisito Associado               | RF-003 - A aplicação deve permitir que o usuário envie sugestões de produtos ou informações nutricionais                                                                                                                                                                                                                                                                              |
| Link do vídeo do teste realizado: | [Link - Caso de teste 15](https://sgapucminasbr-my.sharepoint.com/personal/1517072_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=ES98hNcwKMtGl6betwM2MYsB4hTGF4hLWFf10sfdPRqoEg&e=xgiwpA&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D) |

| *Caso de Teste*                   | *CT16 - Consultar sugestões que foram enviadas a plataforma*                                                                                                                                                                                                                                                                                                                          |
| :-------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Requisito Associado               | RF-002 - A aplicação deve permitir que os administradores visualizem os formulários de sugestões que foram enviados pelos usuários                                                                                                                                                                                                                                                    |
| Link do vídeo do teste realizado: | [Link - Caso de teste 16](https://sgapucminasbr-my.sharepoint.com/personal/1517072_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=ESbZv-0yOsBIvhMW4jsSc6ABVPgd67u55bl3HWJ01BvZCQ&e=nkaJcX&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D) |


| *Caso de Teste*                   | *CT17 - A aplicação deve contar com um header de navegação rápida*                                                                                                                                                                                                                                                                                                                    |
| :-------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Requisito Associado               | RNF-002 - A aplicação deve contar com um header de navegação rápida                                                                                                                                                                                                                                                                                                                   |
| Link do vídeo do teste realizado: | [Link - Caso de teste 17](https://sgapucminasbr-my.sharepoint.com/personal/1517072_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=EdUPQYK5-BtApwQ3tikQtZABFsAepgZ7IGFTXQMJX9hujw&e=N4hIla&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D) |

| *Caso de Teste*                   | *CT18 - Adequação da aplicação às Heuríssticas de Nielsen*                                                                                                                                                                                                                                                                                                                    |
| :-------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Requisito Associado               | RNF-003 - A aplicação deve seguir as heurísticas de Nielsen                                                                                                                                                                                                                                                                                                                 |
| Link do teste realizado: | [Link - Caso de teste 18]([https://sgapucminasbr-my.sharepoint.com/personal/1517072_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=EdUPQYK5-BtApwQ3tikQtZABFsAepgZ7IGFTXQMJX9hujw&e=N4hIla&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D](https://sgapucminasbr-my.sharepoint.com/personal/1464466_sga_pucminas_br/_layouts/15/onedrive.aspx?id=%2Fpersonal%2F1464466_sga_pucminas_br%2FDocuments%2FProjeto%2Fprova%20de%20teste%20heuristicas%2Epdf&parent=%2Fpersonal%2F1464466_sga_pucminas_br%2FDocuments%2FProjeto&ga=1)) |



## Avaliação dos Testes de Software

Durante a execução dos exames de software, foi alcançadas descobertas significativas que fornecem dados importantes sobre a plataforma. Essas análises foram voltadas para avaliar a qualidade, funcionalidade e confiabilidade do software, destacando tanto seus aspectos positivos quanto as áreas que necessitam de melhorias. Os testes atenderam as expectativas e foram consistentes, o que mostrou que a solução desenvolvido atendeu aos requisitos. Todos os principais cenários de requisitos funcionais e não funcionais foram cobertos pelos testes, garantindo que essas funções fossem testadas.

Alguns aspectos que precisam ser melhorados são:
 - adição de filtros na tabela que exibe todos os alimentos da aplicação;
 - ao clicar no dropdown do header, usando a versão desktop, um menu só é fechado quando o clique ocorre nele, resultando em um menu sobrepondo outro. A solução para isso seria sempre que houver um clique fora do menu, fechar a aba do dropdown que já estava aberta;
 - no header, usando a versão mobile, ao abrir o menu, uma parte dele está sobrepondo o footer, em telas com conteúdo menor. Como solução, poderíamos alterar o layout de cores do header, evitando assim uma confusão visual;
 - ao enviar uma sugestao no formulário, seria interessante que o sistema retornasse uma mensagem de confirmação para que as pessoas saibam que a sugestão foi enviada.

Em resumo, pode-se afirmar que avaliar testes a respeito de software é um ponto importante para uma melhor garantia de funcionamento do projeto.

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

## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário                                                                                                                                                            |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1             | Você é uma pessoa que deseja saber os valores nutricionais do Pão francês. Encontre no site dentro da aba de todos os alimentos o alimento Pão francês.                         |
| 2             | Você é uma pessoa que deseja saber os valores nutricionais do Macarrão Cozido, s/ sal. Encontre no site dentro da aba de todos os alimentos o alimento Macarrão Cozido, s/ sal. |
| 3             | Você é uma pessoa que deseja se orientar sobre o intervalo de peso considerado ideal para ter uma qualidade de vida melhor.                                                     |
| 4             | Você é uma pessoa que deseja enviar sugestões de melhoria para a plataforma. Encontre no site como você pode enviar sugestões de melhoria e envie uma.                          |
| 5             | Você é uma pessoa que deseja se orientar sobre os alimentos que são ricos em fibras e proteínas para realizar uma dieta mais saudável                                           |


## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que deseja saber os valores nutricionais do Pão francês. Encontre no site dentro da aba de todos os alimentos o alimento Pão francês.

| Usuário                                    | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
| ------------------------------------------ | --------------- | -------------------- | ------------------------------- |
| 1 (estudante de nutrição)                  | SIM             | 5                    | 16.89 segundos                  |
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

Cenário 3: Você é uma pessoa que deseja se orientar sobre o intervalo de peso considerado ideal para ter uma qualidade de vida melhor.

| Usuário                                    | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
| ------------------------------------------ | --------------- | -------------------- | ------------------------------- |
| 4                                          | SIM             | 5                    | 14.06 segundos                  |
| 5                                          | SIM             | 5                    | 7.67 segundos                   |
| 6                                          | SIM             | 4                    | 15.05 segundos                  |
|                                            |                 |                      |                                 |
| **Média**                                  | 100%            | 4.67                 | 12.26 segundos                  |
| **Tempo para conclusão pelo especialista** | SIM             | 5                    | 7.11 segundos                   |

    Comentários dos usuários: O teste de IMC é intuitivo para ser feito. A tabela gerada com os
    resultados, após a o clique em "Calcular IMC" está um pouco confusa para entender, devido a
    disposição das informações, principalmente quando testado pelo navegador do celular.


Cenário 4: Você é uma pessoa que deseja enviar sugestões de melhoria para a plataforma. Encontre no site como você pode enviar sugestões de melhoria e envie uma.

| Usuário                                    | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
| ------------------------------------------ | --------------- | -------------------- | ------------------------------- |
| 7                                          | SIM             | 4                    | 31.55 segundos                  |
| 8                                          | SIM             | 4                    | 30.02 segundos                  |
| 9                                          | SIM             | 4                    | 28.05 segundos                  |
|                                            |                 |                      |                                 |
| **Média**                                  | 100%            | 4                    | 29.88 segundos                  |
| **Tempo para conclusão pelo especialista** | SIM             | 5                    | 14.15 segundos                  |

    Comentários dos usuários: Encontrar e enviar a sugestão é bem rápida, mas, após clicar em enviar sugestão,
    ficaram um pouco confusos se a sugestão foi realmente enviada, porque o site não retorna nenhuma mensagem de que
    o envio foi feito com sucesso  

Cenário 5: Você é uma pessoa que deseja se orientar sobre os alimentos que são ricos em fibras e proteínas para realizar uma dieta mais saudável.
    

| Usuário                                    | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
| ------------------------------------------ | --------------- | -------------------- | ------------------------------- |
| 10                                         | SIM             | 5                    | 11.06 segundos                  |
| 11                                         | SIM             | 5                    | 10.25 segundos                  |
| 12                                         | SIM             | 5                    | 12.06 segundos                  |
|                                            |                 |                      |                                 |
| **Média**                                  | 100%            | 5                    | 11.12 segundos                  |
| **Tempo para conclusão pelo especialista** | SIM             | 5                    | 9.15 segundos                   |

    Comentários dos usuários: O site tem uma boa interativadidade com seus usuários. No Ranking de alimentos, verifiquei os alimentos que 
    procurava. Porém, senti a falta de informações sobre alimentos que possam ser adicionados na tabela, para uma melhor conclusão do que incluir
    em minha dieta.




## Avaliação dos Testes de Usabilidade

Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Os pontos a serem melhorados segundo os usuários são em relação principalmente a falta do filtro na página de todos os alimentos, já que seria útil o filtro de alimentos em ambas as páginas, tanto na de ranking de alimentos quanto na todos os alimentos.

Quanto aos aspectos positivos, os usuários mencionaram a intuitividade e a navegabilidade eficiente do site, além de um design simples e um layout atraente. Eles também destacaram a facilidade de acesso às páginas mais relevantes para a aplicação, entre outros pontos.

Em resumo, a avaliação de teste de usuário não apenas confirma a funcionalidade, mas também orienta o aprimoramento contínuo da aplicação, visando torná-la mais intuitiva e eficiente, de acordo com as necessidades reais dos usuários.
