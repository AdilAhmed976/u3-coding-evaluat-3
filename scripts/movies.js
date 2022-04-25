// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

async function mysearch () {

    try {

        const query = document.getElementById("search").value

        const res = await fetch (`http://www.omdbapi.com/?apikey=373ef45b&s=${query}`)

        const data = await res.json()

        const movies = data.Search

        return movies

    }
    catch (err) {
console.log(err)
    }    
}

function appendData (data) {

    if (data===undefined)    { 
    
        return false
 
     }


    data.forEach(function(e,i,arr) {

        let div = document.createElement("div")

// document.getElementById("movies").innerHTML= ""

        let para = document.createElement("p")
        para.innerText=e.Title

        let poster = document.createElement("img")
        poster.src = e.Poster

        let btn = document.createElement("button")
        btn.innerText="Book Now"
        btn.setAttribute ("class","book_now")

        btn.addEventListener("click",mybook)

        div.append(poster,para,btn)

        document.getElementById("movies").append(div)
    })

}

function mybook(e) {
    window.location = "checkout.html"
}

async function main () {

    let data = await mysearch ()

    if (data===undefined)    { 
    
       return false
    }

    appendData (data)
}

function debounce (func,delay) {

    if (id) {
        clearTimeout(id)
    }

    var id = setTimeout(function() {
        func()
    },delay)
}