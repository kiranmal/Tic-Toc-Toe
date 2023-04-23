console.log("Welcome to Tic-Toc-Toe")
let music = new Audio("start.mp3")
let audioTurn = new Audio("success.mp3")
let gameover =new Audio("loose.mp3");
let turn ="X"
let isgameover = false;
//Function to change the turn
const changeTurn = ()=>{
return turn === "X"? "0": "X"
}
//Function to check for a win
const checkWin =() =>{
    let boxtext = document.getElementsByClassName('boxtext')//by this we condition of all the boxtext here so we can do possible cases to be fit in it
let wins =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,5,8],          //here we make a array for all possible cases of array we make.

]
wins.forEach(e =>{
    if( (boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText !== " " )){
        
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + "Won"
    isgameover = true
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px"
    }
})          //here we run the foreach loop to get trace all the elements of array.
}
//Game Logic
music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');//here we cannot use the document .querySelector because of we want action in our element. here means innter text of span should do work
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){//here we want to apply for the boxtext we box.
        boxtext.innerText = turn;
        turn = changeTurn();
        audioTurn.play();
        checkWin();
        if(!isgameover){
        document.getElementsByClassName("info")[0].innerText = "Turn for"+ turn;
        }
    }
//Add onclick listener to reset button
reset.addEventListener('click',(e)=>{
    let boxtexts =document.querySelectorAll('.boxtext')//here we use querySelector can not be use ('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = " "
    });
   turn = "X";
   isgameover=false
   document.getElementsByClassName("info")[0].innerText="Turn for"+turn;
   document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width= "0px"
})
})
})