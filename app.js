const ratingLabels = ["Independent", "Prompted", "Incorrect / unsafe", "Not assessable"];

const domains = [
  {
    id: "hazardDetection",
    title: "Hazard detection",
    question: "What did you notice in the video?",
    prompt: "Record whether the person identifies the main hazard spontaneously or only after prompting."
  },
  {
    id: "riskAppraisal",
    title: "Risk appraisal",
    question: "Why could this be dangerous?",
    prompt: "Explore understanding of likely consequences, severity, and risk to self or others."
  },
  {
    id: "actionChoice",
    title: "Action choice",
    question: "What would you do first?",
    prompt: "Record the first action offered, including whether it prioritises immediate safety."
  },
  {
    id: "sequencing",
    title: "Sequencing",
    question: "What would you do next?",
    prompt: "Explore whether actions are ordered logically and whether help-seeking happens at the right point."
  },
  {
    id: "helpSeeking",
    title: "Help-seeking",
    question: "Would you call anyone? Who?",
    prompt: "Clarify use of family, staff, neighbours, trusted contacts, or emergency services."
  },
  {
    id: "inhibition",
    title: "Inhibition / unsafe actions",
    question: "Is there anything you should not do?",
    prompt: "Explore whether the person can avoid impulsive, risky, or socially unsafe responses."
  },
  {
    id: "personalInsight",
    title: "Personal insight",
    question: "Could something like this happen at home? What would help you stay safe?",
    prompt: "Link observations to the person's home context, communication, cognition, supports, and MDT planning."
  }
];

