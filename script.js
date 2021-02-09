function confirmLink(){
    let shortenedLink = document.getElementById("shorterLink")
    let link = document.getElementById("linkBox").value
    if(link.length === 0){
        shortenedLink.innerHTML = `Unknow URL`
        return 
    }
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
                shortenedLink.innerHTML = `Unknow URL`
                return                 
            }
            shortenedLink.innerHTML = `${newLink}`
            return shortenedLink
        }
    )
}