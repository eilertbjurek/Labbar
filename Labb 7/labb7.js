let nr1 = 1;
let nr2 = 2;
console.log(nr1 + nr2);
console.log(nr1 - nr2);
console.log(nr1 * nr2);

console.log(`${nr1} + ${nr2} = ${nr1 + nr2}`);

let joakim = {
    firstName: 'Joakim',
    lastName: 'Wahlström',
    age: 33,
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

    console.log(`Hej, mitt namn är ${joakim.firstName} ${joakim.lastName} och jag är ${joakim.age} år gammal`);

       let fullName = joakim.fullName();
       console.log(fullName); {}
   

