let express = require("express");
let app = express();
const port = 9000;
let path = require("path")

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))

app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "/public")));
app.get("/", (req, res) => {
    res.send("you contaced root path")
})

app.get("/ig/:username", (req, res) => {
    let instadata = require("./data.json")
    let { username } = req.params;
    let data = instadata[username];
    if (data) {

        res.render("insta.ejs", { data })
    } else {
        res.send("<h1> api send wrong request</h1>")
    }
})

app.listen(port, () => {
    console.log(`app listen port: ${port}`)
})