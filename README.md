# 2020.2_G2_Logico_PrologTomatoes

**Disciplina**: FGA0210 - PARADIGMAS DE PROGRAMAÇÃO - T01 <br>
**Nro do Grupo**: 2<br>
**Paradigma**: Lógico<br>

## Alunos
|Matrícula | Aluno |
| -- | -- |
| 15/01499948  |  Thiago Ferreira |
| 17/0062686  |  Pedro Rodrigues Pereira |
| 17/0008371  |  Daniel de Sousa Oliveira Melo Veras |

## Sobre 
O projeto desenvolvido foi criado através de uma amostra de dados obtida do dataset do IMDB. Com esse dataset criamos um recomendador de filmes utilizando prolog, flask e react, o qual, através de perguntas, o usuário será recomendado um filme dos 500 disponíveis na amostra.


## Screenshots
![One](https://user-images.githubusercontent.com/48137972/112924078-daefef00-90e5-11eb-8fee-50a75aa33221.png)
![Two](https://user-images.githubusercontent.com/48137972/112924085-e0e5d000-90e5-11eb-9187-bf7e85ef6ac3.png)


## Instalação 
**Linguagens**: Prolog, Python, Javascript<br>
**Tecnologias**: Flask, ReactJS, swipl, Jupyter Notebook<br>

### Para instalar o swipl

% sudo apt-add-repository ppa:swi-prolog/stable
% sudo apt-get update
% sudo apt-get install swi-prolog

### Para instalar o restante das dependências
% pip3 install -r backend/requirements.txt

### Para instalar as dependências do frontend
% yarn

## Uso 

Feito a instalação das dependências, é necessário rodar os seguinte comandos, subindo a API e o Frontend:

* python3 backend/src/main.py
* yarn start (dentro da pasta frontend)

## Vídeo
Adicione 1 ou mais vídeos com a execução do projeto.

## Outros 
Iniciamos o trabalho com a modelagem dos dados para disposição no código em prolog, usando o dataset de reviews do IMDB.

Através deste dataset, tratamos os dados, utilizando, principalmente regex. Esse tratamento foi feito utilizando o Jupyter Notebook. Neste, definimos 7 categorias de filmes os quais dariamos como opção para o usuário na plataforma de recomendação. 

Com as 7 categorias definidas, cortamos o restante dos filmes e então, selecionamos uma amostra aleatória de 500 filmes, dentre os 7 gêneros. Com isso, utilizamos o jupyter para gerar o código prolog para a inserção dos 500 filmes no recomendador de filmes.

