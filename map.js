const numbers = [2, 8, 4, 6, 3];
const outPut = [];
for (const number of numbers ){
    const doubled = number*2;
    outPut.push(doubled);
}
//console.log (outPut);

//make double
/*function getDoubles(numbers){
    const outPut = [];
    for (const number of numbers){
        const doubled = doubleIt(number);
        outPut.push(doubled);
    }
    
}*/
//console.log(result);


//MakeDouble using direct map(method-1)
const doubleIt = number => number *2;
const makeDouble = numbers.map(doubleIt);
//console.log(makeDouble);
//MakeDouble using direct map(method-2)
const makeDoubleDirect = numbers.map(num=> num*2);
//console.log(makeDoubleDirect);
//MakeDouble using direct map(method-3)
const fiveDouble = [1, 5 , 3 ].map(x=> x*5);
//console.log (fiveDouble);
const studentList = [
    {id: 1, name :'bristi1' , price: 204000},
    {id: 2, name :'bristi2' , price: 200400},
    {id: 3, name :'bristi3' , price: 2000450},
    {id: 4, name :'bristi4' , price: 2000034},
];
//const items = studentList.map(studentList=> console.log(studentList.name));
const items = studentList.map(studentList=> studentList.name);
console.log(items);