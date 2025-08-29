// Increase heart count
document.querySelectorAll(".heartClick").forEach(btn =>
  btn.addEventListener("click", function(){
    const heartBtn = document.getElementById("heartCount").innerText++;
  })
);
// Copy number buttons
document.querySelectorAll(".copy-btn").forEach(btn =>
  btn.addEventListener("click", async () => {
    const text = btn.closest(".card").querySelector(".service-number").innerText;
    await navigator.clipboard.writeText(text);
    const original = btn.innerText;
    btn.innerText = "Copied!";
    setTimeout(() => btn.innerText = original, 1500);
    const copybtn = document.getElementById("copy-count").innerText++;
    alert("The number " + text + " has been copied to your clipboard");
  })
);
//call button
const callBtn = document.querySelectorAll(".call-btn");
const historyContainer = document.getElementById("history-container");
let coin = document.getElementById("call-coin").innerText;
callBtn.forEach(btn =>
  btn.addEventListener("click", function(){
    if(coin>=20){
    const serviceName = btn.closest(".card-body").querySelector(".service-name").innerText;
    const serviceNumber = btn.closest(".card-body").querySelector(".service-number").innerText;
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
    const newHistory = document.createElement("div");
    newHistory.classList.add("flex", "justify-between", "items-center", "px-6", "py-6", "text-black", "rounded-2xl", "border-2" , "mb-2" , "bg-gray-100",);
    newHistory.innerHTML = `
      <div class="flex flex-col">
        <span class="font-bold">${serviceName}</span>
        <span>${serviceNumber}</span>
      </div>
      <div>
        <p class="text-sm text-gray-600">${time}</p>
      </div>
    `;
    coin-= 20;
    document.getElementById("call-coin").innerText = coin;
    alert("calling " + serviceName + " " + serviceNumber);
    historyContainer.appendChild(newHistory);
    }
else{
  alert("You don't have sufficient balance.To call it requires 20 coins");
}
  })
);
const historyClear = document.getElementById("history-clear-button");
historyClear.addEventListener("click",function(){
historyContainer.innerHTML = "";
});