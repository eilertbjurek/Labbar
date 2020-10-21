const array =[0,1,2,3,4];

const users = [
    { firstName: 'Colin', lastName: 'Wahlström', age: 33 },
    { firstName: 'Jeanette', lastName: 'Wahlström', age: 32 },
    { firstName: 'Jack', lastName: 'Wahlström', age: 5 }, 
    { firstName: 'Erik', lastName: 'Bjurek', age: 18 }, 
    { firstName: 'Anna', lastName: 'Bjurek', age: 22 }, 
];

const names = ['Colin', 'Jeanette', 'Jack', 'Erik', 'Anna'];

console.log(names);
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);

names.pop();
console.log('med pop: ' + names);

names[1] = 'Karin';
console.log('Ändrat: ' + names);

names.push('Joakim');
console.log('med push: ' + names);

names.sort();
console.log('med sort: ' + names);

console.log(names.indexOf('Joakim'));

names.splice(names.indexOf('Joakim'), 1);
console.log('med splice: ' + names);

for(let i = 0 ; i <names.length ; i++) {
console.log(i, names[i]);
}