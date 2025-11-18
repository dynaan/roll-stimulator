const rollBtn = document.getElementById("roll-button");
const dice = document.getElementById("dice");
const rollH = document.getElementById("roll-history");

let historyList = [];

function rollDice() {
  // Generate a random integer between 0 and 5 (inclusive)
  const randomRoll = Math.floor(Math.random() * 6);
  
  // The base Unicode value for 'die face-1' is 9856
  const baseUnicode = 9856;
  
  // Add the random roll to the base value to get the specific die face's Unicode
  const targetUnicode = baseUnicode + randomRoll;

  historyList.push(targetUnicode);
 
    
  // Convert the Unicode number to a character and return it
  return String.fromCharCode(targetUnicode);
  
}

function updateRollHistory(){
   rollH.innerHTML=``;
   for(let i = 0;i<historyList.length;i++) {
    const listItem = document.createElement("ul");
    listItem.innerHTML=`Roll ${i+1} : <span>${rollDice(historyList[i])}</span>`;
    rollH.appendChild(listItem);
   }
}


rollBtn.addEventListener('click',()=>{
     
      
      dice.classList.add("roll-animation");
      setTimeout(()=>{
          dice.classList.remove("roll-animation");
          dice.innerHTML=rollDice();
       },1000);
        
})