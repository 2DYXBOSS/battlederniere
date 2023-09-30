let boutonid = document.querySelector("#boutonid");
boutonid.addEventListener("click",(event)=>{
    event.preventDefault()
    let tabUsere = JSON.parse(localStorage.getItem("poster")) || []
    let nomdetac = document.querySelector("#nomdetac").value;
    let jpudetac = document.querySelector("#jpudetac").value;
    let liedetac = document.querySelector("#liedetac").value;
    let descgdg = document.querySelector("#descgdg").value;
    
    
    let usere = {
        nomdetac : nomdetac,
        jpudetac :jpudetac,
        liedetac : liedetac,
        descgdg :descgdg,
    }
    
    tabUsere.push(usere)
    localStorage.setItem('poster',JSON.stringify(tabUsere))
    window.location.replace("../autre/struc.html")
})  