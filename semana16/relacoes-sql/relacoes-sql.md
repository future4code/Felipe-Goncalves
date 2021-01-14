1-
A- No contexto dos banco de dados, o conceito de chave estrangeira ou chave externa se refere ao tipo de relacionamento entre distintas tabelas de dados do banco de dados. Uma chave estrangeira é chamada quando há o relacionamento entre duas tabelas.

B- 
```
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"001",
    "Muito bom!",
    7,
	"001"
);

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"002",
    "Exelente!",
    9,
	"002"
);
```

C- aparecerá o erro 1452, que significa que você está tentando adicionar uma linha à sua tabela para a qual nenhuma linha correspondente.

D- 
```
ALTER TABLE Movie DROP COLUMN rating;
```

2 - 

A- O comando se refere a criação de uma tabela com duas colunas e duas chaves estrangegeiras, onde irão relacionar entre si.

B-
```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"001",
    "001"
);
 
	INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"002",
    "001"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"001",
    "002"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"002",
    "002"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"005",
    "001"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"005",
    "003"
);
```

C-  aparecerá o erro 1452, que significa que você está tentando adicionar uma linha à sua tabela para a qual nenhuma linha correspondente.

D- 
Dará o erro 1054 esse erro ocorre geralmente quando a coluna não existe, foi digitada errada, faltou aspas em um valor que acabou sendo interpretado como uma coluna.

3-

A- O comando se refere a fazer um busca por toda a tabela e fazer um junção das tabelas Ratind em Move.id que ira ter um resultado = Rating.Movie.id

B- 
```
SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;
```

4- 

A- 
```
SELECT m.id as movie_id, m.title, r.rate as rating, r.comment as rating_comment
FROM Movie m
LEFT JOIN Rating r ON m.id = r.movie_id;
```

B-
``` 
SELECT m.id as movie_id, m.title, mc.actor_id FROM Movie m
RIGHT JOIN MovieCast mc ON mc.movie_id = m.id;
```

C- 
```
SELECT AVG(r.rate), m.id, m.title FROM Movie m
LEFT JOIN Rating r ON m.id = r.movie_id
GROUP BY (m.id);
```

5-

A- Precisamos de dois JOIN pois serão duas junções feitas, assim, temos que fazer duas uniões para que o resultado final seja o esperado.

B- 
```
SELECT m.id as movie_id, m.title, a.id as actor_id, a.name FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```

C- Retornará um erro 1054 de coluna nao reconhecida.

D- 
```
SELECT 
		m.id as movie_id, 
    m.title, 
    a.id as actor_id, 
    a.name, 
    r.rate, 
    r.comment 
FROM Movie m
LEFT JOIN Rating r on r.movie_id = m.id
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```

6- 

A- 


