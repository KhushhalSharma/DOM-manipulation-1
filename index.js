document.querySelector("form").addEventListener("submit", myCal);

function myCal(event) {
    event.preventDefault();
    let company = document.querySelector("#compName").value;
    let listedExchange = document.querySelector("#listedExchange").value;
    let industry = document.querySelector("#industry").value;
    let stockPrice = document.querySelector("#stockPrice").value;
    let quantity = document.querySelector("#quantity").value;
    let type = document.querySelector("#type").value;
    let noOfStock=document.querySelector("#noOfStock")
    let totalPortfolio=document.querySelector("#totalPortfolio")
    let tRow = document.createElement("tr");

    let td1 = document.createElement("td")
    td1.innerText = company;
    let td2 = document.createElement("td")
    td2.innerText = listedExchange;

    let td3 = document.createElement("td")
    td3.innerText = industry;

    let td4 = document.createElement("td")
    td4.innerText = stockPrice;
    let td5 = document.createElement("td")
    td5.innerText = quantity;
    let td6 = document.createElement("td")
    td6.innerText = type;

    let td7=document.createElement("td");
    td7.innerText=stockPrice*quantity;
    let td8=document.createElement("td");
    let date=new Date();
    td8.innerText=date.toDateString();
    let td9=document.createElement("td");
    td9.innerText="SELL"
    td9.style.backgroundColor="red";
    td9.style.cursor="pointer"
    td9.addEventListener("click",dlt)


    tRow.append(td1, td2, td3, td4, td5, td6,td7,td8,td9);
    document.querySelector("tbody").append(tRow);


}

function dlt(event){
    event.target.parentNode.remove();
}