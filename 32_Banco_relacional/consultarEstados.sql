SELECT * FROM estados

SELECT nome, sigla FROM estados

SELECT sigla, nome as 'Nome do estado' FROM estados
where regiao = 'Sul'

SELECT nome, regiao, populacao FROM estados
where populacao >= 10
order by populacao