const scenarios = [
  {
    id: "pan-fire",
    title: "Pan fire",
    category: "Kitchen fire",
    description: "Smoke alarm, unattended pan, and fire response.",
    video: "videos/pan-fire.mp4",
    instruction: "Ask the person to watch the kitchen scene carefully. Replay as needed before asking what they noticed and what they would do.",
    summaryScenario: "Patient viewed a short kitchen-fire video vignette and was asked clinician-led safety judgement questions.",
    choices: [
      ["moveAway", "Move away", "assets/choices/pan-fire/move-away.png"],
      ["turnOffHob", "Turn off the hob", "assets/choices/pan-fire/turn-off-hob.png"],
      ["callHelp", "Call for help", "assets/choices/pan-fire/call-for-help.png"],
      ["call999", "Call 999", "assets/choices/pan-fire/call-999.png"],
      ["useWater", "Put water on it", "assets/choices/pan-fire/put-water-on-it.png"],
      ["pickPan", "Pick up the pan", "assets/choices/pan-fire/pick-up-pan.png"],
      ["ignore", "Ignore it", "assets/choices/pan-fire/ignore-it.png"],
      ["dontKnow", "I don't know", "assets/choices/pan-fire/i-dont-know.png"]
    ]
  },
  {
    id: "traffic",
    title: "Traffic hazard",
    category: "Community safety",
    description: "Road-risk awareness and impulse control.",
    video: "videos/traffic.mp4",
    instruction: "Ask the person to watch the road scene carefully. Pause after viewing and ask what they noticed before offering choices.",
    summaryScenario: "Patient viewed a short traffic-hazard video vignette and was asked clinician-led safety judgement questions.",
    choices: [
      ["warnChild", "Shout to the child", "assets/choices/traffic/shout-to-child.png"],
      ["stepRoad", "Step into the road", "assets/choices/traffic/step-into-road.png"],
      ["alertDriver", "Alert the driver", "assets/choices/traffic/alert-driver.png"],
      ["watch", "Watch and do nothing", "assets/choices/traffic/watch-do-nothing.png"],
      ["walkAway", "Walk away", "assets/choices/traffic/walk-away.png"],
      ["call999", "Call 999", "assets/choices/traffic/call-999.png"],
      ["stopWait", "Stop and wait", "assets/choices/traffic/stop-wait.png"],
      ["dontKnow", "I don't know", "assets/choices/traffic/i-dont-know.png"]
    ]
  },
  {
    id: "trip-hazard",
    title: "Trip hazard",
    category: "Home mobility",
    description: "Fall prevention and environmental safety.",
    video: "videos/trip-hazard.mp4",
    instruction: "Ask the person to watch the home scene carefully. Explore whether they notice the trip risk and how they would manage it.",
    summaryScenario: "Patient viewed a short trip-hazard video vignette and was asked clinician-led safety judgement questions.",
    choices: [
      ["stop", "Stop", "assets/choices/trip-hazard/stop.png"],
      ["moveAround", "Move around it", "assets/choices/trip-hazard/move-around.png"],
      ["clearHazard", "Clear the hazard", "assets/choices/trip-hazard/clear-hazard.png"],
      ["askHelp", "Ask for help", "assets/choices/trip-hazard/ask-for-help.png"],
      ["useAid", "Use aid or handrail", "assets/choices/trip-hazard/use-aid-handrail.png"],
      ["stepOver", "Step over quickly", "assets/choices/trip-hazard/step-over-quickly.png"],
      ["ignore", "Ignore it", "assets/choices/trip-hazard/ignore-it.png"],
      ["dontKnow", "I don't know", "assets/choices/trip-hazard/i-dont-know.png"]
    ]
  },
  {
    id: "unwell-person",
    title: "Unwell person",
    category: "Medical emergency",
    description: "Responding when another person becomes unwell.",
    video: "videos/unwell-person.mp4",
    instruction: "Ask the person to watch the scene carefully. Explore what they would do first and when they would call for help.",
    summaryScenario: "Patient viewed a short unwell-person video vignette and was asked clinician-led safety judgement questions.",
    choices: [
      ["checkResponse", "Check response", "assets/choices/unwell-person/check-response.png"],
      ["callHelp", "Call for help", "assets/choices/unwell-person/call-for-help.png"],
      ["call999", "Call 999", "assets/choices/unwell-person/call-999.png"],
      ["stay", "Stay with them", "assets/choices/unwell-person/stay-with-them.png"],
      ["foodDrink", "Give food or drink", "assets/choices/unwell-person/give-food-drink.png"],
      ["moveThem", "Move them", "assets/choices/unwell-person/move-them.png"],
      ["ignore", "Walk away", "assets/choices/unwell-person/ignore-walk-away.png"],
      ["dontKnow", "I don't know", "assets/choices/unwell-person/i-dont-know.png"]
    ]
  },
  {
    id: "possible-scam",
    title: "Possible scam",
    category: "Social risk",
    description: "Doorstep safety, disclosure, and entry judgement.",
    video: "videos/possible-scam.mp4",
    instruction: "Ask the person to watch the doorstep scene carefully. Explore whether they recognise the social risk and how they would respond.",
    summaryScenario: "Patient viewed a short possible-scam video vignette and was asked clinician-led safety judgement questions.",
    choices: [
      ["keepDoor", "Keep door partly closed", "assets/choices/possible-scam/keep-door-partly-closed.png"],
      ["askId", "Ask for ID", "assets/choices/possible-scam/ask-for-id.png"],
      ["callTrusted", "Call trusted person", "assets/choices/possible-scam/call-trusted-person.png"],
      ["refuseEntry", "Refuse entry", "assets/choices/possible-scam/refuse-entry.png"],
      ["giveDetails", "Give personal details", "assets/choices/possible-scam/give-personal-details.png"],
      ["letIn", "Let them in", "assets/choices/possible-scam/let-them-in.png"],
      ["handMoney", "Hand over money/card", "assets/choices/possible-scam/hand-over-money-card.png"],
      ["dontKnow", "I don't know", "assets/choices/possible-scam/i-dont-know.png"]
    ]
  },
  {
    id: "overflowing-sink",
    title: "Overflowing sink",
    category: "Kitchen water/electrical risk",
    description: "Water hazard near electrical items.",
    video: "videos/overflowing-sink.mp4",
    instruction: "Ask the person to watch the kitchen scene carefully. Explore whether they notice both water and electrical risk.",
    summaryScenario: "Patient viewed a short overflowing-sink video vignette and was asked clinician-led safety judgement questions.",
    choices: [
      ["turnOffTap", "Turn off tap", "assets/choices/overflowing-sink/turn-off-tap.png"],
      ["switchPower", "Switch off power", "assets/choices/overflowing-sink/switch-off-power.png"],
      ["moveAway", "Move away", "assets/choices/overflowing-sink/move-away.png"],
      ["callHelp", "Call for help", "assets/choices/overflowing-sink/call-for-help.png"],
      ["call999", "Call 999", "assets/choices/overflowing-sink/call-999.png"],
      ["touchAppliance", "Touch wet appliance", "assets/choices/overflowing-sink/touch-wet-appliance.png"],
      ["ignore", "Ignore it", "assets/choices/overflowing-sink/ignore-it.png"],
      ["dontKnow", "I don't know", "assets/choices/overflowing-sink/i-dont-know.png"]
    ]
  }
].map((scenario) => ({
  ...scenario,
  choices: scenario.choices.map(([id, label, image]) => ({ id, label, image }))
}));

