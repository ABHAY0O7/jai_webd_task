const express = require("express")

const app = express()

app.get("/abhay" , ( req , res ) => {
    res.send("HELLO ABHAY0O7")
})

app.get("/user/:name", (req ,res) => {
    let n = req.params.name;
    res.send(`Hello ${n}`)
})

app.get("/" , ( req , res ) => {
    res.send("Hello World")
})
app.listen(3000)