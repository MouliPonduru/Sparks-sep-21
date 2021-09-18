
let buttonEl = document.getElementById("button");
let bodyEl = document.getElementById("body");



let historyContainer = document.createElement("div");
historyContainer.classList.add("transactions","mt-5");
bodyEl.appendChild(historyContainer);
let container = document.createElement("div");
container.classList.add("container");
historyContainer.appendChild(container);
let rowcontainer = document.createElement("div");
rowcontainer.classList.add("row");
historyContainer.appendChild(rowcontainer);
let col = document.createElement("div");
col.classList.add("col-12");
rowcontainer.appendChild(col);
let headingEl = document.createElement("h1");
headingEl.textContent="Trasaction History";
headingEl.classList.add("history-heading","text-center");
col.appendChild(headingEl);

function history(){
    let fromheading = document.createElement("h4");
    let senderName = document.getElementById("sender").value;
    let rxerName = rxer.value;
    let amount = amt.value;
    let email = mail.value;
    let upin = pin.value;
    if (senderName === "Select Sender" || rxerName === "Select Receiver" || rxerName === senderName || amount==="" || amount===0 || email==="" || upin.length != 6){
        alert("Enter a Valid Data");
    } 
    else{
        
        for (i=1;i<11;i++){
            let idname = "name"+i;
            let userName = document.getElementById(idname);
            if (userName.textContent===senderName){
                let balId = "mbal"+i;
                let userBalance = document.getElementById(balId);
                console.log(userBalance);
                let numBalance = parseInt(userBalance.textContent);
                if (numBalance >= amount){
                    numBalance = numBalance-amount;
                    console.log(numBalance);
                    userBalance.textContent = numBalance.toString();
                    console.log(userBalance);
                    let transactionContainer = document.createElement("div");
                    transactionContainer.classList.add("d-flex","flex-row","justify-content-start","history-container","shadow");
                    col.appendChild(transactionContainer);
                    let detailsContainer = document.createElement("div");
                    detailsContainer.classList.add("d-flex","flex-column","justify-content-center","details-container","m-3");
                    transactionContainer.appendChild(detailsContainer);
                    let fromContainer = document.createElement("div");
                    fromContainer.classList.add("d-flex", "flex-row", "justify-content-start");
                    detailsContainer.appendChild(fromContainer);
                    fromheading.textContent= "Amount of Rs."+amount+ " has been trasferred from "+senderName+" to " + rxerName+" Successfully.";
                    fromheading.classList.add("trans","m-4","p-2");
                    fromContainer.appendChild(fromheading);
                }
                else{
                    alert("Insufficient Balance");
                }
                

            }
            if (userName.textContent ===rxerName){
                let balId = "mbal"+i;
                let userBalance = document.getElementById(balId);
                console.log(userBalance);
                let numBalance = Number(userBalance.textContent);
                console.log(numBalance);
                let amountBal = Number(amount);
                console.log(amountBal);
                let newBalance = numBalance + amountBal;
                userBalance.textContent = newBalance.toString();
                console.log(userBalance);
            }
        }
        
    }
}
