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

