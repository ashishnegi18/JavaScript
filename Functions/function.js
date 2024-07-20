// a function is a block of code

//function declaration

function greet(){       //default parameter
    console.log("bye")
}
greet()




//function expression
const greets = function(){    //default parameter
    console.log("hello")
}
greets() 


//arrow function

const greeting = ()=>{           //default parameter
     console.log("welcome")
}
greeting()


//parameterized 

const great = (a,b,c,d,e)=>{
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
    console.log(e)
    
}
great("hello", "welcome","good morning","bye","have a nice day")