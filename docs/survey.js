const RED = "#ff3131";
const RED_RGB = [1, 0.19, 0.19];
const GREEN = "#00bf63";
const GREEN_RGB = [0, 0.66, 0.34];
const YELLOW = "#fde047";
const YELLOW_RGB = [1, 0.88, 0.28];
const orderedDatas = window.orderedData;

// Shuffle orderedData into a new array...
const origQuestions = orderedDatas[0].questions;
const sourceData = Array.from(origQuestions);
const sourceVersion = orderedDatas[0].version;
const numberOfOptions = 5;
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
      input.setAttribute("data-question", question.descriptor);
      input.setAttribute("name", `question-${i}`);
      input.addEventListener("change", (event) => {
        const name = event.target.name;
        const inputs = document.querySelectorAll(`input[name="${name}"]`);
        inputs.forEach((input) => {
          const label = input.parentNode;
          const color = label.getAttribute("data-highlight");
          if (input.checked) {
            label.classList.remove(`bg-${color}-100`);
            label.classList.add(`bg-${color}-400`);
            label.classList.remove("opacity-50");
            toggleErrorOff(input);
          } else {
            label.classList.add(`bg-${color}-100`);
            label.classList.remove(`bg-${color}-400`);
            label.classList.add("opacity-50");
          }
        });
        selectNext(inputs[0]);
      });
    });
    questionText.textContent = question.descriptor;
    questions.appendChild(clone);
  });

  createDemographicQuestions();

  function selectNext(input) {
    const name = input.name;
    const inputs = document.querySelectorAll(`input[type="radio"]`);
    let found = false;
    for (const input of inputs) {
      if (found && input.name !== name) {
        const otherInputs = Array.from(
          document.querySelectorAll(`input[name="${input.name}"]`)
        );
        if (otherInputs.find((input) => input.checked)) {
          continue;
        }
        input.scrollIntoView({
          block: "center",
          behavior: "smooth",
        });
        return;
      }
      if (input.name === name && input.checked) {
        found = true;
      }
    }

    document.querySelector("#submit").scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  }

  for (const el of document.querySelectorAll(".question-count")) {
    el.textContent = sourceData.length;
  }

  let _submitted = null;

  submit.addEventListener("click", async () => {
    if (!checkInputs()) {
      return;
    }
    const answers = document.querySelectorAll("input:checked");
    const answerValues = Array.from(answers)
      .map((answer) => {
        if (!answer.getAttribute("data-role")) {
          return null;
        }
        return {
          score: parseInt(answer.value, 10),
          role: answer.getAttribute("data-role"),
          question: answer.getAttribute("data-question"),
          dir: parseInt(answer.getAttribute("data-dir"), 10),
        };
      })
      .filter((x) => x);
    const demos = document.querySelectorAll(
      "input[name^='demo:'], select[name^='demo:']"
    );
    const demoValues = Array.from(demos)
      .map((demo) => {
        const name = demo.name.split(":")[1];
        if (demo.getAttribute("type") === "checkbox") {
          if (demo.checked) {
            return {
              score: demo.value,
              role: "demographics",
              question: name,
              dir: "",
            };
          }
        } else {
          return {
            score: demo.value,
            role: "demographics",
            question: name,
            dir: "",
          };
        }
        return null;
      })
      .filter((x) => x);
    console.log("values are", demoValues);
    return;
    if (!_submitted) {
      _submitted = sendGoogleSheetData(answerValues.concat(demoValues));
    }
    submit.textContent = "Submitting, please wait for your results...";
    const results = {};
    const roleCounts = {};
    answerValues.forEach((answer) => {
      if (!results[answer.role]) {
        results[answer.role] = 0;
      }
      const score =
        answer.dir === -1 ? numberOfOptions - answer.score : answer.score - 1;
      results[answer.role] += score;
      roleCounts[answer.role] = (roleCounts[answer.role] || 0) + 1;
    });
    const summarizedResults = Object.keys(results).map((role) => {
      return {
        role,
        score:
          (results[role] / roleCounts[role]) * (100 / (numberOfOptions - 1)),
      };
    });
    const encoded = encodeSummary(summarizedResults);
    await _submitted;
    window.location = `?r=${encodeURIComponent(encoded)}`;
  });
}

