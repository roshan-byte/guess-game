const check_btn=document.querySelector('.check');
let score=20;
let highscore=0;
let winning_num=Math.trunc(Math.random()*20)+1;






// functionality of the again button

document.querySelector('.again').addEventListener('click',()=>{

score=20;
document.querySelector('.score').textContent=score;

document.querySelector('.message').textContent="Start guessing...";

document.querySelector('.number').textContent='?';



document.querySelector('header').style.borderBottomColor='#eee';
        
document.querySelector('.number').style.backgroundColor='#eee';
document.querySelector('.main_title').textContent='Guess My Number!'
document.querySelector('.main_title').style.color='#eee'

document.querySelector('.guess').value='';
document.querySelector('body').style.backgroundColor='#222';


winning_num=Math.trunc(Math.random()*20)+1;

});




//first of all read the input



check_btn.addEventListener('click',()=>{

      // taking the input value of the input field....

    const input = Number(document.querySelector('.guess').value);

 
  // if we press key without putting any value into the input field....

    if(!input)
    {
        document.querySelector('.message').textContent="No Number Entered !";
    }

    // if we enter the correct number....

    else if(winning_num===input)
    {
        document.querySelector('.message').textContent="well played!";
        document.querySelector('.number').style.width='30rem';  //setting the font size of the text   
        document.querySelector('.number').textContent=winning_num;
      
        document.querySelector('header').style.borderBottomColor='#FFC93C';
        
        document.querySelector('.number').style.backgroundColor='#FFC93C';
        document.querySelector('.main_title').textContent='Hurray! You Won The Game'
        document.querySelector('.main_title').style.color='#FFC93C'
        if(score >highscore)
        {
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        
        }

        score=20;
        document.querySelector('.score').textContent=score;
        
    }

    //if we enter number greater than winning number....

    else if(input>winning_num  || input<winning_num)
    {   if(score>0)
        {
        document.querySelector('.message').textContent= input>winning_num?"Number is too high" : "Number is too Low";
        
        score--; 
         document.querySelector('.score').textContent=score;
         
        }
    else
    {
        document.querySelector('.message').textContent="ooho you lost the game";
        
        document.querySelector('.score').textContent=score;

    }
    }
});



