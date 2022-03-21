let urNum = document.querySelector('.ur-num');
let form = document.querySelector('.form');
let randNum = Math.ceil(Math.random()*10);
let Message = document.querySelector('.msg');
let submit = document.querySelector('.submit');

console.log(randNum);

let i = 2;

form.addEventListener('submit', (e)=>{
    if (urNum.value == '', urNum.value < 1, urNum.value > 10) {
        giveMsg('Please Enter A Valid Number !', 'red');
    } else {
        if (urNum.value == randNum) {
            giveMsg('Hey You Win The Game', 'lightgreen');
            reloadPage();
        } else if(i==0){
            giveMsg(`You Lost The Game Guesser Number is ${randNum}! Better Luck Next Time`, 'red');
            reloadPage();
        } else{
            giveMsg(`You Have ${i} Guesses Left`, 'red')
        }
        i--;
        urNum.value = '';
    }
    e.preventDefault();
})

function giveMsg(msg, color){
    Message.innerHTML = msg;
    Message.style.color = color;
}

function reloadPage(){
    submit.setAttribute('value' , 'PLAY AGAIN');
    if(submit.getAttribute('value') === 'PLAY AGAIN') {
        urNum.disabled = true;
        submit.addEventListener('click' , (e) => {
            window.location.reload();
            e.preventDefault();
        })
    }
}