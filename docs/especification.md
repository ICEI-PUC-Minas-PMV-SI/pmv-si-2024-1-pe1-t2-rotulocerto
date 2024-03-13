# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto.

Caso deseje atribuir uma imagem a sua persona, utilize o site https://thispersondoesnotexist.com/

## Personas

1ª Persona: <br />
Dona Maria da Silva, uma mulher de 75 anos, residente em Belo Horizonte, Brasil, e anteriormente faxineira, agora aposentada, mantém um estilo de vida ativo e saudável, apesar de sua deficiência de cálcio. Com um interesse pela culinária e jardinagem, ela dedica seu tempo livre a cozinhar para a família e cuidar de seu jardim. Valorizando mais a qualidade do que o preço, ela procura por alimentos seguros e nutritivos para melhorar sua saúde óssea. Sua personalidade gentil e generosa reflete-se em sua crença na importância da integridade, solidariedade e manutenção de um estilo de vida saudável, demonstrando determinação e otimismo diante dos desafios.

2ª Persona: <br />
João Oliveira tem 32 anos formado em Administração de Empresas mas atua como Analista de Marketing em uma agência em São Paulo capital, é um corredor amador de maratona e pretende completar 365 maratonas em 365 dias, para atingir esse objetivo quer saber quais alimentos são ricos em nutrientes que ajudam a recuperação muscular.

3ª Persona: <br />
Roberto Marinho, 28 anos e sobrepeso, é um médico plantonista que trabalha muito e por conta disso não consegue tempo para cuidar da sua própria saúde. Ele prioriza bastante os outros e o trabalho, por conta disso não consegue dormir e se alimentar direito. Tem uma rotina bastante estressante trabalhando 12 horas por dia e gasta mais 4 horas do dia dele no transporte público. Com isso só sobra 8 horas para tomar um banho e ir dormir para repetir tudo novamente no dia seguinte.

4ª Persona: <br />
Carlos Silva, um brasileiro de 50 anos e técnico em informática, valoriza produtos alimentícios frescos e naturais que se adequem à sua dieta restritiva. Ele busca opções acessíveis que ofereçam praticidade e qualidade. Carlos é uma pessoa calma e prática, comprometida com sua saúde e bem-estar, e dedica parte de seu tempo livre às atividades ao ar livre e à leitura.

5ª Persona: <br /> 
Anna Júlia, uma mulher de 45 anos, residente em Belo Horizonte. é professora e mãe de Pedro. É uma pessoa que ama ler e estudar, adquirir conhecimento é fundamental para sua vida. Culinária, também é essencial para o cuidado com sua família, sempre prepara alimentos saudáveis para zelar pelo bem estar de todos, principalmente o de seu filho.

6ª Persona <br />
Carlos Augusto é um jovem estudante de 17 anos residente em Vitória. Está concluindo o ensino médio e tem hábitos de vida saudáveis com uma vida que gira em torno de praticar esportes e exercícios físicos que sempre gostou muito de se exercitar e ter uma vida ativa, cada vez mais têm se interessado por nutrição para melhor sua performance esportiva.


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| Usuária do sistema, uma senhora idosa com deficiência de cálcio | De uma maneira fácil e acessível de entender os rótulos dos alimentos | Identificar os produtos ricos em cálcio e outros nutrientes essenciais para mim. |
|João Oliveira| Buscar alimentos que contenham selênio e ômega-3| Ter uma rapida recuperação muscular |
| Usuário, um médico sobrepeso com a vida corrida, estou preocupado se minha saúde não vai piorar no dia de amanhã | Consumir alimentos mais saudáveis, porém práticos, que eu consiga encaixar na minha rotina | Que eu possa começar a cuidar de mim e conseguir viver durante longos anos. |
| Pessoa com restrições alimentares | Encontrar alimentos que se encaixem na minha rotina | encontrar uma variedade de recursos e informações que o auxiliem na sua jornada de restrições alimentares. |
| Eu como mãe atenta a alimentção saúdavel de Pedro | Preciso de rotúlos mais praticos e visíveis | Para proporcionar uma dieta saudável para meu filho |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | 
|------|-----------------------------------------|----| 
|RF-001| A aplicação deve educar o usuário sobre determinados tipos de alimentos | ALTA |  
|RF-002| A aplicação deve educar o usuário sobre rótulos de alimentos | MÉDIA |
|RF-003| A aplicação deve exibir um ranking de melhores alimentos em valor nutricional | MÉDIA |
|RF-004| A aplicação deve exibir profissionais de nutrição mais próximos | MÉDIA |
|RF-005| A aplicação deve educar sobre os símbolos informativos na rotulagem frontal dos produtos (Exemplo: Alto em Açúcar Adicionado) | MÉDIA |
|RF-006| A aplicação deve educar sobre os aditivos presentes nos alimentos (Exemplo: Acidificante e-338 a.k.a. ácido fosfórico) | MÉDIA |
|RF-007| A aplicação deve exibir mercados mais próximos | MÉDIA |
|RF-008| A aplicação deve exibir dietas comuns com diferentes objetivos | MÉDIA |
|RF-009| A aplicação deve exibir mitos e verdades sobre nutrição | BAIXA |
|RF-010| A aplicação deve permitir ao usuário encontrar um(a) profissional de nutrição mais próximo | BAIXA |
|RF-011| A aplicação deve permitir ao usuário encontrar um mercado mais próximo | MÉDIA |
|RF-012| A aplicação deve permitir que o usuário pesquisei valores nutricionais | MÉDIA |
|RF-013| A aplicação deve permitir que o usuário adicione produtos que não tenha encontrado na plataforma | ALTA |
|RF-014| A aplicação deve permitir que o usuário adicione informações nutricionais que não tenha encontrado na plataforma | MÉDIA |
|RF-015| A aplicação deve permitir que o usuário filtre alimentos ricos em algum valor nutricional | MÉDIA |
|RF-016| A aplicação deve contar com atualizações com regularidade da base de dados, com novos produtos alimentícios e suas informações | MÉDIA |
|RF-017| A aplicação deve permitir que o usuário responda à um questionário de avaliação de saúde (IMC) | MÉDIA |
|RF-018| A aplicação deve permitir que o usuário pesquise sobre receitas saudáveis por ingrediente específico | MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deve ser responsiva | ALTA | 
|RNF-002| A aplicação deve contar com acessibilidade |  MÉDIA |
|RNF-003| A aplicação deve ser compatível com principais navegadores |  MÉDIA |
|RNF-004| A aplicação deve ser intuitiva e fácil de usar |  MÉDIA |
|RNF-005| A aplicação deve contar com uma barra lateral para navegação |  MÉDIA |
|RNF-006| A aplicação deve contar com um header de navegação rápida |  MÉDIA |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Ter FrontEnd com ( Javascript, HMTL, CSS) desenvolvidos |
