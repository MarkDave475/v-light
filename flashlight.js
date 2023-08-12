let a=0;
document.querySelector(`.st`).classList.add(`state-off`);
document.querySelector(`.wrapper`).classList.add(`ff`);
document.querySelector(`.b`).classList.add(`bo`);
document.querySelector(`.st`).innerHTML=`off`;
document.querySelector(`.switch`).addEventListener(`click`,function(event){
    if(a===0){
        a=1;
        document.querySelector(`.b`).classList.remove(`bo`);
        document.querySelector(`.st`).innerHTML=`on`;
        document.querySelector(`.st`).classList.remove(`state-off`);
        document.querySelector(`.st`).classList.add(`state-on`);
        document.querySelector(`.l`).classList.add(`light`);
        document.querySelector(`.b`).classList.add(`board`);
       
    }
    else{
        a=0;
        document.querySelector(`.b`).classList.add(`bo`);
        document.querySelector(`.st`).innerHTML=`off`;
        document.querySelector(`.st`).classList.remove(`state-on`);
        document.querySelector(`.st`).classList.add(`state-off`);
        document.querySelector(`.l`).classList.remove(`light`);
        document.querySelector(`.b`).classList.remove(`board`);
       
    }
})
let count=45;
        
        document.querySelector(`.bdc`).addEventListener(`keydown`,(event)=>{
          
            if(count>0 && event.key!==`Backspace`){
            count-=1;
            }
            
            if(event.key===`Backspace` && count<46){
            count+=1;
            }
            

            document.querySelector(`.count`).innerHTML=`you have ${count} characters remaining.`;
         
            
        });
        
        document.querySelector(`.dis`).addEventListener(`click`,(event)=>{
            
           

          
     
            document.querySelector(`.tr`).classList.add(`fieldsets`);
            document.querySelector(`.count`).classList.add(`fieldsets`);
            document.querySelector(`.bdc`).classList.add(`ff`);
            document.querySelector(`.dis`).classList.add(`ff`);
            document.querySelector(`.wrapper`).classList.remove(`ff`);

            document.querySelector(`.ev`).classList.add(`baf`);
            document.querySelector(`.tar`).classList.add(`body`);

         
        document.querySelector(`.b`).innerHTML=`${document.querySelector(`.bdc`).value}`;


        
});

document.querySelector(`.res`).addEventListener(`click`,(event)=>{ 
 document.querySelector(`.bdc`).classList.remove(`ff`);
document.querySelector(`.dis`).classList.remove(`ff`);
document.querySelector(`.wrapper`).classList.add(`ff`);
document.querySelector(`.tr`).classList.remove(`fieldsets`);
document.querySelector(`.count`).classList.remove(`fieldsets`);
document.querySelector(`.ev`).classList.remove(`baf`);
document.querySelector(`.tar`).classList.remove(`body`);

a=0;
document.querySelector(`.b`).classList.add(`bo`);
document.querySelector(`.st`).innerHTML=`off`;
document.querySelector(`.st`).classList.remove(`state-on`);
document.querySelector(`.st`).classList.add(`state-off`);
document.querySelector(`.l`).classList.remove(`light`);
document.querySelector(`.b`).classList.remove(`board`);

});