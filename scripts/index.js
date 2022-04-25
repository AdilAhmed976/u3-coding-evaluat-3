// Store the wallet amount to your local storage with key "amount"


function addToWallet () {
    // window.location.reload()

    document.getElementById("wallet").innerHTML=null
    let amount =  document.getElementById("amount").value

    var bag = JSON.parse(localStorage.getItem("amount"))

    bag = Number(bag) + Number(amount)

    console.log(bag)

    localStorage.setItem("amount",JSON.stringify(bag))

    var h = document.createElement("h1")
    h.setAttribute("id","hone")
    h.innerHTML=""
    
    h.innerText=bag
    
    document.getElementById("navbar").append(h)
    
}