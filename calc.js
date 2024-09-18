
let date = document.querySelector("#date");

let Dates = Date();

date.textContent = Dates;


let screen = document.getElementById("Screen");
let previousNum= '';

let currentNum = '';
let Final;
let Op = '';
let newOp = '';
 let content = '';
 



let buttons= document.querySelectorAll("button");

buttons.forEach((value) => {
    value.addEventListener("click", Button);
    function Button() {
      
        if(!(value.textContent == 'Ac' || value.textContent == '=' || value.textContent == '+' || value.textContent == '-' || value.textContent == '*'  || value.textContent== '/')) {

            if(screen.value.length < 15) {
                if((currentNum == '' && Op == '') || screen.value.length == 0) {
                    
                    screen.value +=  value.textContent;
                   previousNum += value.textContent;
                   
                   
                  
                } else if(!(previousNum == '' && Op == '')) {
                    screen.value += value.textContent;
                    currentNum += value.textContent ;
                    
                 } 
                

  
            }  else {
                screen.value = "To Much Numbers!";
            }
    }  else if(value.textContent=='+'  || value.textContent=='-' || value.textContent=='*' || value.textContent=='/') {
        if((!(previousNum == '')) && Op == '') {
            Op = value.textContent;
            screen.value += Op;
            
 
        }  else if((!(Op == '')  && (!(currentNum == '' )))) {
          if(newOp < 1) { newOp = value.textContent;
            
            switch(Op) {
                case '+':
                    Final = Number(previousNum) + Number(currentNum);
                    if(Final.length > 15) {
                        Math.round(Final);
                    }
                   screen.value =  Final;
                      previousNum = Final;
                      currentNum = '';
                      Op = '';
                      screen.value += newOp;
                     Op = newOp;
                     newOp = '';


                  
                    break;

                case '-':
                    Final = Number(previousNum) - Number(currentNum);
                    if(Final.length > 15) {
                        Math.round(Final);
                    }
                    screen.value =  Final;
                       previousNum = Final;
                       currentNum = '';
                       Op = '';
                       screen.value += newOp;
                     Op = newOp;
                     newOp = '';
                    break;

                case '*':
              Final = Number(previousNum) * Number(currentNum);
              if(Final.length > 15) {
                Math.round(Final);
            }
                    screen.value =  Final;
                       previousNum = Final;
                       currentNum = '';
                       Op = '';
                       screen.value += newOp;
                       Op = newOp;
                       newOp = '';
                break;

                case '/':
                    if(Number(!(currentNum == '0'))) {
                Final = Number(previousNum) / Number(currentNum);
                if(Final.length > 15) {
                    Math.round(Final);
                }
                screen.value =  Final;
                   previousNum = Final;
                   currentNum = '';
                   Op = '';
                   screen.value += newOp;
                   Op = newOp;
                   newOp = '';}  else {
                    screen.value = "Nooo Dont Kill Me!"
                   }
                break;

                

                default:
                    screen.value = 'Undefined';
            }
          } 
            
        }
        
    }else if(value.textContent == 'Ac') {
        
        previousNum = '';
        Op = '';
        currentNum = '';
        screen.value = '';

        
       
       
    } else if((((!(previousNum == '' && Op == '' && currentNum == '')) && (value.textContent == '=')))){    
            switch(Op) {
                case '+':
                    Final = Number(previousNum) + Number(currentNum);
                    if(Final.length > 15) {
                        Math.round(Final);
                    }
                   screen.value =  Final;
                      previousNum = Final;
                      currentNum = '';
                      Op = '';

                  
                    break;

                case '-':
                    Final = Number(previousNum) - Number(currentNum);
                    if(Final.length > 15) {
                        Math.round(Final);
                    }
                    screen.value =  Final;
                       previousNum = Final;
                       currentNum = '';
                       Op = '';
                    break;

                case '*':
              Final = Number(previousNum) * Number(currentNum);
              if(Final.length > 15) {
                Math.round(Final);
            }
                    screen.value =  Final;
                       previousNum = Final;
                       currentNum = '';
                       Op = '';
                break;

                case '/':
                    if(Number(!(currentNum == '0'))){
                Final = Number(previousNum) / Number(currentNum);
                if(Final.length > 15) {
                    Math.round(Final);
                }
                screen.value =  Final;
                   previousNum = Final;
                   currentNum = '';
                   Op = '';}
                   else {
                    screen.value = "Am to young to Die..."
                   }
                break;

                

                default:
                    screen.value = 'Undefined';
            }
        }
    }}

 )
