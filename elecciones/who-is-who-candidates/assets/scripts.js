//#region Data Structure
const data = [
    {
        party: "Frente Amplio",
        image: "FERNANDEZ1.png", // ver de pasarle el link de la imagen de forma dinamica
        color: "color-first",
        bg: "bg-first",
        department: "",
        firstPosition: {
            name: "Yamandú Orsi",
            job: "Presidente",
        },
        secondPosition: {
            name: "Otra Persona",
            job: "Vicepresidente",
        },
        applicants: [],
    },
    {
        party: "Partido de los Trabajadores",
        image: "MASSA.png", // ver de pasarle el link de la imagen de forma dinamica
        color: "color-second",
        bg: "bg-second",
        department: "Artigas",
        firstPosition: {
            name: "Massa",
            job: "Presidente",
        },
        secondPosition: {
            name: "Otro más",
            job: "Vicepresidente",
        },
        applicants: [],
    },
    {
        party: "Partido Independiente",
        image: "LAVAGNA1.png", // ver de pasarle el link de la imagen de forma dinamica
        color: "color-third",
        bg: "bg-third",
        department: "Artigas",
        firstPosition: {
            name: "R. Lavagna",
            job: "Presidente",
        },
        secondPosition: {
            name: "Otra de Lav",
            job: "Vicepresidente",
        },
        applicants: [],
    },

    {
        party: "Partido Colorado",
        image: "FERNANDEZ1.png", // ver de pasarle el link de la imagen de forma dinamica
        color: "color-fourth",
        bg: "bg-fourth",
        department: "Montevideo",
        firstPosition: {
            name: "--",
            job: "Diputado",
        },
        secondPosition: {
            name: "--",
            job: "--",
        },
        applicants: ["M. Ferro", "V.M. Gorleri", "E. Yacobitti"],
    },
    {
        party: "Partido Colorado",
        image: "FERNANDEZ1.png", // ver de pasarle el link de la imagen de forma dinamica
        color: "color-fourth",
        bg: "bg-fourth",
        department: "Maldonado",
        firstPosition: {
            name: "--",
            job: "Senador",
        },
        secondPosition: {
            name: "--",
            job: "--",
        },
        applicants: [
            "M. Ferro",
            "V.M. Gorleri",
            "E. Yacobitti",
            "M. Ferro",
            "V.M. Gorleri",
            "E. Yacobitti",
            "M. Ferro",
            "V.M. Gorleri",
            "E. Yacobitti",
            "M. Ferro",
            "V.M. Gorleri",
            "E. Yacobitti",
        ],
    },
    {
        party: "Partido Colorado",
        image: "MASSA.png", // ver de pasarle el link de la imagen de forma dinamica
        color: "color-first",
        bg: "bg-first",
        department: "Artigas",
        firstPosition: {
            name: "--",
            job: "Senador",
        },
        secondPosition: {
            name: "--",
            job: "--",
        },
        applicants: [
            "M. Ferro",
            "V.M. Gorleri",
            "E. Yacobitti",
            "M. Ferro",
            "V.M. Gorleri",
            "E. Yacobitti",
            "M. Ferro",
            "V.M. Gorleri",
            "E. Yacobitti",
            "M. Ferro",
            "V.M. Gorleri",
            "E. Yacobitti",
        ],
    },
    {
        party: "Partido Colorado",
        image: "MASSA.png", // ver de pasarle el link de la imagen de forma dinamica
        color: "color-first",
        bg: "bg-first",
        department: "Artigas",
        firstPosition: {
            name: "--",
            job: "Senador",
        },
        secondPosition: {
            name: "--",
            job: "--",
        },
        applicants: ["M. Ferro", "V.M. Gorleri", "E. Yacobitti"],
    },
    {
        party: "Partido Colorado",
        image: "MASSA.png", // ver de pasarle el link de la imagen de forma dinamica
        color: "color-first",
        bg: "bg-first",
        department: "Artigas",
        firstPosition: {
            name: "--",
            job: "Senador",
        },
        secondPosition: {
            name: "--",
            job: "--",
        },
        applicants: ["M. Ferro", "V.M. Gorleri", "E. Yacobitti"],
    },
    {
        party: "Partido Colorado",
        image: "MASSA.png", // ver de pasarle el link de la imagen de forma dinamica
        color: "color-first",
        bg: "bg-first",
        department: "Artigas",
        firstPosition: {
            name: "--",
            job: "Senador",
        },
        secondPosition: {
            name: "--",
            job: "--",
        },
        applicants: ["M. Ferro", "V.M. Gorleri", "E. Yacobitti"],
    },
    {
        party: "Partido Colorado",
        image: "MASSA.png", // ver de pasarle el link de la imagen de forma dinamica
        color: "color-first",
        bg: "bg-first",
        department: "Artigas",
        firstPosition: {
            name: "--",
            job: "Senador",
        },
        secondPosition: {
            name: "--",
            job: "--",
        },
        applicants: ["M. Ferro", "V.M. Gorleri", "E. Yacobitti"],
    },
    {
        party: "Partido Colorado",
        image: "LAVAGNA1.png", // ver de pasarle el link de la imagen de forma dinamica
        color: "color-first",
        bg: "bg-first",
        department: "Montevideo",
        firstPosition: {
            name: "--",
            job: "Diputado",
        },
        secondPosition: {
            name: "--",
            job: "--",
        },
        applicants: ["M. Ferro", "V.M. Gorleri", "E. Yacobitti"],
    },
    {
        party: "Partido Colorado",
        image: "MASSA.png", // ver de pasarle el link de la imagen de forma dinamica
        color: "color-first",
        bg: "bg-first",
        department: "Rivera",
        firstPosition: {
            name: "--",
            job: "Diputado",
        },
        secondPosition: {
            name: "--",
            job: "--",
        },
        applicants: ["M. Ferro", "V.M. Gorleri", "E. Yacobitti"],
    },
]

