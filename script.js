const screen=document.querySelector("#screen")

screen.textContent="0"

//Variable inicial para almacenar lo que hay en pantalla y salga mas de un caracter
let text=""

function updateScreen(inputText){
    if (text.length<15){
        text=text+inputText
        screen.textContent=text
    }else {
        screen.textContent="ERROR"
        text=""
    }
}

const buttons=document.querySelectorAll(".button:not(#equal)")

buttons.forEach(button => {
    button.addEventListener("click", function (e){
        updateScreen(e.target.textContent)
    })
});


function makeTheOperation(textToOperate){
    if(textToOperate!="ERROR" || textToOperate!="" || textToOperate!=NaN){
        
        if (textToOperate.includes('+')){
            
            let num1=textToOperate.slice(0,textToOperate.indexOf('+'))
            let num2=textToOperate.slice(textToOperate.indexOf('+')+1,textToOperate.length-1)
            let result=Number(num1)+Number(num2)
            return result

        }else if (textToOperate.includes('-')){
            
            let num1=textToOperate.slice(0,textToOperate.indexOf('-'))
            let num2=textToOperate.slice(textToOperate.indexOf('-')+1,textToOperate.length-1)
            let result=Number(num1)-Number(num2)
            return result

        }else if (textToOperate.includes('×')){
            
            let num1=textToOperate.slice(0,textToOperate.indexOf('×'))
            let num2=textToOperate.slice(textToOperate.indexOf('×')+1,textToOperate.length-1)
            let result=Number(num1)*Number(num2)
            return result

        }else if (textToOperate.includes('÷')){
            
            let num1=textToOperate.slice(0,textToOperate.indexOf('÷'))
            let num2=textToOperate.slice(textToOperate.indexOf('÷')+1,textToOperate.length-1)
            let result=Number(num1)/Number(num2)
            return result

        }else if (textToOperate=="16022025"){
            return "TE AMO"
        }
        else return "ERROR1"
        
    }else return "ERROR2"
}


const equal=document.querySelector("#equal")

equal.addEventListener("click", ()=>{
    screen.textContent=makeTheOperation(text)
    text=""
})

const clearButton=document.querySelector("#clear-button")

clearButton.addEventListener("click", ()=>{
    text=""
    screen.textContent="0"
    
})