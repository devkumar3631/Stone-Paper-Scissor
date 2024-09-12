let choices=document.querySelectorAll(".circle");
let msg=document.querySelector("#msg");
let u_score=document.querySelector("#user-score");
let c_score=document.querySelector("#comp-score");

let user_score=0;
let comp_score=0;

const genCompChoice=()=>{
   let options=["rock","paper","scissoor"];
   let i=Math.floor(Math.random()*3);
   return options[i];
}

const showwinnner=(userwin,userchoice,compchoice)=>{
      if(userwin===true)
      {
            user_score++;
            u_score.innerText=user_score;
            msg.innerText=`You Win, ${userchoice} beats ${compchoice}`;
            msg.style.backgroundColor="green";
      }
      else
      {
            comp_score++;
            c_score.innerText=comp_score;
            msg.innerText=`You Lose, ${compchoice} beats ${userchoice}`;
            msg.style.backgroundColor="red";
      }
}

const playgame=(userchoice)=>{
      let compchoice=genCompChoice();

      if(compchoice===userchoice)
      {
            msg.innerText="Draw";
            msg.style.backgroundColor="black";
      }
      else{

          let userwin=true;
          if(userchoice==="rock")
          {
               userwin=(compchoice==="paper")?false:true;
          }
          else if(userchoice==="paper")
          {
              userwin=(compchoice==="scissor")?false:true;
          }
          else if(userchoice==="scissor")
          {
               userwin=(compchoice==="rock")?false:true;
          }
          showwinnner(userwin,userchoice,compchoice);
      }
}

choices.forEach((choice)=>{
     choice.addEventListener("click",(e)=>{
        let userchoice=choice.getAttribute("id");  
        playgame(userchoice);
     })
})