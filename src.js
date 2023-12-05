const MinV =0;                                          //MINIMUM RANGE
const MaxV =13;                                         //MAXIMUM RANGE-1
const allCards=[2,3,4,5,6,7,8,9,10,"J","Q","K","A"];    //ALL CARDS.

let uHasWon=false;
let dHasWon=false;
let CardOnHand=[];                                      //CARDS EARNED BY USER
let CardOnDeal=[];                                      //CARDS OWNED BY PC/DEALER

//To Get Random Value.
function getRandomValue(){
    let randomV=Math.random();
    return Math.floor(((randomV*(MaxV-MinV))+MinV));
}

//To get Random Card.
function getRandomCard(){
    return allCards[getRandomValue()];
}

//To Draw New Card.
function drawCard(){
    let C0 = getRandomCard();
    CardOnHand.push(C0);
    document.querySelector("#CrdIH").textContent=renderText();
    check();
}

//To render the Cards That are Earned by User.
function renderText(){
    let Txt="";
    for(let i=0;i<CardOnHand.length;i++){
        Txt += CardOnHand[i]+" - ";
    }
    return Txt;
}

//To Render the Cards thar are Earned By PC/DEALER.
function DrenderText(){
    let Txt="X - ";
    for(let i=1;i<CardOnDeal.length;i++){
        Txt += CardOnDeal[i]+" - ";
    }
    return Txt;
}

//To Render the Cards thar are Earned By PC/DEALER WINS OR LOSES.
function DrenderTextWL(){
    let Txt="";
    for(let i=0;i<CardOnDeal.length;i++){
        Txt += CardOnDeal[i]+" - ";
    }
    return Txt;
}

//Game Initiation.
function gameInit(){
    /* if(CardOnHand.length!=0){
        while (CardOnHand.length>0) {
            CardOnHand.pop();
        }
    } */
    Reset();
    enBtn();
    let C1=getRandomCard();
    CardOnHand.push(C1);
    let C2=getRandomCard();
    CardOnHand.push(C2);

    let DC1=getRandomCard();
    let DC2=getRandomCard();
    CardOnDeal.push(DC1);
    CardOnDeal.push(DC2)

    document.querySelector("#D_CrdIH").textContent=DrenderText();
    document.querySelector("#CrdIH").textContent=renderText();
    check();
    Dcheck();
}

//Check and Render Score of USER.
function check(){
    Score=0;
    for(let i=0;i<CardOnHand.length;i++){
        if(CardOnHand[i]==="J"||CardOnHand[i]==="K"||CardOnHand[i]==="Q"){
            Score+=10;
        }
        else if(CardOnHand[i]==="A"){
            Score+=11;
        }
        else{
            Score+=CardOnHand[i];
        }
    }
    document.querySelector("#Score").textContent=Score.toString();
    if(Score<21){
        document.querySelector("#Ask").textContent="Draw a card!?";
    }else if(Score===21){
        document.querySelector("#Ask").textContent="YOU GOT THE BLACKJACK.";
        shutBtn();
        //uHasWon=true;
    }else{
        document.querySelector("#Ask").textContent="!YOU HAVE FAILED!";
        shutBtn();
    }
}

//Check and Render Score of Dealer.
function Dcheck(){
    Score=0;
    for(let i=1;i<CardOnDeal.length;i++){
        if(CardOnDeal[i]==="J"||CardOnDeal[i]==="K"||CardOnDeal[i]==="Q"){
            Score+=10;
        }
        else if(CardOnDeal[i]==="A"){
            Score+=11;
        }
        else{
            Score+=CardOnDeal[i];
        }
    }
    document.querySelector("#D_Score").textContent=Score.toString();
}
//Check and Render Score of Dealer.
function DcheckWL(){
    Score=0;
    for(let i=0;i<CardOnDeal.length;i++){
        if(CardOnDeal[i]==="J"||CardOnDeal[i]==="K"||CardOnDeal[i]==="Q"){
            Score+=10;
        }
        else if(CardOnDeal[i]==="A"){
            Score+=11;
        }
        else{
            Score+=CardOnDeal[i];
        }
    }
    //document.querySelector("#D_Score").textContent=Score.toString();
    return Score;
}

//When User wish to Hold/Stand with their Card and let the Dealer try their luck.
function Stand(){
    let DScore=DcheckWL();
    /* alert(""+UScore+","+DScore); */
    if(DScore<21){
        DdrawCC();
        Stand();
    }else if(DScore===21||DScore==="21"){
        document.querySelector("#D_CrdIH").textContent=DrenderTextWL();
        document.querySelector("#Ask").textContent="DEALER GOT THE BLACK JACK";
        document.querySelector("#D_Score").textContent=DcheckWL();
        shutBtn();
        //dHasWon=true;
    }else if(DScore>21){
        document.querySelector("#D_CrdIH").textContent=DrenderTextWL();
        document.querySelector("#Ask").textContent="YOU GOT THE BLACK JACK";
        document.querySelector("#D_Score").textContent=DcheckWL();
        shutBtn();
    }
}

//Draw Cards only for Dealer When User Stands
function DdrawCC(){
    let C00=getRandomCard();
    CardOnDeal.push(C00);
    document.querySelector("#D_CrdIH").textContent=DrenderText();
    Dcheck();
}

function Reset(){
    console.log("Reset Invoked.");
    CardOnDeal.splice(0,CardOnDeal.length);
    CardOnHand.splice(0,CardOnHand.length);
    document.querySelector("#Ask").textContent="Want to play a round?";
    document.querySelector("#CrdIH").textContent="";
    document.querySelector("#Score").textContent="";
    document.querySelector("#D_CrdIH").textContent="";
    document.querySelector("#D_Score").textContent="";
    shutBtn();
}

function shutBtn(){
    document.querySelector("#Drw").disabled=true;
    document.querySelector("#Std").disabled=true;
}
function enBtn(){
    document.querySelector("#Drw").disabled=false;
    document.querySelector("#Std").disabled=false;
}