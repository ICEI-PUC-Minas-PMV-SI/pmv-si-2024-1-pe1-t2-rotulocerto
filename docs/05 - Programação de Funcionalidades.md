# Programação de Funcionalidades

Nesta etapa descrevemos os artefatos e estruturas de dados que foram desenvolvidas para atender os requisitos nas Especificações do Projeto. As tecnologias utilizadas foram HTML, CSS e Javascript.


## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

| ID     | Descrição do Requisito                                                                                                                         | Responsável                   | Artefato Criado            |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | -------------------------- |
| RF-001 | A aplicação deve informar o usuário sobre determinados tipos de alimentos                                                                      | Marcus Oliveira               | todos-alimentos.html       |
| RF-002 | A aplicação deve permitir que os administradores visualizem os formulários de sugestões que foram enviados pelos usuários                      | Ítalo Penaforte               | sugestoes-enviadas.html    |
| RF-003 | A aplicação deve permitir que o usuário envie sugestões de produtos ou informações nutricionais                                                | Raul Duarte                   | enviar-sugestoes.html      |
| RF-004 | A aplicação deve informar o usuário sobre rótulos de alimentos                                                                                 | Raul Duarte - Fernando Colini | aprenda-sobre-rotulos.html |
| RF-005 | A aplicação deve exibir um ranking de melhores alimentos em valor nutricional                                                                  | Marcus Oliveira               | ranking-alimentos.html     |
| RF-006 | A aplicação deve exibir profissionais de nutrição mais próximos                                                                                | Marcus Oliveira               | profissionais-saude.html   |
| RF-007 | A aplicação deve informar sobre os símbolos informativos na rotulagem frontal dos produtos (Exemplo: Alto em Açúcar Adicionado)                | Raul Duarte - Fernando Colini | aprenda-sobre-rotulos.html |
| RF-008 | A aplicação deve informar sobre os aditivos presentes nos alimentos (Exemplo: Acidificante e-338 a.k.a. ácido fosfórico)                       | Raul Duarte - Fernando Colini | aprenda-sobre-rotulos.html |
| RF-009 | A aplicação deve exibir mercados mais próximos                                                                                                 | Marcus Oliveira               | mercados.html              |
| RF-010 | A aplicação deve exibir dietas comuns com diferentes objetivos                                                                                 | Gabriel Carvalho              | receitas-dietas.html       |
| RF-011 | A aplicação deve permitir que o usuário filtre alimentos por nome, nutrientes, aditivos e calorias                                             | Marcus Oliveira               | ranking-alimentos.html     |
| RF-012 | A aplicação deve permitir que o usuário realize o teste de IMC                                                                                 | Lucas Alves                   | teste-de-imc.html          |
| RF-013 | A aplicação deve permitir que o usuário pesquise sobre receitas saudáveis por ingrediente específico                                           | Gabriel Carvalho              | receitas-dietas.html       |
| RF-014 | A aplicação deve permitir que os administradores façam login para terem acesso as sugestões envidas pelo formulario                            | Ítalo Penaforte               | login-admin.html           |
| RF-015 | A aplicação deve exibir os participantes do desenvolvimento do projeto                                                                         | Lucas Alves                   | sobrenos.html              |
| RF-016 | A aplicação deve ter uma página inicial informativa que apresenta o propósito da plataforma e que incentive os usuarios a utilizar a aplicação | Gabriel Carvalho              | index.html                 |
| RF-017 | A aplicação deve exibir recomendações estáticas de pessoas que ultilizam a plataforma                                                          | Gabriel Carvalho              | index.html                 |

## Descrição das estruturas:

## Produto
|  **Nome**  | **Tipo**         | **Descrição**                  | **Exemplo**                                                                                       |
| :--------: | ---------------- | ------------------------------ | ------------------------------------------------------------------------------------------------- |
|     Id     | Número (Inteiro) | Identificador único do produto | 1                                                                                                 |
|    Nome    | Texto            | Nome do produto                | Melancia                                                                                          |
| Nutrientes | Objeto           | Tipo de nutrientes             | Um objeto com a quantidade dos nutrientes ( Calorias,	Proteínas,	Gorduras,	Carboidratos,	Fibras ) |

## Receita
|   **Nome**   | **Tipo**         | **Descrição**                       | **Exemplo**                                                                                            |
| :----------: | ---------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------ |
|      Id      | Número (Inteiro) | Identificador único da receita      | 1                                                                                                      |
|    Título    | Texto            | Título da receita                   | Pizza de couve-flor                                                                                    |
|  Descrição   | Texto            | Descrição da receita                | Para fazer a pizza é necessário pegar 200g de couve-flor...                                            |
|    Imagem    | Texto            | Link da imagem                      | https://essareceitafunciona.com.br/storage/2023/04/Como-fazer-feijao-preto-Essa-Receita-Funciona-8.jpg |
|   Objetivo   | Lista            | Objetivo da receita                 | Uma lista com os objetivos da receita ( Emagrecimento, Nutrientes )                                    |
| Ingredientes | Lista            | Listagem de ingredientes da receita | Uma lista com os ingredientes da receita ( Farinha de Trigo, Sal )                                     |

## Sugestões
| **Nome**  | **Tipo**         | **Descrição**                          | **Exemplo**                                      |
| :-------: | ---------------- | -------------------------------------- | ------------------------------------------------ |
|    Id     | Número (Inteiro) | Identificador único da sugestão        | 1                                                |
|   Nome    | Texto            | Nome de quem está enviando a sugestão  | Maria Aparecida                                  |
|   Email   | Texto            | Email de quem está enviando a sugestão | mariaaparecida@hotmail.com                       |
| Descrição | Texto            | Descrição da sugestão                  | Queria que adicionassem informações sobre Pitaia |

## Usuário
| **Nome** | **Tipo**         | **Descrição**                  | **Exemplo**       |
| :------: | ---------------- | ------------------------------ | ----------------- |
|    Id    | Número (Inteiro) | Identificador único do usuário | 1                 |
|  Login   | Texto            | Login do usuário               | admininstrador123 |
|  Senha   | Texto            | Senha do usuário               | duebcas231@65456  |
|  Email   | Texto            | Email do usuário               | admin@gmail.com   |
