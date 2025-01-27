import express from "express"
import dotenv from "dotenv"

// this 'pulls' the environment variables into our node.js process
dotenv.config()

// read the value of MYNAME from our .env file
// 
// console.log(process.env.MYNAME)

console.log(process.env.MYNAME)

console.log(process.env.MY_SUPER_SECRET)
