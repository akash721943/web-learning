const fs = require("fs")
// const fs = require("fs/promises")
 
console.log("starting")
// fs.writeFileSync("harry.txt", "Harry is a good boy")

fs.writeFile("aakash2.txt", "Aakash is a good boy2", ()=>{
    console.log("done")
    fs.readFile("aakash2.txt", (error, data)=>{
        console.log(error, data.toString())
    })
})

fs.appendFile("aakash.txt", "Aakash Chormale", (e, d)=>{
    console.log(d)
})

console.log("ending")