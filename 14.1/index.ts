let x = 1; // type inferencing think it is number that is why it is working otherwise it shows error 
console.log(x);

// correct version of it is
let y: number = 5;
console.log(y);



// string , any , number
function greet(firstname : string){
    console.log("Hello "+ firstname);
}

greet("shubhankar");



// function to find the sum of two  number;
function sum(firstnumber : number , secondnumber : number){
    return firstnumber + secondnumber 
}

let ans = sum(2,1);
console.log(ans)

function restriction(age : number){
    if(age>18){
        console.log("you can eligible");
    }else{
        console.log("you are not eligible")
    }
}

restriction(19);


// good question this is how we make a function in a function
function delayed(fn : any){ // if we use any we ar eloosing the benifts of the ts
    setTimeout(fn,1000)
}

delayed(function(){
    console.log("hello")
})



// the correct way of above is use the benifts of ts 
function delayedcall(fn : ()=>void){ // void is used to return nothing in the end of execution of function
    setTimeout(fn,1000)
}

delayedcall(function(){
    console.log("hello")
})


// this code will run  in any
let hello  = () =>{
    console.log("hi  there")
}

function greet1(user : {name : string,age : number}){
    console.log("hello" + user.name)
}


let user ={
    name: "shubhankar",
    age: 21
}

greet1(user)


// interfaces
// it help us in creating comple object in simple way and without repeating


// first we have defiend usertpye and his datatype then we can simply use it any ohter ways
interface UserType{
    firstname : string,
    lastname : string,
    age1: number
}

function greet2(user : UserType){

}


let user2 : UserType = {
    firstname: "harkirat",
    lastname: "singh",
    age1: 21
}


// this how we can use types and interface in reat to make componetents

interface TodoType{
    title : string,
    description : string,
    done : boolean,
}

interface TodoInput{
    todo : TodoType,
}

function Todo({todo}: TodoInput){

}

// here we are learning about the types

interface User3{
    name : string,
    age : number
}

type UserType1= {
    name : string,
    age : number
}

let example : UserType1 = {
    name : "shubhankar",
    age : 22
}


// in tpyes we can use unoins 
// you want to print the id of a user, which can be a number or a string you can not do this with interfaces

type SumInput = string | number ; // this thing is only given to us by types nit inteface 
function sum(a:SumInput , b: SumInput){
    return a+b
}




// intersection 

type UserType2= {
    name : string,
    age : number
}

type UserType3= {
    name : string,
    department : number
}

type Teamlead = UserType2 & UserType3