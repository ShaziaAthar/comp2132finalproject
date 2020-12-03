//toggle Text in the end

const $hidestart=$('#hidestartbtn');
const $content  =$('#start');
const $hiderules=$('#hiderulesbtn');
const $rules    =$('#rules')

$hidestart.click(function(){  
    // $hidestart.text('show');
     $content.slideToggle();
});
 
$hiderules.click(function(){
   // $hiderules.text('show')
    $rules.slideToggle();
});

//click Roll Dice Button
const buttonrolldice=document.getElementById('buttonrolldice');
const buttonnewgame=document.getElementById('buttonnewgame');
const dice1        =document.getElementById('dice1');
const dice2        =document.getElementById('dice2');
const dice3        =document.getElementById('dice3');
const dice4        =document.getElementById('dice4');
const yourscore    =document.getElementById('yourscore');
const oppscore     =document.getElementById('oppscore');
const yourtotalscore=document.getElementById('yourtotalscore');
const opptotalscore=document.getElementById('opptotalscore');
const popup        =document.querySelector('#pop-up');
const btnclose=document.getElementById('win');
let counter=0;

  buttonrolldice.addEventListener('click',function(){
   counter++

   const randomedice1=Math.floor(Math.random()*6)+1;
   const randomedice2=Math.floor(Math.random()*6)+1;
   const randomedice3=Math.floor(Math.random()*6)+1;
   const randomedice4=Math.floor(Math.random()*6)+1;

  const ran1=randomedice1+randomedice2;
  const ran2=randomedice3+randomedice4;

  dice1.src=(`images/dice-${randomedice1}.jpg`);
  dice2.src=(`images/dice-${randomedice2}.jpg`);
  dice3.src=(`images/dice-${randomedice3}.jpg`);
  dice4.src=(`images/dice-${randomedice4}.jpg`);

//conditions to print scores
if(randomedice1===1 || randomedice2===1){ 
  yourscore.innerHTML= 0;
  yourtotalscore.innerHTML= 0; }
        else{ 
         yourscore.innerHTML=ran1;
         yourtotalscore.innerHTML=ran1;
         //if(counter===1){yourtotalscore.innrHTML=ran1}
         //if(counter===2){yourtotalscore.innerHTML=ran1+ran1}
         //if(counter===3){yourtotalscore.innerHTML=ran1+ran1+ran1}
        }
if(randomedice1===randomedice2 ){
        yourtotalscore.innerHTML=ran1*2;}
        else{
         yourscore.innerHTML=ran1;
        //yourtotalscore.innerHTML=ran1+ran1
        //if(counter===1){yourtotalscore.innrHTML=ran1+ran1}
        //if(counter===2){yourtotalscore.innerHTML=ran1+ran1}
        // if(counter===3){yourtotalscore.innerHTML=ran1+ran1+ran1}
        }
     
if(randomedice3===1 || randomedice4===1){
  oppscore.innerHTML= 0;
  opptotalscore.innerHTML= 0; } 
        else{
            oppscore.innerHTML=ran2;
            opptotalscore.innerHTML=ran2;
           // if(counter===1){opptotalscore.innrHTML=ran2}
           // if(counter===2){opptotalscore.innerHTML=ran2+ran2}
            //if(counter===3){opptotalscore.innerHTML=ran2+ran2+ran2}
        }
if(randomedice3===randomedice4){
      opptotalscore.innerHTML =ran2*2;}
       else{
            oppscore.innerHTML=ran2;
            //opptotalscore.innerHTML=ran2
            //if(counter===1){yourtotalscore.innrHTML=ran2}
           //if(counter===2){yourtotalscore.innerHTML=ran2+ran2}
           // if(counter===3){yourtotalscore.innerHTML=ran2+ran2+ran2}
           }

//conditions for result output
  if(counter===3){
    popup.style.opacity='1';
  }
  if(ran1>ran2){
     win.innerHTML="You Win";
  }
  if(ran1<ran2){
      win.innerHTML="Opponent Wins";
    }
   if(ran1===ran2){
       win.innerHTML="Game Draw";
   } 
});
//event for start new game
  buttonnewgame.addEventListener('click',function(){
     counter=0; 
  yourscore.innerHTML="";
  yourtotalscore.innerHTML="";
  oppscore.innerHTML="";
  opptotalscore.innerHTML="";
  dice1.src=" ";
  dice2.src=" ";
  dice3.src=" ";
  dice4.src=" ";
  popup.style.opacity=0
  });
  
 
    
