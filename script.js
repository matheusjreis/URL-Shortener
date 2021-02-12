function confirmLink(){
    let shortenedLink = document.getElementById("shorterLink")
    let link = document.getElementById("linkBox").value
    let element = document.querySelector("#loading")

    //shortenedLink.style.fontFamily = "'Brygada 1918', sans-serif"

    shortenedLink.innerHTML = ''

    changeColorLoading(element, `white`)

    $.getJSON(
        "https://is.gd/create.php?callback=?",
        {
            url: link,
            format: "json",
        }
    ).done(
        function(data){
            let newLink = data.shorturl
            if(newLink === undefined){
                sleep(2)
                shortenedLink.innerHTML = `Unknow URL`
                changeColorLoading(element, `#757575`)
                return                 
            }else{
                sleep(2)
                shortenedLink.innerHTML = `${newLink}`
                changeColorLoading(element, `#757575`)
            }
        }
    )
}

function changeColorLoading(element, color){
    element.style.borderTopColor = color
}

function sleep(seconds) {
    let milisseconds = seconds*1000
    const date = Date.now()
    let currentDate
    do{
        currentDate = Date.now()
    }while(currentDate - date < milisseconds)
}