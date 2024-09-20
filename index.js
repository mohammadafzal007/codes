


console.log("Hello World");
 
for (let i=0;i<=5;i++){
    if(i%2!=0)
        console.log(i)
}
// var
const x=4
let z=x
z=z+5
console.log(z)

var s$=6;
console.log(s$)

// glo();
// console.log(af)
// function glo(){
// af=5;
// }
// let g;   //error without assigning value
// console.log(g)   
// const y;   //error without assigning value
// console.log(y)     
var i;   //undefined
console.log(i)   

console.log(i)

// function sum(a,b){
//     return a+b
// }
console.log("Sum is " + function sum(a,b){
    return a+b
}(3,4));

// Arrow functions
// short hand property for writitng functions

let sum=(a,b)=> {let f=a+b; return f;}
console.log(sum(4,5));

function btnclick(){
    let btn=document.getElementById('btn');
    console.log(btn)
    if(btn.style.backgroundColor='none') 
    {btn.style.backgroundColor='red';}
    // if (btn.style.backgroundColor=='none')
    // {
    //     btn.style.backgroundColor='red'
    // }
    else{
    btn.style.backgroundColor='none';
    }
}
// btn.addEventListener('click',btnclick())
// console.log(btn)




// for loops
// for
// for in
// for of


// for
for (let i=0;i<=5;i++)
{
    console.log(i)
}
const arr='Afzal';
let reversearr=''
console.log(arr)
for (let i=arr.length-1;i>=0;i-- )
{
console.log(arr[i])
reversearr+=arr[i]
}
console.log(reversearr)
let text=""
for (let i=0;i<=5;i++)
{
    text+=i + "<br>"
}
document.getElementById("para").innerHTML=text;


let c=5;
{
    let c=9;
    console.log(c)
}
console.log(c)


var d=5;
{
    var d=78;
    console.log(d)
}
console.log(d)
// for in-- loop through properties of an objects

const obj={
    name:'Afzal',class:"BCA"
}

let text1="";
for(let i in obj)
{
    text1+=obj[i] + " ";
}
document.getElementById("para1").innerHTML=text1;

for (let i in obj){
    console.log(obj[i])
}

// for of
// loop over iterable data structures 
// such as arrays ,string,etc.
const arr1=["Afzal","Tarun","Kunal"];
const arr2="Afzal";
let text2="";
for(let i of arr2)
{
    text2+=i + " ";
}
document.getElementById("para2").innerHTML=text2;

// while
let k=0
while(k<10)
{
    text2+="the number is " + k + "<br>";
    k++;
}
document.getElementById("para2").innerHTML=text2;

// do
let l=0;
do
{
    text2+="the number is " + l + "<br>";
    l++;
}
while(l<15)

document.getElementById("para2").innerHTML=text2;



// Arrays
// array is a variable which can hold more than one values
const ar =["Afzal","Tarun","Kunal","Danish"];
const ar1=["Sajal","Damanjeet"];
console.log(ar)
console.log(ar.toString())
console.log(ar.length)
// console.log(ar.sort())
let li="<ul>"
for(let i=0;i<ar.length;i++){
    li+="<li>"+ ar[i] + "</li>";
}
li+="</ul>";
document.getElementById("para3").innerHTML=li
// ar.forEach(fr)
// function fr(f){
//     li+="<li>"+ f + "</li>";
//     }


// Arrays Methods

// Push()
console.log(ar.push("Damanjeet"))
console.log(ar)

// pop
console.log(ar.pop())
console.log(ar)

//slice
console.log(ar.slice(2))

//array.at()
console.log(ar.at(2))
console.log(ar)


//array.join()
console.log(ar.join(" - "));


//shift 
console.log(ar.shift(),ar)

//unshift
console.log(ar.unshift("Damanjeet"))

//cconcat
console.log(ar.concat(ar1))

// console.log(ar)
// splice
console.log(ar.toSpliced(2,2))

//slice
console.log(ar.slice(1,3))
// Map,filter,reduce


// map-- return a new transform array 
let arrr=[2,3,1,5,6,7];
let mapping=arrr.map((n)=>{return n*2});
console.log(mapping)

// filter-- returns a new array with elements which pass the test 
let filters=arrr.filter((n)=> {return n%2==0});
console.log(filters)

// reduce-- reduce the array to a single value
let reduces=arrr.reduce((sum,n)=>n+sum,0)
console.log(reduces)


console.log(arrr.reverse())//// reverse--override the original array
console.log(arrr.sort())//overide the original array


const arr4=[1,2,3,4,5,6]

const[a,b,...rest]=arr4
console.log(a,b,rest)

const obj3={
    Name:"Afzal",
    Department:"Technical",
    Salary:23000
};

// const{Name}=obj3
// console.log(Name)

// const {Name,...o}=obj3
// console.log(Name,o)


// destructing in functions
function getdata({Name:Nme,Department:Dpartment})
{
    return `Name is ${Nme} and Salary is ${Dpartment}`;
}

getdata(obj3);


// Spread Operator

const arr5=[1,2,3,4]

function sums(a,b){
    return a+b;
}
console.log(sums(...arr5));
//Modules


import {mul} from "./module.js";
console.log(mul(2,3,4));

let counts=0;
// setInterval(() => {
//     counts++;
//     document.getElementById("count").innerHTML=counts;

// }, 1000);

// const interval=setInterval(timer,1000);
function timer()
{
    counts++;
document.getElementById('count').innerHTML=counts;
}
let counter=document.getElementById('counter');
counter.addEventListener("click",
function stopcounter()
{
    clearInterval(interval);
});

console.log(this)




function fun1()
{
    return 2
}
function fun2()
{
    return 4
}

let funct = (fun1(),fun2());
console.log(funct)

let vb=(3,4)
console.log("vb",vb)

console.log(true === " ")
console.log(1 == "1")
console.log(" ")

let ab=10
let cd=new Number(10)
console.log(ab === cd)

console.log(typeof cd)
console.log(typeof ab)


const que={};
que.company="Afzal";
console.log(que)




