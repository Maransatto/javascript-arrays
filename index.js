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
    name: 'Ana Paula da Silva',
    age: 32,
    weight: 69.6,
    gender: 'female',
    city: 'Bauru',
    state: 'SP'
}];


// // --- FILTER ---
// // Pega todos os usuários com o peso acima de 75 kg.
// const over75Kg = users.filter(user => user.weight > 75);
// console.log('Acima de 75 kg', over75Kg);
// // Pega todos com a idade menor que 35 anos
// const yougests = users.filter(user => user.age < 35);
// console.log('Mais novos', yougests);
// // Pega todos os masculinos
// const maleUsers = users.filter(user => user.gender === 'male');
// console.log('Masculinos: ', maleUsers);
// // Pega todos os que moram no estado de São Paulo
// const spUsers = users.filter(user => user.state === 'SP');
// console.log('Usuários de São Paulo: ', spUsers);


//--- MAP ---
// // Traz um array com todos os nomes
// const names = users.map(user => user.name);
// console.log('Nomes', names);
// // Traz um array com todas as idades
// const ages = users.map(user => user.age);
// console.log(ages);
// // Traz um array de objeto com apenas o nome e o gênero
// const userGenders = users.map(user => ({
//     name: user.name,
//     gender: user.gender
// }));
// console.log(userGenders);
// // Traz ums array com o primeiro nome de todos
// const firtNames = users.map(user => user.name.split(" ")[0]);
// console.log(firtNames);

// --- REDUCE ---
// Pega a soma do peso de todos usuário
const totalWeigth = users.reduce((acc, cur) => acc + cur.weight, 0);
// console.log(totalWeigth);
// Pega a soma de idade de todos
const totalAges = users.reduce((acc, cur) => acc + cur.age, 0);
// console.log(totalAges);
// Pega o número total de caracteres no nome de todos os usuários
const totalNameCharacters = users.reduce((acc, cur) => acc + cur.name.length, 0);
// console.log(totalNameCharacters);
// Pega o número total de usuários pelo gênero
const usersByGender = users.reduce((acc, cur) => {
    const gender = cur.gender
    if (acc[gender]) {
        acc[gender]++;
    } else {
        acc[gender] = 1
    }
    return acc
}, {});
console.log(usersByGender);


// --- SORT ---
// Ordena por nome
// Ordena pelo peso
// Ordena pela idade
// Ordena pelo gênero


// --- EVERY ---
// Todos os usuários são de SP?
// Todos os usuários tem mais que 100 kg?
// Todos os usuários tem menos de 90 anos?
// todos os usuários são masculinos?


// --- SOME ---
// Tem pelo menos um usuário de SP?
// Tem pelo menos um usuário acima de 100 kg?
// Tem pelo menos um usuário com menos de 90 anos?
// Tem pelo menos um usuário masculino?