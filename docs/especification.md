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

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | 
|------|-----------------------------------------|----| 
|RF-001| A aplicação deve permitir que o usuário gerencie suas tarefas | ALTA |  
|RF-002| A aplicação deve permitir a emissão de um relatório de tarefas realizadas no mês   | MÉDIA | 


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deve ser responsiva | MÉDIA | 
|RNF-002| A aplicação deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Ter FrontEnd com ( Javascript, HMTL, CSS) desenvolvidos |