function createDemographicQuestions() {
  const questionsContainer = document.getElementById("demographics");
  for (const question of window.demographicQuestions) {
    const type = question.type;
    const template = document.getElementById(`${type}-template`);
    const node = template.content.cloneNode(true);
    for (const el of node.querySelectorAll(".fill-question")) {
      el.textContent = question.question;
    }
    if (type === "checkbox") {
      const rep = node.querySelector(".repeat-items");
      for (const item of question.items) {
        const clone = rep.cloneNode(true);
        clone.querySelector("input").name = `demo:${question.question}`;
        clone.querySelector("input").value = item;
        for (el of clone.querySelectorAll(".fill-value")) {
          el.textContent = item;
        }
        rep.before(clone);
      }
      rep.remove();
    } else if (type === "select") {
      const select = node.querySelector("select");
      select.name = `demo:${question.question}`;
      for (const item of question.items) {
        const option = document.createElement("option");
        option.value = item;
        option.textContent = item;
        select.appendChild(option);
      }
    } else if (type === "text") {
      node.querySelector("input").name = `demo:${question.question}`;
    }
    questionsContainer.appendChild(node);
  }
}

function toggleErrorOn(input) {
  const container = input.closest(".individual-question");
  container.classList.add("border-red-500");
  container.classList.add("border-2");
  console.log("c", container);
}

function toggleErrorOff(input) {
  const container = input.closest(".individual-question");
  container.classList.remove("border-red-500");
  container.classList.remove("border-2");
}

function checkInputs() {
  let i = 0;
  while (true) {
    const inputs = document.querySelectorAll(`input[name="question-${i}"]`);
    if (!inputs.length) {
      return true;
    }
    if (!Array.from(inputs).some((input) => input.checked)) {
      inputs[0].scrollIntoView({
        block: "center",
      });
      toggleErrorOn(inputs[0]);
      return false;
    }
    i++;
  }
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
    let red, green, blue;
    const p = result.score / 100;
    if (result.score > 50) {
      const p = (result.score - 50) / 50;
      const notp = 1 - p;
      red = YELLOW_RGB[0] * notp + GREEN_RGB[0] * p;
      green = YELLOW_RGB[1] * notp + GREEN_RGB[1] * p;
      blue = YELLOW_RGB[2] * notp + GREEN_RGB[2] * p;
    } else {
      const p = result.score / 50;
      const notp = 1 - p;
      red = RED_RGB[0] * notp + YELLOW_RGB[0] * p;
      green = RED_RGB[1] * notp + YELLOW_RGB[1] * p;
      blue = RED_RGB[2] * notp + YELLOW_RGB[2] * p;
    }
    const color = `rgb(${red * 255}, ${green * 255}, ${blue * 255})`;
    match.style.backgroundColor = color;
  });
  resultsElement.style.display = "";
  resultsElement.parentNode.scrollTop = 0;
  questions.parentNode.style.display = "none";
}

const GOOGLE_FORM_URL =
  "https://script.google.com/macros/s/AKfycbw1n2VbB0X_me0toiHmhugSI3tyd_imN4lSVX--EGqzvEtDhAnqg5YKUzE1z1TI9Vc_Xw/exec";

async function sendGoogleSheetData(data) {
  const response = await fetch(GOOGLE_FORM_URL, {
    method: "POST",
    mode: "no-cors", // Since the request is cross-origin
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ submission: data }),
  });
  // Status codes don't work for no-cors requests, so we can't check if the request was successful
  console.log("Form submitted to the best of our knowledge");
  return response;
}
