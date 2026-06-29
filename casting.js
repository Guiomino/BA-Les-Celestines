const castingData = [
  {
    title: "Narration",
    items: [
      { character: "Narration principale", actor: "Antoine Sonnet" }
    ]
  },

  {
    title: "Personnages principaux",
    items: [
      { character: "Inaya", actor: "Syriann Rinchet" },
      { character: "Sami", actor: "Élie Estrade" },
      { character: "Charlie", actor: "Mai Try-Di Biase" },
      { character: "Monsieur Archilexic", actor: "Idriss Saoula" },
      { character: "Héloïse", actor: "Shirley Viginier" }
    ]
  },

  {
    title: "Personnages des livres",
    items: [
      { character: "Seigneur Coassefort", actor: "Guillaume Estrade" },
      { character: "Duchesse Hurluberlu", actor: "Guillaume Estrade" },
      { character: "Capitaine Barbe Lustre", actor: "Antoine Sonnet" },
      { character: "Robot de service", actor: "Guillaume Estrade" },
      { character: "MamamIA", actor: "Antoine Sonnet" },
      { character: "Rex", actor: "Antoine Sonnet" },
      { character: "Roxane", actor: "Laurie Chappuy" },
      { character: "Les Croustillons", actor: "Antoine Sonnet" },
      { character: "Tuba", actor: "Antoine Sonnet" },
      { character: "Roi Trouillardos", actor: "Guillaume Estrade" },
      { character: "Maelstrom", actor: "Guillaume Estrade" },
      { character: "Victor de Lumilune", actor: "Guillaume Estrade" },
      { character: "Soporifine", actor: "Guillaume Estrade" },
      { character: "Somnifelle", actor: "Laurie Chappuy" },
      { character: "La licorne", actor: "Guillaume Estrade" },
      { character: "Le monstre rose", actor: "Guillaume Estrade" },
      { character: "Les Gamaglus", actor: "Guillaume Estrade" },
      { character: "Princesse Sideralis", actor: "Laurie Chappuy" },
      { character: "L'Ombrelis", actor: "Laurie Chappuy" }
    ]
  },

  {
    title: "Personnages secondaires",
    items: [
      { character: "Monsieur Conteclaire", actor: "Idriss Saoula" },
      { character: "Madame Feuillebois", actor: "Laurie Chappuy" },
      { character: "Madame Chiner", actor: "Laurie Chappuy" },
      { character: "Les soeurs de Sami", actor: "Laurie Chappuy" },
      { character: "Les Mamans", actor: "Émilie Estrade" },
      { character: "Les Papas", actor: "Guillaume Estrade" }
    ]
  },

  {
    title: "Chansons",
    items: [
      { character: "Chant épisodes 1-2-3-4-5-6-7-10-11", actor: "Syriann Rinchet" },
      { character: "Chant épisodes 8-9", actor: "Shirley Viginier" }
    ]
  }
];

function createCastingBlock(section) {
  const block = document.createElement("div");
  block.className = "mini-card casting-block";

  const h3 = document.createElement("h3");
  h3.textContent = section.title;
  block.appendChild(h3);

  section.items.forEach(item => {
    const row = document.createElement("div");
    row.className = "voice-row";

    const c = document.createElement("span");
    c.className = "character";
    c.textContent = item.character;

    const line = document.createElement("span");
    line.className = "line";

    const a = document.createElement("span");
    a.className = "actor";
    a.textContent = item.actor;

    row.appendChild(c);
    row.appendChild(line);
    row.appendChild(a);

    block.appendChild(row);
  });

  return block;
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("casting-container");

  castingData.forEach(section => {
    container.appendChild(createCastingBlock(section));
  });
});