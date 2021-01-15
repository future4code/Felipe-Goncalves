1-
A- o comando apaga a cooluna salary da tabela actor.

B- O comando ALTER TABLE Actor CHANGE gender sex VARCHAR(6) altera o  nome da coluna de gender para sex e permanece o numero de 6 caracteres.

C- o comando ALTER TABLE Actor CHANGE gender gender VARCHAR(255); altera o numero maximo de caracteres do VARCHAR.

D- ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

2- 
A- 
```
UPDATE Actor SET name = "Selton Mello", birth_date = "1972/12/30" WHERE id = "003";
```

B- 

```
 UPDATE Actor SET name = "JULIANA PAES" WHERE name = "Juliana Paes";

 UPDATE Actor SET name = "Juliana Paes" WHERE name = "JULIANA PAES";
```

C- 
```
UPDATE Actor SET name = "Dalton Mello", salary = 7000000, birth_date = "1975-09-24", gender = "male" WHERE id = "005";
```

D- 
```
UPDATE Actor SET gender = "female" WHERE id = "200";
```
MySQL nao entende o comando como erro, porém retorna uma mensagem de que nem uma linha foi alterada.

3- 
A- 
```
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```

B- 
```
DELETE FROM Actor WHERE gender = "male" AND salary >1000000;
```

4-
A- 
```
SELECT MAX(salary) FROM Actor;
```

B- 
```
SELECT MIN(salary) FROM Actor WHERE gender = "female";
```

C- 
```
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```

D- 
```
SELECT SUM(salary) FROM Actor;
```

5- 
A-
```
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
```
* O comando faz a contagem das linhas e  agrupa por genero.

B- 
```
SELECT id, name FROM Actor ORDER BY name DESC; 
```

C- 
```
SELECT * FROM Actor ORDER BY salary; 
```

D- 
```
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3; 
```
E- 
```
SELECT AVG(salary), gender FROM Actor GROUP BY gender; 
```

6- 
A- 
```
ALTER TABLE Movie ADD playing_limit_date DATE;
```

B- 
```
ALTER TABLE Movie CHANGE rating rating FLOAT NOT NULL;
```

C-
```
UPDATE Movie SET playing_limit_date = "2021-02-02" WHERE id = "003";

UPDATE Movie SET playing_limit_date = "2020-02-02" WHERE id = "001";
```


D-
```
DELETE FROM Movie WHERE id = "004";
```

7- 

A- 
```
SELECT COUNT(*) FROM Movie WHERE rating >7.5 AND playing_limit_date <CURDATE();
```

B- 
```
SELECT AVG(rating) FROM Movie;
```

C- 
```
SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();
```

D- 
```
SELECT COUNT(*) FROM Movie WHERE release_Date > CURDATE();
```

E- 
```
SELECT MAX(rating) FROM Movie;
```

F- 
```
SELECT MIN(rating) FROM Movie;
```

8- 

A- 
```
SELECT * FROM Movie ORDER BY title;
```

B- 
```
SELECT * FROM Movie ORDER BY title DESC LIMIT 5;
```

C- 
```
SELECT * FROM Movie WHERE release_Date < CURDATE() AND playing_limit_date > CURDATE() ORDER BY release_Date DESC LIMIT 3;
```

D- 
```
SELECT * FROM Movie ORDER BY rating DESC LIMIT 3;
```