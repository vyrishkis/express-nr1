let express = require("express"); // pajungia express į kintmajį objektą.

let ourApp = express();

ourApp.use(express.urlencoded({extended: false}))

ourApp.get('/',function(req,res){
    res.send(`
    <form action="/atsakymas" method="POST">
    <p>Kokios spalvos dangus saulėtą dieną</p>
    <input name="skyColor" autocomplete="off">
    <button>Atsakymas</button>
    </form>
    
    `)
});

ourApp.post('/atsakymas', function(req,res){
    // res.send(`Dėkojame už atsąkymą`)

    let skyColor = req.body.skyColor
    let answer = "Blue"

    if( skyColor.toUpperCase() == answer.toUpperCase()){
        res.send(`<p>Sveikiname. Teisingas atsakymas yra == <b> ${answer}</b> </p>
        <a href="/"> Atgal</a>
        `)

    }else res.send(`<p>Atsakymas neteisingas ${answer}</p>
    <button><a href="/"> Atgal</a></button>`)
})

ourApp.get('/atsakymas', function(req,res){
    res.send(`Pasiklydote`)
})


ourApp.listen(3000)


