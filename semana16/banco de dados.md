1-

CREATE TABLE Actor (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR (255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR(6) NOT NULL
);

A- VARCHAR(n) - strings de no máximo n caracteres.
DATE - representa uma data (YYYY-MM-DD)

B- o show databeses - ele mostra todos os bancos de dados e o tables todas as tabelas que há no banco de dados.

C- Este comando descreve a estrutura de tabelas com suas colunas e tipo de dados.

2-

A-
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Gloria Maria",
1200000 ,
"1963-09-23",
"femele"
);

B- Erro 1022 de duplicidade chave primaria.

C- Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores.

D- Código de erro: 1364. O campo 'nome' não tem um valor padrão.

E- Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date'.

3-

A- SELECT \* FROM Actor;

B- SELECT salary from Actor WHERE name = "Tony Ramos";

C- O resultado foi null, pois eles deram erro ao serem adicionados.

D- SELECT id, name, salary from Actor WHERE salary < 500000;
Tony Ramos 4000000

E- SELECT id, nome from Actor WHERE id = "002"
Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'

SELECT id, name from Actor WHERE id = "002"
002 Gloria Pires

4-

A- a query relaciona todos os nomes que comecem com a a letra A e J da seguinte forma:

SELECT \* FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

WERER = onde "inicio da condição",
LIKE= comparador de condição,
A% J%= string genérica,
AND= indica um junção "e".

B- SELECT \* FROM Actor
WHERE (name LIKE "F%") AND salary > 350000;
'007', 'Fatima Bernardes', '2200000', '1970-01-01', 'femele'

C- SELECT \* FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";
'002', 'Gloria Pires', '1200000', '1963-09-23', 'femele'
'008', 'Gloria Maria', '1200000', '1963-09-23', 'female'

D- SELECT \* FROM Actor
WHERE
(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
AND salary BETWEEN 350000 AND 900000;
'001', 'Tony Ramos', '400000', '1948-08-25', 'male'

5-

INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos.",
"2006/01/06",
7
);

INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
"002",


"Silêncio na Floresta ",
"Um acampamento na floresta que acabou virando uma grande tragédia. Dois adolescentes assassinados, dois adolescentes desaparecidos. A série polonesa é inspirada em um livro, com o mesmo nome e escrita pelo próprio produtor da série. O mistério perdura por muitos anos, e um promotor de justiça (protagonista), acredita que sua irmã desaparecida, depois de 25 anos, ainda possa estar viva. Tá aí o tipo de trama que eu gosto (risos), já vou começar por essa.",
"2020/01/06",
8
);

INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
"003",
"365 DNI",
"Pois então, esse é o polêmico, sendo bem sincera, nem sei se vale a pena, fiquei bem estarrecida com os comentários sobre ele, mas como estamos falando de filmes em alta, ele está no primeiro lugar dos mais vistos da semana. O filme faz o estilo romance erótico. Um homem rico e mafioso fica obcecado por uma mulher durante cinco anos. Persegue, stalkeia e depois a sequestra. Fazendo de tudo para que ela o ame por 365 dias. A crítica aponta romantização do abuso, assédio e da Síndrome de Estocolmo.",
"2020/06/06",
6
);

INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
"004",
"Toy Story",
"O aniversário do garoto Andy está chegando e seus brinquedos ficam nervosos, temendo que ele ganhe novos brinquedos que possam substituí-los. Liderados pelo caubói Woody, o brinquedo predileto de Andy, eles recebem Buzz Lightyear, o boneco de um patrulheiro espacial, que logo passa a receber mais atenção do garoto. Com ciúmes, Woody tenta ensiná-lo uma lição, mas Buzz cai pela janela. É o início da aventura do caubói, que precisa resgatar Buzz para limpar sua barra com os outros brinquedos.",
"1995/06/06",
9
);

INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
"005",
"Deus é Brasileiro",
"Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
"2003-01-31",
9
);

6-

A- SELECT id, title, rating FROM Movie WHERE id = "004";
'004', 'Toy Story', '9'

B- SELECT title FROM Movie WHERE id = "005"

C-
SELECT id, title, synopsis FROM Movie WHERE rating > 7;

'005', 'Deus é Brasileiro', 'Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.'

'004', 'Toy Story', 'O aniversário do garoto Andy está chegando e seus brinquedos ficam nervosos, temendo que ele ganhe novos brinquedos que possam substituí-los. Liderados pelo caubói Woody, o brinquedo predileto de Andy, eles recebem Buzz Lightyear, o boneco de um patrulheiro espacial, que logo passa a receber mais atenção do garoto. Com ciúmes, Woody tenta ensiná-lo uma lição, mas Buzz cai pela janela. É o início da aventura do caubói, que precisa resgatar Buzz para limpar sua barra com os outros brinquedos.'

'002', 'Silêncio na Floresta ', 'Um acampamento na floresta que acabou virando uma grande tragédia. Dois adolescentes assassinados, dois adolescentes desaparecidos. A série polonesa é inspirada em um livro, com o mesmo nome e escrita pelo próprio produtor da série. O mistério perdura por muitos anos, e um promotor de justiça (protagonista), acredita que sua irmã desaparecida, depois de 25 anos, ainda possa estar viva.'

7-

A-

B- SELECT \* FROM Movie
WHERE title LIKE "%TERMO DE BUSCA%" OR
synopsis LIKE "%TERMO DE BUSCA%";

C- SELECT \* FROM MOVIE
WHERE release_date < "2020-05-04";

D- SELECT \* FROM MOVIE
WHERE release_date < "2020-05-04" AND
(title LIKE "%TERMO DE BUSCA%" OR
synopsis LIKE "%TERMO DE BUSCA%") AND rating > 7;

