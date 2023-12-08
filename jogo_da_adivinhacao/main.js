
const screen1 =  document.querySelector(".screen1");

const screen2 =  document.querySelector(".screen2");

const btnTry = document.querySelector("#btnTry");

const btnRest = document.querySelector("#btnRest");

let xAttempts = 1;

//eventos
btnTry.addEventListener('click',handleTryClick)
btnRest.addEventListener('click',handleRestClick)


//callback
const randomNumber = Math.round(Math.random()*10) ;


function handleTryClick(event){
    event.preventDefault()


    const inptNumber = document.querySelector("#inputNumber")


      if(Number(inptNumber.value)==randomNumber){

        toggleScreen()

        document.querySelector(".screen2 h2").innerText = `acertou em : ${xAttempts} tentativas`

    

      }

    
    inptNumber.value =""
    xAttempts++

};


function handleRestClick(){

    toggleScreen()
    xAttempts = 1
};


function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}



