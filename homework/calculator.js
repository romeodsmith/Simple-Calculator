var num1=prompt("Enter the first number");
var num2=prompt("Enter the first number");
var operator=prompt ("Enter + - * /");

var num1=Number(num1);
var num2=Number(num2);

let add = num1+num2
let subtract = num1-num2
let multiply = num1*num2
let divide = num1/num2

if(operator== "+"){
    console.log(num1+ "+" +num2+" = " +add);
    document.getElementById("calculator").innerHTML=`
    <p>
        ${num2} add to ${num1} is ${add}
    </p>
    `;
}else if (operator=="-"){
    console.log(num1+ "-" +num2+" = " +subtract);
    document.getElementById("calculator").innerHTML=`
    <p>
        ${num1} subract from ${num2} is ${subtract} 
    </p>
    `;
}else if (operator=="*"){
    console.log(num1+ "*" +num2+" = " +multiply);
    document.getElementById("calculator").innerHTML=`
    <p>
        ${num1} multiplied by ${num2} is ${multiply} 
    </p>
    `;
}else if (operator=="/"){
    console.log(num1+ "/" +num2+" = " +divide);
    document.getElementById("calculator").innerHTML=`
    <p>
        ${num1} divide by ${num2} is ${divide} 
    </p>
    `;
}

