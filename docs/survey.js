const RED = "#ff3131";
const RED_RGB = [1, 0, .19, .19];
const GREEN = "#00bf63";
const GREEN_RGB = [0, .66, .34];
const orderedData = window.orderedData;

// Shuffle orderedData into a new array...
const sourceData = Array.from(orderedData);
for (let i = sourceData.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [sourceData[i], sourceData[j]] = [sourceData[j], sourceData[i]];
}

const questionsContainer = document.getElementById("questions-container");
const questions = document.getElementById("questions");
const template = document.getElementById("question-template");
const resultTemplate = document.getElementById("result-template");
const submit = document.getElementById("submit");
const resultsElement = document.getElementById("results");
const resultHolder = document.getElementById("result-holder");

document.addEventListener("keypress", (e) => {
  // When the user hits Ctrl+T set a random answer for each question
  if (e.ctrlKey && e.key === "t") {
    const inputs = document.querySelectorAll("input");
    const names = new Set(Array.from(inputs).map((input) => input.name));
    names.forEach((name) => {
      const inputs = document.querySelectorAll(`input[name="${name}"]`);
      const value = Math.floor(Math.random() * 5) + 1;
      inputs.forEach((input) => {
        input.checked = parseInt(input.value, 10) === value;
      });
    });
  }
});

sourceData.forEach((question, i) => {
  const clone = template.content.cloneNode(true);
  const questionText = clone.querySelector(".template-question");
  const inputs = clone.querySelectorAll("input");
  inputs.forEach((input) => {
    input.setAttribute("data-role", question.role);
    input.setAttribute("data-dir", question.dir);
    input.setAttribute("name", `question-${i}`);
  });
  questionText.textContent = question.descriptor;
  questions.appendChild(clone);
});

submit.addEventListener("click", () => {
  const answers = document.querySelectorAll("input:checked");
  const answerValues = Array.from(answers).map((answer) => {
    return {
      score: parseInt(answer.value, 10),
      role: answer.getAttribute("data-role"),
      dir: parseInt(answer.getAttribute("data-dir"), 10),
    };
  });
  const results = {};
  const roleCounts = {};
  answerValues.forEach((answer) => {
    if (!results[answer.role]) {
      results[answer.role] = 0;
    }
    const score = answer.dir === -1 ? 6 - answer.score : answer.score;
    results[answer.role] += score;
    roleCounts[answer.role] = (roleCounts[answer.role] || 0) + 1;
  });
  const summarizedResults = Object.keys(results).map((role) => {
    return {
      role,
      score: ((results[role] / roleCounts[role]) - 1) * 25,
    };
  });
  summarizedResults.sort((a, b) => {
    return b.score - a.score;
  });
  summarizedResults.forEach((result) => {
    const clone = resultTemplate.content.cloneNode(true);
    const role = clone.querySelector(".template-role");
    const match = clone.querySelector(".template-match");
    role.textContent = result.role;
    match.style.width = `${result.score}%`;
    match.textContent = Math.round(result.score) + "%";
    resultHolder.appendChild(clone);
    const p = result.score / 100;
    const notp = 1 - p;
    const red = (RED_RGB[0] * notp + GREEN_RGB[0] * p);
    const green = (RED_RGB[1] * notp + GREEN_RGB[1] * p);
    const blue = (RED_RGB[2] * notp + GREEN_RGB[2] * p);
    const color = `rgb(${red * 255}, ${green * 255}, ${blue * 255})`;
    match.style.backgroundColor = color;
  });
  resultsElement.style.display = "";
  resultsElement.parentNode.scrollTop = 0;
  questions.parentNode.style.display = "none";
});
