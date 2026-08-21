const randomValue = Math.floor(Math.random()*100)+1;
const displayRandom = document.createElement("h1")
displayRandom.textContent =`Random Number:
                               ${randomValue}`;
    const h1 = document.createElement("h1");
if(randomValue%2===0){
    h1.textContent = "Even number";
}else{
    h1.textContent = "Odd number";
}
const root = document.getElementById("root");
root.appendChild(displayRandom);
root.appendChild(h1);