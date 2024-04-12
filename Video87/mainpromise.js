import fs from "fs/promises"

let a = await fs.readFile("aakash.txt")

let b = await fs.appendFile("aakash.txt", "\n\n\n\nthis is amazing promise")
console.log(a.toString(), b)