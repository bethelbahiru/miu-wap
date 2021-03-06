const express = require('express');
const path = require('path');

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine","pug");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let quizNum = 0;
let score;
let questions = [
  "3, 1, 4, 1, 5",
  "1, 1, 2, 3, 5",
  "1, 4, 9, 16, 25",
  "2, 3, 5, 7, 11",
  "1, 2, 4, 8, 16",
];
let answers = [9, 8, 36, 13, 32];
let count;


app.get('/', function (req, res) {
    score = 0;
    count = 0;
    quizNum++;
    res.render('quiz', {
        question: questions[0],
        score,
        quizNum
    });
});

app.get('/calculate', function (req, res) {

    let guess = Number.parseInt(req.query.guess);
    while (i < questions.length) {
        if (parseInt(req.body.answer) === answers[i]) {
          score++;
        }
        i++;
        break;
      }
      if (i === questions.length) {
        return res.render("result", {
          score,
          numOfQuestions: questions.length,
        });
      }
      res.render("quiz", {
        score: score,
        quizNum: quizNum,
        question: questions[i],
      });
});




app.listen(8080, () => {console.log('Server is runinng.....')});