const selectDepartment = [
    // { label: "All departments" },
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
]

const socialsData = [
    {
        social: "Facebook",
        icon: "#mono-icon-facebook",
    },
    {
        social: "Instagram",
        icon: "#mono-icon-instagram",
    },
    {
        social: "Whatsapp",
        icon: "#mono-icon-whatsapp",
    },
    // {
    //     social: "Like",
    //     icon: "../assets/like.svg",
    // },
]

const glideOptions = {
    type: "slider",
    perView: 4,
    perTouch: false,
    breakpoints: {
        700: {
            perView: 2,
        },
        1200: {
            perView: 3,
        },
    },
    rewind: false,
    animationTimingFunc: "ease",
}

//#endregion

//#region Methods
function filterDataBy(filterFunction) {
    return data.filter(filterFunction)
}
function createSection(job, department) {
    const section = document.createElement("section")
    const headingContainer = document.createElement("div")

    section.className = "section-container"
    headingContainer.className = "heading-container"

    const headingTemplate = `
    <div class="heading">
        <span class="heading-title">${job}</span>
        <span class="heading-location">${department}</span>
    </div>`

    headingContainer.innerHTML = headingTemplate
    section.appendChild(headingContainer)

    return section
}

// function socialLink(social, icon) {
//     return `<a href="#" target="_blank" data-social-service="${social}">
//   <img src="assets/${icon}" style="width:20px; height:20px;" alt="${social} icon" />
// </a>`
// }
function socialLink(social, icon) {
    return `<a href="#" target="_blank" data-social-service="${social}">
        <svg>
            <use xlink:href="${icon}"></use>
        </svg>
    </a>`
}

function createSocials() {
    const socialsParent = document.createElement("div")
    socialsParent.className = "social"

    socialsData.forEach((social) => {
        const socialLinks = socialLink(social.social, social.icon)
        socialsParent.innerHTML += socialLinks
    })

    return socialsParent
}

function loadDepartments(container) {
    // Crea las opciones en base a selectDepartment
    selectDepartment.forEach((option, index) => {
        const newOption = document.createElement("option")
        newOption.value = index + 1
        newOption.textContent = option.label
        container.appendChild(newOption)
    })
}

