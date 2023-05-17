function checkAnswers() {
    var q1 = document.querySelector('input[name="q1"]:checked').value;
    var q2 = document.querySelector('input[name="q2"]:checked').value;
    var q3 = document.querySelector('input[name="q3"]:checked').value;
    var score = 0;
    if (q1 === "c") {
    score++;
    }
    if (q2 === "a") {
    score++;
    }
    if (q3 === "b"){
    score++;
    }
    document.getElementById("result").innerHTML = "Вы набрали " + score + " из 3 баллов.";
   }