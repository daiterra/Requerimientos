//#region Data Structure
const data = [
  {
    party: "Partido Político 1",
    image: "kicillof.png",
    color: "color-first",
    bg: "bg-first",
    //type: "executive", // legislative
    participants: [],
    department: "Artigas",
    president: {
      name: "Nombre Político 1",
      job: "Cargo 1",
    },
    vicePresident: {
      name: "Nombre Político 2",
      job: "Cargo 2",
    },
  },
];

const selectOptions = [
  { label: "Artigas" },
  { label: "Canelones" },
  { label: "Cerro Largo" },
  { label: "Colonia" },
  { label: "Durazno" },
  { label: "Flores" },
  { label: "Florida" },
  { label: "Lavalleja" },
  { label: "Maldonado" },
  { label: "Montevideo" },
  { label: "Paysandú" },
  { label: "Río Negro" },
  { label: "Rivera" },
  { label: "Rocha" },
  { label: "Salto" },
  { label: "San José" },
  { label: "Soriano" },
  { label: "Tacuarembó" },
  { label: "Treinta y Tres" },
];

const socialsData = [
  { social: "Facebook", icon: "like.svg" },
  { social: "Instagram", icon: "like.svg" },
  { social: "Whatsapp", icon: "like.svg" },
];
//#endregion

//#region Methods
function createSection(job, department) {
  const section = document.createElement("section");
  const headingContainer = document.createElement("div");

  section.className = "section-container";
  headingContainer.className = "heading-container";

  const headingTemplate = `
      <div class="heading">
          <span class="heading-title">${job}</span>
          <span class="heading-location">${department}</span>
      </div>`;

  headingContainer.innerHTML = headingTemplate;
  section.appendChild(headingContainer);

  return section;
}

function socialLink(social, icon) {
  return `<a href="#" target="_blank" data-social-service="${social}">
    <img src="assets/${icon}" style="width:20px; height:20px;" alt="${social} icon" />
</a>`;
}

function createSocials() {
  const socialsParent = document.createElement("div");
  socialsParent.className = "social";

  socialsData.forEach((social) => {
    const socialLinks = socialLink(social.social, social.icon);
    socialsParent.innerHTML += socialLinks;
  });

  return socialsParent;
}

function loadStates(container) {
  // Crea las opciones en base a selectOptions
  selectOptions.forEach((option, index) => {
    const newOption = document.createElement("option");
    newOption.value = index + 1;
    newOption.textContent = option.label;
    container.appendChild(newOption);
  });
}

function createSlider(parent, slides = []) {
  const glide = document.createElement("div");
  glide.className = "glide";

  const glideTrack = document.createElement("div");
  glideTrack.className = "glide__track";
  glideTrack.setAttribute("data-glide-el", "track");

  glide.appendChild(glideTrack);

  const glideSlides = document.createElement("ul");
  glideSlides.className = "glide__slides";
  glide.appendChild(glideSlides);

  slides.forEach((item) => {
    const li = glideSlides.createElement("li");
    li.className = "glide__slide";
    glideSlides.appendChild(li);
  });

  parent.appendChild(glide);

  return {
    slider: glide,
    slides: glideSlides,
  };
}

function createArticle() {
  const article = document.createElement("article");
  article.className = "card-container";

  const partyTag = document.createElement("h3");
  partyTag.className = "card-title party president";

  const photoTag = document.createElement("div");
  photoTag.className = "card-image-container";
  photoTag.innerHTML =
    '<img src="https://elecciones2019.lanacion.com.ar/admin/media/candidatos_fotos/kicillof.png" alt="figure" />';

  article.appendChild(partyTag);
  article.appendChild(photoTag);

  article.appendChild(createSpan("cargo politico", "office"));
  article.appendChild(createSpan("nombre politico", "name1"));
  article.appendChild(createSpan("", "divider"));
  article.appendChild(createSpan("cargo politico", "subordinate"));
  article.appendChild(createSpan("nombre politico", "name2"));

  const li = document.createElement("li");
  li.appendChild(article);

  return li;
}

function createSpan(content, className) {
  const span = document.createElement("span");
  span.className = className;
  span.innerText = content;

  return span;
}

function handleStateChange(event) {}

//#endregion

function initialize() {
  const departmentsDropdown = document.getElementById("dropdownMenu");
  departmentsDropdown.addEventListener("change", handleStateChange);
  loadStates(departmentsDropdown);

  // Creando sección padre y sus respectivos hijos
  const sectionParents = document.querySelector("#sections-parent");

  const section = createSection("Diputados", "Canelones");
  const socialSection = createSocials();

  sectionParents.appendChild(section);
  section.appendChild(socialSection);

  const newSlider = createSlider(section, []);

  newSlider.slides.appendChild(createArticle()); // TODO: Pasar la data que va
  newSlider.slides.appendChild(createArticle());
  newSlider.slides.appendChild(createArticle());
  newSlider.slides.appendChild(createArticle());
  newSlider.slides.appendChild(createArticle());
  newSlider.slides.appendChild(createArticle());

  new Glide(newSlider.slider, {}).mount();
}

// App
initialize();
