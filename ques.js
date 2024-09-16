console.log("hrllo")


// async function foo()    //async allways return promise
// {
//     return "helllo"
// }

// const re=foo();
// console.log(re)    //Promise {"hello"}


// console.log([1,2]===[1,2])

// let ar1=[1,2]
// let ar2=[1,2]
// console.log(ar1===ar2)


// const user1={
//     name:"john",
//     age:25,
//     address:{
//         city:"mumbai",
//         state:"maharashtra"
//     }
// }

// const user2=user1
// user2.name="Ramesh"
// user2.address.city="pune"

// console.log("user1",user1)
// console.log("user2",user2)


// const arr=[0,1,2,3,4,5,6]

// const ls3=arr.filter((item)=>item<3).map((val)=>val+5);

// console.log(ls3)


// const str="Hi i am afzal";

// const newstr=str.split(" ").map((val)=>val[0].toUpperCase()+val.substring(1,)).join(" ");
// console.log(typeof newstr)
// console.log(newstr)
// const x="hello";
// console.log(x[0].toUpperCase)

// ques1
// var x=8;
    // let x=3;

// function foo(){
//     console.log(x)
//     // var x=8;      //undefined
//     // let x=3;      //initialization error
// }
// foo();

// ques2
// for(var i=0;i<3;i++)
// {
//     setTimeout(() => 
//         console.log(i)
//     ,1);
// }                     //3 3 3

// for(let i=0;i<3;i++)
//     {
//         setTimeout(() => 
//             console.log(i)
//         ,1);
//     }   
//0 1 2

// console.log(+true);      //1 
// console.log(typeof +true);   //Number
// console.log(!"afzal");      // false
// console.log(typeof "afzal");     //string
// console.log(+"afzal");     //Nan

// let data="size";
// const bird={
//     size:"small"
// }
// console.log(bird[data])
// console.log(bird["size"])
// console.log(bird.size)
// console.log(bird.data)



// function abc(...args)
// {
//     console.log(typeof args)
// }
// abc(12,123);


// function abc()
// {

//     n="afzal";
//     console.log(n)
// }
// abc();      //error n not defined beacuse use strict does not allow hoisting


// const obj={name:"Afzal",salary:20000}

// const{name}=obj;
// console.log(name)


// call apply bind



// call
// let obj={
//     name:"Afzal",
//     salary:20000,
//     info:function(company)
//     {
// return this.name + " " +  this.salary + company
//     }
// }

// console.log(obj.info());
// let obj1={
//     name:"Tarun",
//     salary:25000,
// }

// console.log(obj.info.call(obj1,"Zepto"))


// find duplicate element

const arr=[1,4,2,3,1,4,5,7,3]
const duplicates=arr.filter((ele,index,arr)=>arr.indexOf(ele)!==index)
console.log(duplicates)

//max number

// const arr=[23,45,12,564,89,67,234]
// const maxnum=(arr)=>{
//     return arr.reduce(function (pre,cur){
//         return pre>cur?pre:cur;
//     })
// }
// console.log(maxnum(arr))


// patterns



let no=5


console.log("1")
// for (let i=1;i<=no;i++)
//     {
//         let str="";
//         for (let j=1;j<=i;j++)
//             {
//                 str+="*"
//             }
//             console.log(str)
//         }
// console.log("2")
        
//         for (let i=1;i<=no;i++)
//             {
//                 let str="";
//                 for (let j=no;j>=1;j--)
//                     {
//                         str+="*"
//                 }
//                     console.log(str)
//             }

// console.log("3")




// for(let i=1;i<=no;i++)
//     {
//         let str="";
//         for (let j=1;j<=no-i;j++)
//         {
//         str+=" "
//         }
//         for (let k=1;k<=i;k++)
//         {
//          str+="*"
//         }
//     console.log(str)
//     }




//shallow copy and deep copy

// let obj1={
//     name:"Afzal",
//     salary:20000
// }

// let obj2=obj1;     //this is known as copy by refernece means when we assign any object to any variable then 
//                     // the refernece of a object is copy to variable means if there is any change in obj1 is reflect to obj2 also
// obj2.name="Kunal"  //  to solve this problem we use shallow copy
// obj2.salary=25000

// console.log(obj2)
// console.log(obj1)


// shallow copy-in shallow copy --we copy the Values of the objects but this have a limitations is that it work only with one level
// in two ways 
// 1-by destructuring  object

// let obj1={
//     name:"Afzal",
//     salary:20000
// }


// let obj2={...obj1}
// obj2.name="Kunal"  
// obj2.salary=25000

// console.log(obj2)
// console.log(obj1)

// 2-  by Object.assign(obnjname)
// let obj1={
//     name:"Afzal",
//     salary:20000,
//     address:{
// city:"delhi"
//     }
// }

// let obj2=Object.assign({},obj1)
// obj2.name="Kunal"  
// obj2.salary=25000
// obj2.address.type="mumbai"

// console.log(obj1)
// console.log(obj2)


// Deep-copy- in deep copy - the object can go under the object but it does not work with functions and date
// let obj1={
//     name:"Afzal",
//     salary:20000,
//     address:{
//         city:"delhi"
//             }
// }


// let obj2=JSON.parse(JSON.stringify(obj1))
// obj2.name="Kunal"  
// obj2.salary=25000
// obj2.address.city="mUMBAI"

// console.log(obj1)
// console.log(obj2)



// Here are some other options for deep copying objects in JavaScript:
// lodash.cloneDeep():
// This is a popular function from the Lodash library that can be used to deep copy objects.
// structuredClone():
// This is a new API in JavaScript that can be used to deep copy objects, but it is not yet supported by all browsers.





const obj4={name:'afzal',salary:20000}

// const {name,...ele}=obj4
// console.log(name)
// console.log(ele)

// console.log({salary:200000})
// const str5="Afzal"
// console.log(str5[0])


// isanagram
// console.log('Anagram')
// str1='listen';
// str2='silent'
// const charCount = Array(26).fill(0); // Create an array of size 26 (for each letter in the English alphabet)

// for (let i = 0; i < str1.length; i++) {
//   charCount[str1.charCodeAt(i) - "a".charCodeAt(0)]++; // Increment the count for str1 characters
//   console.log(charCount)
//   charCount[str2.charCodeAt(i) - "a".charCodeAt(0)]--; // Decrement the count for str2 characters
//   console.log(charCount)
// }

// console.log("twosum")
// function twoSum(nums, target) {
//     const numMap = {}; // Object to act as a hash map
  
//     for (let i = 0; i < nums.length; i++) {
//       const complement = target - nums[i]; // Calculate complement
//   console.log(complement)
//   // Check if the complement is already in the map
//   if (numMap[complement] !== undefined) {
//     console.log("--" ,numMap[complement],i)
//       return [numMap[complement], i]; // Return the indices of the two numbers
//     }
    
//     // Store the index of the current number in the map
//     numMap[nums[i]] = i;
//     console.log(numMap)
//     }
  
//     return []; // Return an empty array if no solution is found
//   }
  
//   // Example usage
//   const nums = [2, 7, 11, 15];
//   const target = 9;
//   const result = twoSum(nums, target);
//   console.log(result); // Output: [0, 1]
  

//ispalindrone


function ispalindrone(str)
{
let start=0;
let end=str.length-1;


while(end>start){
    if(str[end]!==str[start])
    {
        return false;
    }
    end--;
    start++;
}
return true
}
console.log(ispalindrone('hello'))



let str9="Was it a car or a cat I saw?"

str9=str9.replace(/[^A-Z0-9a-z]/g,"").toLowerCase();
console.log(str9)
