import fs from "fs"
let filename = "prime.js"
// fs.readFile(filename,"utf-8",(err,data)=>{
//     if(err) throw err
//     console.log(data)
// })
let data = fs.readFileSync(filename,"utf-8")
console.log(data)
console.log("last line")