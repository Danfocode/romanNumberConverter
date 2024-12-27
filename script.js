const inputNumber = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");

const bNumRm = [
    {
        value:1,
        numRm:"I"
    },
    {
        value:4,
        numRm:"IV"
    },
    {
        value:5,
        numRm:"V"
    },
    {
        value:9,
        numRm:"IX"
    },
    {
        value:10,
        numRm:"X"
    },
    {
        value:40,
        numRm:"XL"
    },
    {
        value:50,
        numRm:"L"
    },
    {
        value:90,
        numRm:"XC"
    },
    {
        value:100,
        numRm:"C"
    },
    {
        value:400,
        numRm:"CD"
    },
    {
        value:500,
        numRm:"D"
    },
    {
        value:900,
        numRm:"CM"
    },
    {
        value:1000,
        numRm:"M"
    }


]

function convertNumber(){
    const number = parseInt(inputNumber.value);
    if (number<1){
        result.innerText = "Please enter a number greater than or equal to 1";
    }else if (number>3999){
        result.innerText = "Please enter a number less than or equal to 3999";
    }
}

convertBtn.addEventListener("click", ()=> convertNumber(inputNumber.value))


/*
Pasos:
    1. verificar que el numero no sea menor a 1 o mayor a 3999
    2. 
*/