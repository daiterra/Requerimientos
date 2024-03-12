//#region Data Structure
const data = [
    {
        party: "Partido Político",
        image: "image", // ver de pasarle el link de la imagen de forma dinamica
        color: "color-first",
        bg: "bg-first",
        //type: "executive", // legislative
        applicants: [
            "Nombre Político 1",
            "Nombre Político 2",
            "Nombre Político 3",
            "Nombre Político 4",
            "Nombre Político 5",
            "Nombre Político 6",
            "Nombre Político 7",
            "Nombre Político 8",
        ],
        department: "Artigas",
        firstPosition: {
            name: "Nombre Político 1",
            job: "Cargo 1",
        },
        secondPosition: {
            name: "Nombre Político 2",
            job: "Cargo 2",
        },
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
        icon: "../assets/like.svg",
    },
    {
        social: "Instagram",
        icon: "../assets/like.svg",
    },
    {
        social: "Whatsapp",
        icon: "../assets/like.svg",
    },
    {
        social: "Like",
        icon: "../assets/like.svg",
    },
]

const glideOptions = {
    type: "carousel",
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
    animationTimingFunc: "ease",
}
const sectionData = [
    {
        title: "Gobernador",
        location: "Canelones",
        cardsAmount: 4,
        hasSlider: Boolean,
    },
    {
        title: "Jefe de Gobierno",
        location: "Artigas",
        cardsAmount: 6,
        hasSlider: Boolean,
    },
    {
        title: "Diputados",
        location: "Montevideo",
        cardsAmount: 10,
        hasSlider: Boolean,
    },
]
//#endregion

//#region Methods
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

function socialLink(social, icon) {
    return `<a href="#" target="_blank" data-social-service="${social}">
  <img src="assets/${icon}" style="width:20px; height:20px;" alt="${social} icon" />
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

function createSlider(parent, slides = []) {
    const glide = document.createElement("div")
    glide.className = "glide"

    const glideTrack = document.createElement("div")
    glideTrack.className = "glide__track"
    glideTrack.setAttribute("data-glide-el", "track")

    glide.appendChild(glideTrack)

    const glideSlides = document.createElement("ul")
    glideSlides.className = "glide__slides"
    glideTrack.appendChild(glideSlides)

    slides.forEach((item) => {
        const li = glideSlides.createElement("li")
        li.className = "glide__slide"
        glideSlides.appendChild(li)
    })

    parent.appendChild(glide)

    return {
        slider: glide,
        slides: glideSlides,
    }
}
function createArticle(
    image,
    party,
    nameFirst,
    firstPosition,
    secondPosition,
    nameSecond,
    applicants
) {
    const article = document.createElement("article")
    article.className = "card-container"
    const partyTag = document.createElement("h3")
    partyTag.className = "card-title party president"
    // partyTag.innerText = data[0].party me gustaria consumir la data
    partyTag.innerText = party
    const photoTag = document.createElement("div")
    photoTag.className = "card-image-container"
    photoTag.innerHTML = `<img src="${image}" alt="figure" />`
    article.appendChild(partyTag)
    article.appendChild(photoTag)
    if (applicants) {
        //crear una lista vacia
        const applicantList = document.createElement("ol")
        applicantList.className = "legislative-list"

        applicants.forEach((applicant) => {
            //iterar sobre applicants
            const li = document.createElement("li")
            li.className = "legislative-item"
            li.innerText = applicant
            console.log("li", li.textContent)
            applicantList.appendChild(li)
            //insertar cada aplicante como item de la lista
        })
        article.appendChild(applicantList)
    } else {
        // article.appendChild(createSpan(data[0].firstPosition.job, "first-position"));
        article.appendChild(createSpan(nameFirst, "name-first"))
        article.appendChild(createSpan(firstPosition, "first-position"))

        article.appendChild(createSpan("", "divider"))
        // article.appendChild(createSpan(data[0].secondPosition.job, "second-position"));
        article.appendChild(createSpan(secondPosition, "second-position"))
        // article.appendChild(createSpan(data[0].secondPosition.name, "name-second"));
        article.appendChild(createSpan(nameSecond, "name-second"))
    }

    // let glideItem = document.querySelectorAll(".glide__slide")
    // console.log("flide", glideItem)
    // const li = document.createElement("li")
    // li.className = "glide__slide"
    // li.appendChild(article)
    // console.log("article", article)
    return article
}

function createSpan(content, className) {
    const span = document.createElement("span")
    span.className = className
    span.innerText = content

    return span
}

function handleDepartmentChange(event) {
    const dropdownMenu = event.target
    const selectedValue = dropdownMenu.options[event.target.selectedIndex].label

    const allDepartments = document.querySelectorAll(".section-container")
    // const selectedValue = dropdownMenu
    // console.log("selectedValue", selectedValue)
    allDepartments.forEach((department, index) => {
        const departmentLabel =
            department.querySelector(".heading-location").textContent
        // const departmentIndexSelected = index
        department.style.display = "none"

        if (selectedValue == departmentLabel) {
            // console.log("index", index)
            department.style.display = "block"
        }
    })
}

function setSliderValue(data) {
    const cardsPerView = glideOptions.perView
    data.cardsAmount > cardsPerView
        ? (data.hasSlider = true)
        : (data.hasSlider = false)
}
function createAllSections(data, sectionParents) {
    data.forEach((item) => {
        setSliderValue(item)
        const section = createSection(item.title, item.location)
        const socialSection = createSocials()
        section.appendChild(socialSection)
        sectionParents.appendChild(section)
        if (item.hasSlider) {
            const newSlider = createSlider(section, [])
            createSlides(newSlider)
            new Glide(newSlider.slider, glideOptions).mount()
        } else {
            createCards(section)
        }
    })
}
function createCards(section) {
    // console.log("section", section)
    const newcard = createArticle(
        "https://elecciones2019.lanacion.com.ar/admin/media/candidatos_fotos/FERNANDEZ1.png",
        null,
        null,
        null,
        null,
        null,
        data[0].applicants
    )
    const otherCard = createArticle(
        "https://elecciones2019.lanacion.com.ar/admin/media/candidatos_fotos/FERNANDEZ1.png",
        "Partido nacional",
        "Delgado",
        "Presidente",
        "Vice",
        "Laura Raffo",
        null
    )
    section.appendChild(newcard)
    section.appendChild(otherCard)
}
function createSlides(newSlider) {
    newSlider.slides.appendChild(
        createArticle(
            "https://elecciones2019.lanacion.com.ar/admin/media/candidatos_fotos/FERNANDEZ1.png",
            "Partido nacional",
            "Delgado",
            "Presidente",
            "Vice",
            "Laura Raffo",
            null
        )
    )
}
//#endregion

function initialize() {
    const departmentsDropdown = document.getElementById("dropdownMenu")
    departmentsDropdown.addEventListener("change", handleDepartmentChange)
    loadDepartments(departmentsDropdown)

    // Creando sección padre y sus respectivos hijos
    const sectionParents = document.querySelector("#sections-parent")
    createAllSections(sectionData, sectionParents)
}

// App
initialize()
