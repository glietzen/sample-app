let person = 'Garrett';
let age = 26;
let isCool = false;
let sportsArray = ['baseball', 'football', 'soccer'];
let garrett = {
    age: 26,
    hobbies: ['baseball', 'fishing', 'hunting'],
    pet: 'Golden Retriever'
}

let sampleData = [
    {
        name: 'Person1',
        age: 34,
        weight: 200
    },
    {
        name: 'Person 2',
        age: 20,
        weight: 300
    },
    {
        name: 'Person 3',
        age: 75,
        weight: 400
    }
]

for (var i = 0; i < sampleData.length; i++) {
    console.log(sampleData[i].name + ' is ' + sampleData[i].age + ' years old.')
}