const inputNumber = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");
function convertNumber(){
    const number = parseInt(inputNumber.value);
    if (number<1){
        result.innerText = "Please enter a number greater than or equal to 1";
    }else if (number>3999){
        result.innerText = "Please enter a number less than or equal to 3999";
    }else if(number<4){
        let romanNumeral = ""
        
        
            for (let i =0; i<number; i++){
                romanNumeral += "I";
            }
            result.innerText= romanNumeral;
    }
    console.log(number)
}

convertBtn.addEventListener("click", ()=> convertNumber(inputNumber.value))


/*
Pasos:
    1. verificar que el numero no sea menor a 1 o mayor a 3999
    2. 
*/