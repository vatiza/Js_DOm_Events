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

//! Option 4
const pinkBtn=document.getElementById('make-pink');
pinkBtn.addEventListener('click',makePink)
 function makePink(){
    document.body.style.backgroundColor='pink'
 }

//!  option 4 another
const makeGreenBtn=document.getElementById('make-green');
makeGreenBtn.addEventListener('click',function makeGreen(){
    document.body.style.backgroundColor='green';
})

//! Option 4 finally
document.getElementById('make-goldenrod').addEventListener('click',function(){
    document.body.style.backgroundColor='goldenrod';
});