let shortenedLink = document.getElementById("linkEntered")
shortenedLink.innerHTML = `teste`
let link = 'https://www.google.com.br/'

$.getJSON(
    "https://is.gd/create.php?callback=?",
    {
        url: link,
        format: "json",
    }
).done(
    function(data){
        let newLink = data.shorturl
        console.log(newLink)
    }
)


//console.log(shortenedLink)