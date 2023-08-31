# fc-nginx-with-node
Repositorio do desafio Nginx com Node.js 
Curso Full cycle 3.0

Como rodar: 

```
docker-compose up -d
```

--- 
#Duvidas:

1 - Para o funcionar eu tive que adicionar no docker-compose do node port: 3000:3000 para mim isso não deveria acontecer pois o intuito é justamente o nginx fazer esse meio de campo. 
Gostaria de entender o pq disso.
    
2 - Para instalar o dockerize precisei trocar a imagem do node:15 para node:latest, porem ao fazer isso, o nginx parou de enxergar  node. Portanto nessa entrega acabei comentando/regredindo o processo e enviando sem o dockerize. Gostaria de entender o pq disso...

---

Desafio Nginx com Node.js:
----
Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.

Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

Suba tudo em um repositório e faça a entrega.

* A linguagem de programação para este desafio é Node/JavaScript.
---
