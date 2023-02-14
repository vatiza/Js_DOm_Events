console.log('dom events js');
// !option1
function makeRed(){
    document.body.style.backgroundColor='red';
}
//! Option 2
const makeBlueButton=document.getElementById('make-blue');
makeBlueButton.onclick= makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue'
}

//! Option 3
const makePurpleBtn=document.getElementById('make-purple');
makePurpleBtn.onclick= function makePurple() {
    document.body.style.backgroundColor = 'purple'
}
