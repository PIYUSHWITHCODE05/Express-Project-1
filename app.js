const express = require("express");
const app = express();
const path = require("path")
const hbs = require("hbs")
const port = 3000

app.use(express.static(path.join(__dirname, "./public")))

app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "./tamplates/views"))
hbs.registerPartials(path.join(__dirname, "./tamplates/partials"))

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/about", (req, res) => {
    res.render("about");
})

app.get("/wheather", (req, res) => {
    res.render("wheather")
})

app.get("*", (req, res) => {
    res.send("404 error found");
})

app.listen(port, () => {
    console.log(`port running ${port}`);
})