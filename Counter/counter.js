console.log("counter")

// let increase=document.getElementById('inc');
// let decrease=document.getElementById('dec');
// let count=document.getElementById('count');
// console.log(increase)
// console.log(decrease)
// let counting=0;
// function forward()
// {
//     counting++;
//     count.textContent=counting;
//     console.log(count)
// }
// function backward()
// {
//     counting--;
//     count.textContent=counting;
//     console.log(count)

// }

// function reset(){
//     counting=0;
//     count.textContent=counting;
// }

// if (count.textContent<0){
//     console.log("red")
// }
// // else
// // {
// // count.style.property.Color="green";
// // }


let count=0;
let value=document.getElementById("value");
let btns=document.querySelectorAll('.btn');

btns.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        let index=e.currentTarget.classList;
        console.log(index)
        if(index.contains('increase'))
        {
            count++;
            value.textContent=count;
        }
        else if(index.contains('decrease'))
        {
            count--;
            value.textContent=count;
        }
        else 
        {
            count=0;
            value.textContent=count;
        }

        if(value.textContent<0)
        {
            value.style.color="red";
        }
        else if(value.textContent>0){
            value.style.color="green";
        }
        else{
            value.style.color="black";
        }
    })
})