const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/static", express.static("public"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/",(req,res) =>{
  let weightInput = req.body.weight;
  let heightInput = req.body.height;
  let ageInput = req.body.age;
  let BMI = ((parseFloat(weightInput)/((parseFloat(heightInput)/100)*(parseFloat(heightInput)/100)))).toFixed(1)
  res.render('index',{result: BMI,age: ageInput,weight:weightInput,height:heightInput});
})

app.listen(3000, () => {
  console.log("The application is running on localhost:3000!");
});

