var keyArray = Object.keys(all_questions);

function reveal_answer() {
  document.getElementById("answer").style.display = 'block';
  document.getElementById("reveal_answer_button").style.display = 'none';
}
function get_question() {
  document.getElementById("answer").style.display = 'none';
  document.getElementById("reveal_answer_button").style.display = 'block';
  rand_key = parseInt(Math.random() * keyArray.length);
  question_array = all_questions[keyArray[rand_key]];
  question_id =  parseInt(Math.random() * question_array.length);
  question = question_array[question_id];
  document.getElementById("question").innerHTML = question["question"].slice(9, question["question"].length);
  document.getElementById("answer").innerHTML = question["answer"] + '<br /><a href="https://www.haaretz.co.il/magazine/20questions/' + keyArray[rand_key] + '">(למדור המקורי)</a>';
}


window.addEventListener('load', get_question);
