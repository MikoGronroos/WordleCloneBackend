const express = require('express')
const app = express()
const port = 4000
const cors = require('cors')
const axios = require('axios')
const fs = require("fs")

app.use(cors())

app.get("/", (req, res)=>{
})

app.get("/getword", (req, res) => {
	var text = fs.readFileSync("./words.txt").toString('utf-8')
	var words = text.split("\n")
	var word = words[getRandomInt(words.length)]
	if(word.includes("\r")){
		word = word.replace("\r", "");
	}
    res.json(word)
})

app.listen(port, ()=>{
    console.log("Listening to " + port + ".")
})

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}