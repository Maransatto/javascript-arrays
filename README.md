# Para praticar arrays com javascript

Criei um objeto array para que você possa praticar os seguintes métodos que disponibilizei [aqui no youtube]() para manipulação de arrays.

```javascript
const users = [{
    name: 'Fernando S. Maransatto',
    age: 32,
    weight: 113.2,
    gender: 'male',
    city: 'Pompéia',
    state: 'SP'
},{
    name: 'José da Silva',
    age: 40,
    weight: 77.1,
    gender: 'male',
    city: 'Brasilia',
    state: 'DF'
},{
    name: 'Dona Maria',
    age: 39,
    weight: 70,
    gender: 'female',
    city: 'São Paulo',
    state: 'SP'
},{
    name: 'Miguel Silva',
    age: 9,
    weight: 41.6,
    gender: 'male',
    city: 'Rio e Janeiro',
    state: 'RJ'
},{
    name: 'Ana Paula',
    age: 32,
    weight: 69.6,
    gender: 'female',
    city: 'Bauru',
    state: 'SP'
}];
```

## Filter

1. Pega todos os usuários com o peso acima de 75 kg.
2. Pega todos com a idade menor que 35 anos
3. Pega todos os masculinos
4. Pega todos os que moram no estado de São Paulo

---

## Map

1. Traz um array com todos os nomes
2. Traz um array com todas as idades
3. Traz um array de objeto com apenas o nome e o gênero
4. Traz ums array com o primeiro nome de todos

---

## Reduce

1. Pega a soma do peso de todos
2. Pega a soma de idade de todos
3. Pega o número total de caracteres no nome de todos os usuários
4. Pega o número de caracteres pelo gênero

---

## Sort

1. Ordena por nome
2. Ordena pelo peso
3. Ordena pela idade
4. Ordena pelo gênero


## Every

1. Todos os usuários são de SP?
2. Todos os usuários tem mais que 100 kg?
3. Todos os usuários tem menos de 90 anos?
4. todos os usuários são masculinos?

---

## Some

1. Tem pelo menos um usuário de SP?
2. Tem pelo menos um usuário acima de 100 kg?
3. Tem pelo menos um usuário com menos de 90 anos?
4. Tem pelo menos um usuário masculino?