function createSlider(parent) {
    const glide = document.createElement("div")
    glide.className = "glide"

    const glideTrack = document.createElement("div")
    glideTrack.className = "glide__track"
    glideTrack.setAttribute("data-glide-el", "track")

    glide.appendChild(glideTrack)

    const glideSlides = document.createElement("ul")
    glideSlides.className = "glide__slides"
    glideTrack.appendChild(glideSlides)
    const glideArrows = createGlideArrows()
    const glideBullets = createGlideBullets(3)
    glideTrack.appendChild(glideArrows)
    glideTrack.appendChild(glideBullets)
    parent.appendChild(glide)

    return {
        slider: glide,
        slides: glideSlides,
    }
}
function createGlideArrows() {
    const arrowsDiv = document.createElement("div")
    arrowsDiv.className = "glide__arrows"
    arrowsDiv.setAttribute("data-glide-el", "controls")

    const leftButton = document.createElement("button")
    leftButton.className = "glide__arrow glide__arrow--left"
    leftButton.setAttribute("data-glide-dir", "<")
    leftButton.textContent = "<"
    const leftSvgTemplate = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
    <path d="M0 12l10.975 11 2.848-2.828-6.176-6.176H24v-3.992H7.646l6.176-6.176L10.975 1 0 12z">
    </path>
    </svg>`
    leftButton.innerHTML = leftSvgTemplate
    const rightButton = document.createElement("button")
    rightButton.className = "glide__arrow glide__arrow--right"
    rightButton.setAttribute("data-glide-dir", ">")
    rightButton.textContent = ">"
    const rightSvgTemplate = `
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
        <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"></path>
    </svg>
`
    rightButton.innerHTML = rightSvgTemplate
    arrowsDiv.appendChild(leftButton)
    arrowsDiv.appendChild(rightButton)

    return arrowsDiv
}
function createGlideBullets(numBullets) {
    const bulletsDiv = document.createElement("div")
    bulletsDiv.className = "glide__bullets"
    bulletsDiv.setAttribute("data-glide-el", "controls[nav]")

    for (let i = 0; i < numBullets; i++) {
        const bulletButton = document.createElement("button")
        bulletButton.className = "glide__bullet"
        bulletButton.setAttribute("data-glide-dir", `=${i}`)
        bulletsDiv.appendChild(bulletButton)
    }

    return bulletsDiv
}

function createNumberedList(items, bg) {
    const ol = document.createElement("ol")
    ol.className = "legislative-list"

    items.forEach((item, index) => {
        const li = document.createElement("li")
        li.className = "legislative-item"
        li.innerText = item
        if (index === 0) {
            li.classList.add(bg)
        }
        ol.appendChild(li)
    })

    return ol
}
function createToggleButton(text) {
    const button = document.createElement("button")
    button.className = "card-toggle-button"
    button.textContent = text || "ver mas"
    button.addEventListener("click", function (event) {
        toggleDescription(this, event)
    })
    return button
}
// function createCheckBoxForButton(container) {
//     console.log("container", container)
//     const checkbox = document.createElement("input")
//     checkbox.setAttribute("type", "checkbox")
//     checkbox.setAttribute("id", "toggle")
//     container.appendChild(checkbox)
//     checkbox.style.display = "none"
// }
// function createToggleButton(container) {
//     console.log("container", container)

//     const showMoreLabel = document.createElement("label")
//     showMoreLabel.setAttribute("for", "toggle")
//     showMoreLabel.setAttribute("id", "show-more-label")
//     showMoreLabel.textContent = "Show More"

//     const showLessLabel = document.createElement("label")
//     showLessLabel.setAttribute("for", "toggle")
//     showLessLabel.setAttribute("id", "show-less-label")
//     showLessLabel.textContent = "Show Less"
//     // showLessLabel.style.display = "none"
//     container.appendChild(checkbox)
//     container.appendChild(showMoreLabel)
//     container.appendChild(showLessLabel)
// }
function createArticle(params) {
    const {
        image,
        applicants,
        party,
        firstPosition,
        secondPosition,
        color,
        bg,
    } = params
    const article = document.createElement("article")
    article.className = "card-container"
    const partyTag = document.createElement("h3")
    partyTag.className = "card-title party"
    partyTag.innerText = party
    if (firstPosition.job === "Presidente") {
        partyTag.classList.add(color)
        partyTag.style.backgroundColor = "#dfe0e2"
    } else {
        partyTag.classList.add(bg)
    }
    const photoTag = document.createElement("div")
    photoTag.className = "card-image-container"
    photoTag.innerHTML = `<img src="https://elecciones2019.lanacion.com.ar/admin/media/candidatos_fotos/${image}"  alt="${firstPosition} Foto" />`
    article.appendChild(partyTag)
    article.appendChild(photoTag)
    if (applicants.length > 0) {
        const cardDescriptionContainer = document.createElement("div")
        cardDescriptionContainer.className = "card-description-container"
        cardDescriptionContainer.appendChild(createNumberedList(applicants, bg))
        const toggleButton = createToggleButton()
        cardDescriptionContainer.appendChild(toggleButton)
        article.appendChild(cardDescriptionContainer)
        article.classList.add("item-align")
    } else {
        article.appendChild(createSpan(firstPosition.job, "first-position"))
        article.appendChild(
            createSpan(firstPosition.name, "name-first", bg, "#dfe0e2")
        )
        article.appendChild(createSpan("", "divider"))
        article.appendChild(createSpan(secondPosition.job, "second-position"))
        article.appendChild(createSpan(secondPosition.name, "name-second"))
    }
    return article
}

function createSpan(content, className, bgColor, colorText) {
    const span = document.createElement("span")
    span.className = className
    span.innerText = content
    if (bgColor) {
        span.classList.add(bgColor)
        span.style.color = colorText
    }
    return span
}

function handleDepartmentChange(event) {
    const dropdownMenu = event.target
    const selectedValue = dropdownMenu.options[event.target.selectedIndex].label

    const allDepartments = document.querySelectorAll(".section-container")
    allDepartments.forEach((department) => {
        const departmentLabel =
            department.querySelector(".heading-location").textContent
        department.style.display = "none"

        if (
            selectedValue === "Ver todos" ||
            selectedValue === departmentLabel
        ) {
            department.style.display = "block"
        }
    })
}

function createPresidentSection(parent) {
    const section = createSection("Candidatos a", "Presidente")
    const socialSection = createSocials()
    parent.appendChild(section)
    section.appendChild(socialSection)
    const presidents = filterDataBy(
        (candidates) => candidates.firstPosition.job == "Presidente"
    )
    const hasSlider = presidents.length > glideOptions.perView

    if (hasSlider) {
        const newSlider = createSlider(section)
        presidents.forEach((item) => {
            newSlider.slides.appendChild(createArticle(item))
        })
        new Glide(newSlider.slider, glideOptions).mount()
    } else {
        const cardsContainer = document.createElement("div")
        cardsContainer.className = "cards-container"
        presidents.forEach((item) => {
            const article = createArticle(item, cardsContainer)
            article.classList.add("no-slider")
            cardsContainer.appendChild(article)
        })
        section.appendChild(cardsContainer)
    }
}

function createStateSection(parent, job, state) {
    const statePolitics = filterDataBy(
        (candidates) =>
            candidates.department == state &&
            candidates.firstPosition.job == job
    )
    if (statePolitics == null || statePolitics.length == 0) return
    const section = createSection(job, state)
    const socialSection = createSocials()
    parent.appendChild(section)
    section.appendChild(socialSection)
    /**
     * Esto lo filtro por la posición (Presidente) pero puedo filtrarlo por el departamento y
     * obtendría el slider de cada uno
     */

    const hasSlider = statePolitics.length > glideOptions.perView
    if (hasSlider) {
        const newSlider = createSlider(section)
        statePolitics.forEach((item) => {
            newSlider.slides.appendChild(createArticle(item))
        })
        new Glide(newSlider.slider, glideOptions).mount()
    } else {
        const cardsContainer = document.createElement("div")
        cardsContainer.className = "cards-container"
        statePolitics.forEach((item) => {
            const article = createArticle(item)
            article.classList.add("no-slider")
            cardsContainer.appendChild(article)
        })
        section.appendChild(cardsContainer)
    }
}
function createAllSections(sectionParents) {
    createPresidentSection(sectionParents)
    selectDepartment.forEach((state) => {
        createSectionsForState(sectionParents, state.label)
    })
}
function createSectionsForState(parent, state) {
    const jobs = ["Senador", "Diputado"]
    jobs.forEach((job) => {
        createStateSection(parent, job, state)
    })
}
function toggleDescription(button, event) {
    event.stopPropagation()
    const cardContainer = button.closest(".card-container")
    cardContainer.classList.toggle("expanded")
    const buttonText = cardContainer.classList.contains("expanded")
        ? "ver menos"
        : "ver mas"
    button.textContent = buttonText
}

//#endregion

function initialize() {
    const departmentsDropdown = document.getElementById("dropdownMenu")
    departmentsDropdown.addEventListener("change", handleDepartmentChange)
    loadDepartments(departmentsDropdown)

    // Creando sección padre y sus respectivos hijos
    const sectionParents = document.querySelector("#sections-parent")
    createAllSections(sectionParents)
}

// App
initialize()
