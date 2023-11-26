const RED = "#ff3131";
const RED_RGB = [1, 0, .19, .19];
const GREEN = "#00bf63";
const GREEN_RGB = [0, .66, .34];
const orderedDatas = window.orderedData;

// Shuffle orderedData into a new array...
const origQuestions = orderedDatas[0].questions;
const sourceData = Array.from(origQuestions);
const sourceVersion = orderedDatas[0].version;
const numberOfOptions = 6;
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
const searchParams = new URLSearchParams(window.location.search);

if (searchParams.has("r")) {
  setupResults();
} else {
  setupQuiz();
}

function setupQuiz() {
  document.querySelector("#question-container").style.display = "";
  document.addEventListener("keypress", (e) => {
    // When the user hits Ctrl+T set a random answer for each question
    if (e.ctrlKey && e.key === "t") {
      const inputs = document.querySelectorAll("input");
      const names = new Set(Array.from(inputs).map((input) => input.name));
      names.forEach((name) => {
        const inputs = document.querySelectorAll(`input[name="${name}"]`);
        const value = Math.floor(Math.random() * numberOfOptions) + 1;
        inputs.forEach((input) => {
          input.checked = parseInt(input.value, 10) === value;
          input.dispatchEvent(new Event("change"));
        });
      });
    }
  });

  sourceData.forEach((question, i) => {
    const clone = template.content.cloneNode(true);
    const questionText = clone.querySelector(".template-question");
    const inputs = clone.querySelectorAll("input");
    clone.querySelector(".template-number").textContent = (i + 1).toString();
    inputs.forEach((input) => {
      input.setAttribute("data-role", question.role);
      input.setAttribute("data-dir", question.dir);
      input.setAttribute("name", `question-${i}`);
      input.addEventListener("change", (event) => {
        const name = event.target.name;
        const inputs = document.querySelectorAll(`input[name="${name}"]`);
        inputs.forEach((input) => {
          const label = input.parentNode;
          if (input.checked) {
            label.classList.add("bg-gray-200");
            label.classList.remove("opacity-70");
          } else {
            label.classList.add("opacity-70");
            label.classList.remove("bg-gray-200");
          }
        });
      });
    });
    questionText.textContent = question.descriptor;
    questions.appendChild(clone);
  });

  for (const el of document.querySelectorAll(".question-count")) {
    el.textContent = sourceData.length;
  }

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
      const score = answer.dir === -1 ? numberOfOptions - answer.score : answer.score - 1;
      results[answer.role] += score;
      roleCounts[answer.role] = (roleCounts[answer.role] || 0) + 1;
    });
    const summarizedResults = Object.keys(results).map((role) => {
      return {
        role,
        score: (results[role] / roleCounts[role]) * (100 / (numberOfOptions - 1)),
      };
    });
    const encoded = encodeSummary(summarizedResults);
    window.location = `?r=${encodeURIComponent(encoded)}`;
  });
}

function encodeSummary(summarizedResults) {
  const obj = {
    version: sourceVersion,
    id: Math.random().toString(36).slice(2),
    results: [],
  };
  for (const role of getRoleOrder(sourceVersion)) {
    const answer = summarizedResults.find((result) => {
      return result.role === role;
    });
    obj.results.push(Math.round(answer.score));
  }
  const parts = [obj.id, obj.version].concat(obj.results);
  const objString = parts.join(",");
  return btoa(objString).replace(/=+$/, "");
}

function getRoleOrder(version) {
  const questions = orderedDatas.find((data) => data.version === version);
  if (!questions) {
    console.warn("Nothing found with version", version);
  }
  const result = [];
  const seen = {};
  for (const question of questions.questions) {
    if (!seen[question.role]) {
      result.push(question.role);
      seen[question.role] = true;
    }
  }
  return result;
}

function decodeSummary(encoded) {
  const parts = atob(encoded).split(",");
  const id = parts[0];
  const version = parseInt(parts[1], 10);
  const nums = parts.slice(2).map((num) => parseInt(num, 10));
  const roles = getRoleOrder(version);
  const summarizedResults = [];
  for (let i = 0; i < roles.length; i++) {
    summarizedResults.push({
      role: roles[i],
      score: nums[i],
    });
  }
  return summarizedResults;
}

function setupResults() {
  document.querySelector("#results").style.display = "";
  const summarizedResults = decodeSummary(searchParams.get("r"));
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
}
