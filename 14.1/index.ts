import ts = require("typescript");

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





// anthioer simple example how to implement a functon in the typescript and run it
function honor( name : string): string{
    return "hello"+ name;
}

const name5 = honor("shubhankar")
console.log(name5);




//interfaces
// it help us in creating comple object in simple way and without repeating 
// through interfaces we can making our own custom primitive or objects 


// first we have defiend usertpye and his datatype then we can simply use it any ohter ways
interface UserType{
    firstname : string,
    lastname?: string,
    age1: number
}

let user2 : UserType = {
    firstname: "ayush",
    lastname: "singh",
    age1: 21
}

function isLegal(user2: UserType): boolean{
        if(user2.age1>= 18){
            return true
        }else{
                return false;
            }
        }

isLegal(user2)
// one very important line that if we want to make some attributes optional in object we can add ?: this questionmark and colon make the attribute optianal



// one more imp proverty of interface is you can implement interface as a class 

interface People{
    name : string,
    age : number,
    happy :()=> string
}

let person : People = {
    name : " ayush",
    age  : 18,
    happy: ()=>{
        return "hi" 
    }
}

const ex = person.happy();
 console.log(ex)

 // this is simple how we make things from the class
interface People2{
    name : string,
    age : number,
}

 class Manager implements People2{
    name: string;
    age: number

    constructor(name : string, age: number){
        this.name = name;
        this.age = age
    }
 }

let user3 = new Manager("john" , 40);
console.log(user3)




// this is how we can extend property from the another classes
class shape {
    area(){
        console.log("hi i am area")
    }
}

class Recatangle extends shape{
    width: number;
    hieght: number;

    constructor(){
        super()
        this.width = 1;
        this.hieght = 2;
    }
}

const r = new Recatangle()
r.area()






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
      return
}

// abstract class have the default mthods or default implementation


abstract class User5{
    name : string
    constructor(name: string){
        this.name = name;
    }

    abstract greet(): string;
    hello(){  // this is the our own default implementaion method which we can implement in it but we can not implemenet in interface
        console.log("hi there");
    }
}

class Employee extends User5{
    name : string;
    constructor(name  :string){
        super(name)
        this.name = name;
    }
    greet(){
        return "hi "+ this.name;
    }
}



// there are two imp question releated to it ine is implementing interface (type vs interface)
// abstract classes vs interfaces
// if a class can implenment an interface , what is the point of an abstarct class?
// ans  ans abstarct has default implementation but in interface there is not there






// here we are learing about the types in type script which is most important thing
// here we are learning about the types
interface User3{  // the two work same thing 
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
// these boolean number are primitives int the typescript
type SumInput = number | number ; // this thing is only given to us by types nit inteface 
function sum6(a:SumInput , b: SumInput) : number{
    return a+b
}

sum6(5,6);




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




















/// here we are learnign about the advanced type script and and advanced apis