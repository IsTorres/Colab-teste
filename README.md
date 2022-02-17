# Colab - Teste técnico

### Link do app: https://colab-teste-istorres.vercel.app/

## Para rodar o projeto localmente:
1. Clone o repositório
  * `git clone https://github.com/istorres/Colab-teste.git`.
2. Entre na pasta do repositório que você acabou de clonar:
  * `cd Colab-teste`

3. Instale as dependências:
  * `npm install`

4. Rode o comando para iniciar a aplicação:
  * `npm run dev`

## Testes
### Testes desenvolvidos atravez do [Cypress](https://docs.cypress.io/)
 - para rodar os testes:
 - Na pasta raiz do projeto rode:
      * `npm run cypress:open`.
 - Uma janela irá aparecer com os testes de integração, clique na opção `homePage.spec.js`;
 - Isso irá rodar toda a suit de testes presente no projeto.

---------------------------------------------------------

## Sobre o projeto:

### Tecnologias utilizadas:
  - NextJS;
  - ReactJS;
  - Cypress;
  - ESLint;
  - Material UI;
  - API [RandomUser](https://randomuser.me/);

## Maiores Desafios:
  - Decidir qual biblioteca de testes utilizar;
    * Acabei optando por uma que já tinha visto funcionar mas numa tinha implementado;
  - Desenvolver utilizando o TDD;
    * Foi realmente um desafio extra tentar aplicar essa tecnica de desenvolvimento orientada a testes, contudo, a experiencia foi positiva;
  - Decidir como e quais informações exibir vindas da API;
    * Escolhi desenvolver um "card" com informações basicas e um botão que mostra as demais a partir de um click;
    * Exibi apenas info's que considerei validas, e deixei outras ocultas como senhas e chaves de criptografia;

## Pontos que gostei no projeto:
  - Uso de novas tecnologias;
    * Desenvolvi como um projeto pessoal e com isso tentei explorar novas tecnologias como o NextJS para testar a função de [server side rendering](https://nextjs.org/docs/basic-features/pages) e a facilidade do deploy quando usado com a [Vercel](https://vercel.com/)
  - Utilização do [MUI](https://mui.com/);
    * Outra biblioteca que já tinha ouvido falar, mas não tinha utilizado em projetos ainda;
 
