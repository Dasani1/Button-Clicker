const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");

const result = document.getElementById("output");

let equation = "";

function numbers(button){
    if(button.id === "one"){
        equation += "1";
    }
    show();
}
function todo(){

}

function show(){
    result.textContent = `Your formula is: ${equation}`;
}