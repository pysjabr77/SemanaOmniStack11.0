Criando a base da aplicação

Rota -> caminho completo;
    Ex.: http://localhost:3333/users

Recurso -> funcionalida disponibilizada por uma rota;

Metodos HTTP:

    GET: buscar uma informação do back-end;
    POST: criar uma informação no back-end;
    PUT: Alterar uma informação no back-end;
    DELETE: Deletar uma informação no back-end;

Tipos de parâmetros

    - Query: parametros nomeados enviados na rota após o "?" (filtros, paginacao, etc);
        Ex.: http://localhost:3333/users?name=Pedro

        app.get('/users', (request, res) => {
            //Acessando o parametro: 
            const queryParams = request.query;

            res.json({ evento: 'Hello Semana OmniStack 11.0!', aluno: 'Pedro Yoda Saito'});
        });

    - Route Params: parâmetros utilizados para identificar recursos;
        Ex.: http://localhost:3333/users/id

        app.get('/users/:id', (request, res) => {
            //Acessando o parametro
            const routeParams = request.params;

            res.json({ evento: 'Hello Semana OmniStack 11.0!', aluno: 'Pedro Yoda Saito'});
        });

    - Request Body: corpo da requisicao, utilizado para criar ou alterar recursos;
        Ex.: http://localhost:3333/users

         app.post('/users', (request, res) => {
            //Acessando o parametro
            const bodyParams = request.body;

            res.json({ evento: 'Hello Semana OmniStack 11.0!', aluno: 'Pedro Yoda Saito'});
        });

Banco de Dados
    SQL: MySQL, SQLite, PostgresSQL, Oracle, Microsoft SQL Server, etc;
    NoSQL: MongoDB, CouchDB, etc

    Usando driver ira usar "select * from users";
    Usando query builder ira usar "table('users').select('*').where()"
        - knex.js
            Instalação: npm install knex && npx knex init
    
    Migrations: controle de versão do banco de dados;
        criando a migrate: npx knex migrate:make create_ongs;
        executando a migrate: npx knex migrate:latest;
        voltando a ultima migrate executada: npx knex migrate:rollback
