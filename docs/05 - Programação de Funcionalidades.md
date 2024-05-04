# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.

O professor Rommel Carneiro apresenta alguns exemplos prontos para serem utilizados como referência:
- Login do sistema: [https://repl.it/@rommelpuc/LoginApp](https://repl.it/@rommelpuc/LoginApp) 
- Cadastro de Contatos: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

## Exemplo

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Responsável | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| A aplicação deve informar o usuário sobre determinados tipos de alimentos | Marcus Oliveira | todos-alimentos.html |
|RF-002| A aplicação deve permitir que os administradores visualizem os formulários de sugestões que foram enviados pelos usuários | Ítalo Penaforte | sugestoes-enviadas.html |
|RF-003| A aplicação deve permitir que o usuário envie sugestões de produtos ou informações nutricionais | Raul Duarte | enviar-sugestoes.html |
|RF-004| A aplicação deve informar o usuário sobre rótulos de alimentos | Raul Duarte - Fernando Colini | aprenda-sobre-rotulos.html |
|RF-005| A aplicação deve exibir um ranking de melhores alimentos em valor nutricional | Marcus Oliveira | ranking-alimentos.html |
|RF-006| A aplicação deve exibir profissionais de nutrição mais próximos | Marcus Oliveira | profissionais-saude.html |
|RF-007| A aplicação deve informar sobre os símbolos informativos na rotulagem frontal dos produtos (Exemplo: Alto em Açúcar Adicionado) | Raul Duarte - Fernando Colini | aprenda-sobre-rotulos.html |
|RF-008| A aplicação deve informar sobre os aditivos presentes nos alimentos (Exemplo: Acidificante e-338 a.k.a. ácido fosfórico) | Raul Duarte - Fernando Colini | aprenda-sobre-rotulos.html |
|RF-009| A aplicação deve exibir mercados mais próximos | Marcus Oliveira | mercados.html |
|RF-010| A aplicação deve exibir dietas comuns com diferentes objetivos | Gabriel Carvalho | receitas-dietas.html |
|RF-011| A aplicação deve permitir que o usuário filtre alimentos por nome, nutrientes, aditivos e calorias | Marcus Oliveira | ranking-alimentos.html |
|RF-012| A aplicação deve permitir que o usuário realize o teste de IMC | Lucas Alves | teste-de-imc.html |
|RF-013| A aplicação deve permitir que o usuário pesquise sobre receitas saudáveis por ingrediente específico | Gabriel Carvalho | receitas-dietas.html |
|RF-014| A aplicação deve permitir que os administradores façam login para terem acesso as sugestões envidas pelo formulario | Ítalo Penaforte | login-admin.html |
|RF-015| A aplicação deve exibir os participantes do desenvolvimento do projeto | Lucas Alves | sobrenos.html |
|RF-016| A aplicação deve ter uma página inicial informativa que apresenta o propósito da plataforma e que incentive os usuarios a utilizar a aplicação | Gabriel Carvalho | index.html |

## Descrição das estruturas:

## Notícia
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único da notícia            | 1                                              |
| Título         | Texto             | Título da notícia                         | Sistemas de Informação PUC Minas é o melhor                                   |
| Conteúdo       | Texto             | Conteúdo da notícia                       | Sistemas de Informação da PUC Minas é eleito o melhor curso do Brasil                            |
| Id do usuário  | Numero (Inteiro)  | Identificador do usuário autor da notícia | 1                                              |