const els = {};
let activeScenario = scenarios[0];
let activeTab = "questions";
let imageOnly = false;
let deferredInstallPrompt = null;

function storageKey(scenarioId) {
  return `neurorehabSafetyVignette:${scenarioId}`;
}

function loadState(scenarioId) {
  try {
    return JSON.parse(localStorage.getItem(storageKey(scenarioId)) || "{}");
  } catch {
    return {};
  }
}

function saveState() {
  localStorage.setItem(storageKey(activeScenario.id), JSON.stringify(getState()));
}

function getState() {
  return loadState(activeScenario.id);
}

function setState(nextState) {
  localStorage.setItem(storageKey(activeScenario.id), JSON.stringify(nextState));
}

function patchState(patch) {
  setState({ ...getState(), ...patch });
}

function selectedChoiceLabels() {
  const selected = getState().selectedChoices || [];
  return activeScenario.choices.filter((choice) => selected.includes(choice.id)).map((choice) => choice.label);
}

function byId(id) {
  return document.getElementById(id);
}

function initElements() {
  [
    "scenarioList", "scenarioSelect", "scenarioCategory", "scenarioTitle", "scenarioDescription",
    "scenarioInstruction", "scenarioVideo", "playButton", "pauseButton", "replayButton",
    "questionsTab", "choicesTab", "summaryTab", "questionsView", "choicesView", "summaryView",
    "domainContainer", "choiceContainer", "showChoiceLabels", "summaryText",
    "copySummaryButton", "downloadSummaryButton", "downloadJsonButton", "clearScenarioButton",
    "patientRef", "clinicianName", "overallNotes", "choiceNotes", "installButton",
    "introPage", "appShell", "startAppButton"
  ].forEach((id) => {
    els[id] = byId(id);
  });
}

function renderScenarioNav() {
  els.scenarioList.innerHTML = "";
  els.scenarioSelect.innerHTML = "";

  scenarios.forEach((scenario) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `scenario-button${scenario.id === activeScenario.id ? " active" : ""}`;
    button.innerHTML = `<strong>${scenario.title}</strong><span>${scenario.category}</span>`;
    button.addEventListener("click", () => setScenario(scenario.id));
    els.scenarioList.appendChild(button);

    const option = document.createElement("option");
    option.value = scenario.id;
    option.textContent = scenario.title;
    els.scenarioSelect.appendChild(option);
  });

  els.scenarioSelect.value = activeScenario.id;
}

function renderScenarioHeader() {
  els.scenarioCategory.textContent = activeScenario.category;
  els.scenarioTitle.textContent = activeScenario.title;
  els.scenarioDescription.textContent = activeScenario.description;
  els.scenarioInstruction.textContent = activeScenario.instruction;
  els.scenarioVideo.innerHTML = "";
  const source = document.createElement("source");
  source.src = activeScenario.video;
  source.type = "video/mp4";
  els.scenarioVideo.appendChild(source);
  els.scenarioVideo.load();
}

function renderFields() {
  const state = getState();
  els.patientRef.value = state.patientRef || "";
  els.clinicianName.value = state.clinicianName || "";
  els.overallNotes.value = state.overallNotes || "";
  els.choiceNotes.value = state.choiceNotes || "";
}

