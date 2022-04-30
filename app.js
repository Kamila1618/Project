const functions = require("./functions");

const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const path = require("path");

app.set("view engine", "hbs");

app.use("/assets", express.static(path.join(__dirname, "./assets")));
app.use("/js", express.static(path.join(__dirname, "./js")));

app.get("/", (req, res) => {
    res.render("index", {
        pageTitle: "Fly",
    });
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.listen(port, (err) => {
    if (err) {
        return console.log(`Błąd ${err}`);
    }
    console.log(`Strona działa na porcie ${port}`);
});
