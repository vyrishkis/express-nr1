let express = require("express"); // pajungia express į kintmajį objektą.

let ourApp = express(); // iš klasės kuriame kintamajį su express;u

ourApp.use(express.urlencoded({extended: false}))  // eilutė reikalinga kad express'as  matytų req.body inputo name='' tagą

ourApp.get('/',function(req,res){ //jei get metodu gausime užklausą i urlą /
    // res.send sius naršyklei html koda
    res.send(` 
    <form action="/atsakymas" method="POST">
    <p>Kokios spalvos dangus saulėtą dieną</p>
    <input name="skyColor" autocomplete="off">
    <button>Atsakymas</button>
    </form>
    
    `)
});

ourApp.post('/atsakymas', function(req,res){//jei naršyklė gaus post metodu url "/atsakymas"

    let skyColor = req.body.skyColor // imame inputu siųsta skyColor ir dedam į kintamajį
    let answer = "Blue" // į kintamajį metame atsakymo stringa

    if( skyColor.toUpperCase() == answer.toUpperCase()){ //keičiam įvestį ir atsąkymą į didžiasias raides
        res.send(`<p>Sveikiname. Teisingas atsakymas yra == <b> ${answer}</b> </p> 
        <a href="/"> Atgal</a>
        `)

    }else res.send(`<p>Atsakymas neteisingas ${answer}</p>
    <button><a href="/"> Atgal</a></button>`)
})

ourApp.get('/atsakymas', function(req,res){ //pranešimas jei norima įeiti į url /atsakymas get metodu
    res.send(`Pasiklydote`)
})


ourApp.listen(3000) // app serverio užkūrimas 3000 porte


