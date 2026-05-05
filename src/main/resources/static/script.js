const quiz = [
  { q: "Capital of India?", o: ["Mumbai","Delhi","Chennai"], a: 1 },
  { q: "CI means?", o: ["Continuous Integration","Central Input","Code Info"], a: 0 }
];

let i = 0, score = 0;

function load() {
  document.getElementById("question").innerText = quiz[i].q;
  document.getElementById("a").innerText = quiz[i].o[0];
  document.getElementById("b").innerText = quiz[i].o[1];
  document.getElementById("c").innerText = quiz[i].o[2];
}

function check(ans) {
  if (ans === ['a','b','c'][quiz[i].a]) score++;
  i++;
  if (i < quiz.length) load();
  else document.getElementById("result").innerText = "Score: " + score;
}

load();
