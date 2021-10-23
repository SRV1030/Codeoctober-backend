const express = require("express")
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://SRV1030:qwerty1234@cluster0.syp7s.mongodb.net/codeoctoberDB", { useNewUrlParser: true });

app.listen(port, () => {
    console.log(`localhost:${port}`);
})

