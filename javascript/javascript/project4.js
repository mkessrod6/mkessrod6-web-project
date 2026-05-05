const heroMap = {
  aggressive: {
    hero: "Shiv",
    desc: "You thrive on constant combat. Shiv rewards players who never back down — the longer you fight, the stronger you get."
  },
  support: {
    hero: "Kelvin",
    desc: "You keep your team alive. Kelvin's healing and crowd control abilities make you the backbone of any squad."
  },
  sniper: {
    hero: "Vindicta",
    desc: "Precision is your game. Vindicta's long-range rifle and high-ground mobility let you pick off enemies from a distance."
  },
  tank: {
    hero: "Abrams",
    desc: "You lead the charge. Abrams soaks up punishment and disrupts enemies with powerful slams, making you impossible to ignore."
  },
  mage: {
    hero: "Seven",
    desc: "You deal devastating spell damage. Seven's lightning arsenal lets you nuke enemies from range and dominate teamfights."
  }
};

// Get DOM elements
const btn        = document.getElementById("recommend-btn");
const nameInput  = document.getElementById("player-name");
const styleInput = document.getElementById("playstyle");
const resultBox  = document.getElementById("result-box");

// Event listener on button click
btn.addEventListener("click", function () {
  const playerName  = nameInput.value.trim();
  const playstyle   = styleInput.value;

  // Validate inputs
  if (!playerName) {
    resultBox.innerHTML = `<p class="result-desc" style="color: #e84040;">Please enter your name before getting a recommendation.</p>`;
    resultBox.classList.add("visible");
    return;
  }

  if (!playstyle) {
    resultBox.innerHTML = `<p class="result-desc" style="color: #e84040;">Please select a playstyle to continue.</p>`;
    resultBox.classList.add("visible");
    return;
  }

  // Look up recommendation
  const rec = heroMap[playstyle];

  // Build and display result
  resultBox.innerHTML = `
    <p class="result-name">Recommendation for ${playerName}</p>
    <p class="result-hero">${rec.hero}</p>
    <p class="result-desc">${rec.desc}</p>
  `;

  resultBox.classList.add("visible");
});

// Allow pressing Enter in the name field to trigger recommendation
nameInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    btn.click();
  }
});