function renderDomains() {
  const state = getState();
  els.domainContainer.innerHTML = "";

  domains.forEach((domain, index) => {
    const saved = state.domains?.[domain.id] || {};
    const wrapper = document.createElement("section");
    wrapper.className = "domain";
    wrapper.innerHTML = `
      <div class="domain-title">
        <h3>${index + 1}. ${domain.title}</h3>
        <span>Clinician-rated</span>
      </div>
      <p class="question">${domain.question}</p>
      <p class="prompt">${domain.prompt}</p>
      <div class="rating-row" role="radiogroup" aria-label="${domain.title} rating">
        ${ratingLabels.map((label) => `
          <label>
            <input type="radio" name="${domain.id}-rating" value="${label}" ${saved.rating === label ? "checked" : ""} />
            ${label}
          </label>
        `).join("")}
      </div>
      <textarea id="${domain.id}-note" rows="3" placeholder="Clinical note for ${domain.title.toLowerCase()}...">${saved.note || ""}</textarea>
    `;

    wrapper.querySelectorAll(`input[name="${domain.id}-rating"]`).forEach((input) => {
      input.addEventListener("change", () => {
        const next = getState();
        next.domains = next.domains || {};
        next.domains[domain.id] = { ...(next.domains[domain.id] || {}), rating: input.value };
        setState(next);
        updateSummary();
      });
    });

    wrapper.querySelector(`#${domain.id}-note`).addEventListener("input", (event) => {
      const next = getState();
      next.domains = next.domains || {};
      next.domains[domain.id] = { ...(next.domains[domain.id] || {}), note: event.target.value };
      setState(next);
      updateSummary();
    });

    els.domainContainer.appendChild(wrapper);
  });
}

function buildChoiceCard(choice) {
  const selected = (getState().selectedChoices || []).includes(choice.id);
  const card = document.createElement("button");
  card.type = "button";
  card.className = `choice-card${selected ? " selected" : ""}`;
  card.setAttribute("aria-label", choice.label);
  card.setAttribute("aria-pressed", selected ? "true" : "false");
  card.innerHTML = `<img src="${choice.image}" alt="" aria-hidden="true" loading="lazy" /><strong>${choice.label}</strong>`;
  card.addEventListener("click", () => toggleChoice(choice.id));
  return card;
}

function renderChoices() {
  els.choiceContainer.classList.toggle("patient-image-only", imageOnly);
  els.showChoiceLabels.checked = !imageOnly;
  els.choiceContainer.innerHTML = "";

  activeScenario.choices.forEach((choice) => {
    els.choiceContainer.appendChild(buildChoiceCard(choice));
  });
}

function toggleChoice(choiceId) {
  const state = getState();
  const selected = state.selectedChoices || [];
  state.selectedChoices = selected.includes(choiceId)
    ? selected.filter((id) => id !== choiceId)
    : [...selected, choiceId];
  setState(state);
  renderChoices();
  updateSummary();
}

function updateSummary() {
  const state = getState();
  const lines = [];
  lines.push(`Emergency safety vignette - ${activeScenario.title}`);
  lines.push("Structured clinical observation aid. No automated judgement made.");
  lines.push("");
  lines.push(`Scenario: ${activeScenario.summaryScenario}`);
  if (state.patientRef || state.clinicianName) {
    lines.push("");
    if (state.patientRef) lines.push(`Patient reference: ${state.patientRef}`);
    if (state.clinicianName) lines.push(`Clinician: ${state.clinicianName}`);
  }
  lines.push("");
  lines.push("Domain ratings and notes:");

  domains.forEach((domain) => {
    const item = state.domains?.[domain.id] || {};
    lines.push(`- ${domain.title}: ${item.rating || "not rated"}`);
    if (item.note?.trim()) lines.push(`  Notes: ${item.note.trim()}`);
  });

  const choiceLabels = selectedChoiceLabels();
  lines.push("");
  lines.push(`Supported-choice options selected: ${choiceLabels.length ? choiceLabels.join("; ") : "none recorded"}`);
  if (state.choiceNotes?.trim()) lines.push(`Supported-choice notes: ${state.choiceNotes.trim()}`);
  if (state.overallNotes?.trim()) {
    lines.push("");
    lines.push(`Overall formulation/contextual notes: ${state.overallNotes.trim()}`);
  }
  lines.push("");
  lines.push("Interpretation remains clinician-led and should be integrated with MDT assessment, functional observation, collateral information and communication/cognitive profile.");

  els.summaryText.textContent = lines.join("\n");
}

