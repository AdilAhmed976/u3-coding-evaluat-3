// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

var wallet = JSON.parse(localStorage.getItem("amount"))
document.querySelector("#wallet").innerHTML=wallet





function mysubmit() {

    var seatvalue= 100
    var inputseat=document.getElementById("number_of_seats").value
    inputseat=inputseat*seatvalue

    if (inputseat>wallet) {
        alert("Insufficient Balance!")
    }
    else {
        alert("Booking successful!")
        inputseat= inputseat-wallet
        localStorage.setItem("wallet",JSON.stringify(inputseat))
        wallet = JSON.parse(localStorage.getItem("amount"))
    }
console.log(inputseat)

}