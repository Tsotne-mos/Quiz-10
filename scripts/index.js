const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Main page")
})
app.get('/contact', (req, res) => {
    res.send("Contact page")
})
app.get('/profile', (req, res) => {
    res.send("Profile page")
})
app.get('/about', (req, res) => {
    res.send("About page")
})