function structuredJson() {
  const state = getState();
  return {
    scenario: {
      id: activeScenario.id,
      title: activeScenario.title,
      category: activeScenario.category
    },
    patientRef: state.patientRef || "",
    clinicianName: state.clinicianName || "",
    domains: domains.reduce((acc, domain) => {
      acc[domain.id] = {
        title: domain.title,
        rating: state.domains?.[domain.id]?.rating || "",
        note: state.domains?.[domain.id]?.note || ""
      };
      return acc;
    }, {}),
    selectedChoices: activeScenario.choices
      .filter((choice) => (state.selectedChoices || []).includes(choice.id))
      .map((choice) => ({ id: choice.id, label: choice.label })),
    choiceNotes: state.choiceNotes || "",
    overallNotes: state.overallNotes || "",
    generatedAt: new Date().toISOString(),
    disclaimer: "Interpretation remains clinician-led and should be integrated with MDT assessment, functional observation, collateral information and communication/cognitive profile."
  };
}

function switchTab(tab) {
  activeTab = tab;
  els.questionsView.hidden = tab !== "questions";
  els.choicesView.hidden = tab !== "choices";
  els.summaryView.hidden = tab !== "summary";
  els.questionsTab.classList.toggle("active", tab === "questions");
  els.choicesTab.classList.toggle("active", tab === "choices");
  els.summaryTab.classList.toggle("active", tab === "summary");
  updateSummary();
}

function setScenario(id) {
  activeScenario = scenarios.find((scenario) => scenario.id === id) || scenarios[0];
  renderScenarioNav();
  renderScenarioHeader();
  renderFields();
  renderDomains();
  renderChoices();
  updateSummary();
}

function download(filename, contents, type) {
  const blob = new Blob([contents], { type });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

function wireEvents() {
  els.startAppButton.addEventListener("click", () => {
    document.body.classList.remove("intro-active");
    els.introPage.hidden = true;
    els.appShell.hidden = false;
  });

  els.scenarioSelect.addEventListener("change", (event) => setScenario(event.target.value));
  els.playButton.addEventListener("click", () => {
    els.scenarioVideo.currentTime = 0;
    els.scenarioVideo.play();
  });
  els.pauseButton.addEventListener("click", () => els.scenarioVideo.pause());
  els.replayButton.addEventListener("click", () => {
    els.scenarioVideo.currentTime = 0;
    els.scenarioVideo.play();
  });

  els.questionsTab.addEventListener("click", () => switchTab("questions"));
  els.choicesTab.addEventListener("click", () => switchTab("choices"));
  els.summaryTab.addEventListener("click", () => switchTab("summary"));
  els.showChoiceLabels.addEventListener("change", (event) => {
    imageOnly = !event.target.checked;
    renderChoices();
  });

  ["patientRef", "clinicianName", "overallNotes", "choiceNotes"].forEach((id) => {
    els[id].addEventListener("input", (event) => {
      patchState({ [id]: event.target.value });
      updateSummary();
    });
  });

  els.copySummaryButton.addEventListener("click", async () => {
    updateSummary();
    try {
      await navigator.clipboard.writeText(els.summaryText.textContent);
      els.copySummaryButton.textContent = "Copied";
      setTimeout(() => { els.copySummaryButton.textContent = "Copy summary"; }, 1400);
    } catch {
      window.alert("Copy failed. You can manually select and copy the summary text.");
    }
  });

  els.downloadSummaryButton.addEventListener("click", () => {
    updateSummary();
    download(`${activeScenario.id}-safety-vignette-summary.txt`, els.summaryText.textContent, "text/plain");
  });

  els.downloadJsonButton.addEventListener("click", () => {
    download(`${activeScenario.id}-safety-vignette-observation.json`, JSON.stringify(structuredJson(), null, 2), "application/json");
  });

  els.clearScenarioButton.addEventListener("click", () => {
    if (!window.confirm(`Clear entries for ${activeScenario.title}?`)) return;
    localStorage.removeItem(storageKey(activeScenario.id));
    setScenario(activeScenario.id);
  });

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    els.installButton.hidden = false;
  });

  els.installButton.addEventListener("click", async () => {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    els.installButton.hidden = true;
  });
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js").catch(() => {});
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initElements();
  wireEvents();
  setScenario(activeScenario.id);
  switchTab(activeTab);
  registerServiceWorker();
});
