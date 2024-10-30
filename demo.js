isApple= 'demo';

let mode ="dark";
let color;

if(mode=== "dark"){
    color ="black";
}

else if (mode==="light"){
    color="white";

}

else if (mode==="blue"){
    color="blue";

}
else(mode==="pink");
console.log(color);

const student= {
    fullName :"Demo",
    age:20,
    cgpa:8.2,
    ispass:true
}

console.log(student);





let age =18;
 if (age =>18){
    console.log("you can vote");

 }

 if(age<18){
    console.log("you can not");

 }






//let number =prompt("Enter the number:");


/*if(num%5===0){
    console.log(num,"the given number is divisible by 5");
}

else{
    console.log(num,"the given number is not divisible by 5");
}
*/




for(let count=1;count<=5; count++){
    console.log("Apna College");

}

let i;
for(let i=1; i<=5;i++){
    console.log("i=",i);
}

console.log(i);


let stud={
    name:"Demo",
    age:20,
    cgpa:7.5,
    isPass: true,

};



for (let key in stud){
    console.log("key =",key,"value =", stud[key]);
}


//print all even numbers from 0 to 100

for(let num=0;num<=100;num++){
    if(num%2 !==0){
        console.log("num =",num);
    }
    
}


/*let gameNum=25;

let userNum=prompt("Guess the number");
while(userNum != gameNum){
    userNum =prompt("you entered wrpng number.Guess again")
    }
    console.log("congratulation you  are right");
    */



    let strn= "demo";
    console.log(strn[2]);

   let animes=["kio","thor","hulk","ironman"];

   for(let idx=0;idx<=animes.length;idx++){
     console.log(animes[idx]);
   }

 let demo=[85,97,44,37,76,60];
 let sum= 0;

 for(let val of demo){
    sum= sum+val;

 }
let avg=sum/demo.length;
console.log("avg  marks of the class ",avg);


koi=[250,645,300,900,50];


for(let val of koi){

    offer=10/koi.length;

    finaloffer=val-offer;
    
}
console.log("The offer of 10% is",finaloffer);

 


neny=[250,645,300,900,50];


for(let i=0; i<neny.length;i++){
    console.log(i);
}

function sum1(x,y){
    s =x+y;
    return s;
}

let val =sum1(3,40);
console.log(val);

let a=25;
let b=2;
function sum0(a,b){
    return a+b;

}

//const arrowSum=(a,b){
    //console.log(a+b);

//}

function mul(a,b){
    return a*b;
}

