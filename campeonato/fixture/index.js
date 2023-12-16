const rankingRugby = document.getElementById("ranking-mundial-rugby")
const rankingWrapper = rankingRugby.parentNode.parentNode.parentNode
rankingWrapper.setAttribute("id", "ranking-rugby-wrapper")
rankingRugby.style.display = "none"
//capturamos la tabla que tiene la info de las tabs
const firstTable = rankingWrapper.querySelector("table:first-child")
const tabs = firstTable.querySelectorAll("tr")
const rankingGroupTitles = rankingWrapper.querySelector("h3")
// console.log("rankingGroupTitles", rankingGroupTitles)
//en un array nos guardamos el contenido, y removemos la tabla del front
let tabsContent = []
tabs.forEach((tab) => {
    let td = tab.querySelector("td")
    tabsContent.push(td.innerText)
})
firstTable.remove()
//creamos la navbar de campeonatos
const ulTabs = document.createElement("ul")
ulTabs.classList.add("ranking-championship-tabs")
let anchorTabs = []
let currentActiveLink = null
//iteramos el array que contiene la info de las tabs, y con esa info creamos la lista de tabs
tabsContent.forEach((tab, index) => {
    let li = document.createElement("li")
    const anchor = document.createElement("a")
    anchorTabs.push(anchor)
    anchor.innerText = tab
    anchor.href = "#"
    li.appendChild(anchor)
    ulTabs.appendChild(li)
    if (index === 0) {
        anchor.classList.add("active")
        currentActiveLink = anchor
    }
})

//seteamos al hacer click en cada tab que se muestre solo la tab seleccionada
anchorTabs.forEach((link, index) => {
    if (index === 0) {
        rankingGroupTitles.textContent = link.innerText
    }
    link.addEventListener("click", (e) => {
        // console.log(link.innerText)
        e.preventDefault()
        if (currentActiveLink) {
            currentActiveLink.classList.remove("active")
        }
        showSelectedTable(index)
        link.classList.add("active")
        currentActiveLink = link
        rankingGroupTitles.textContent = link.innerText
    })
})
//agregamos dentro del container la navbar de tabs arriba de todo
rankingWrapper.insertBefore(ulTabs, rankingWrapper.childNodes[1])
/* 
        
    */
const showSelectedTable = (selectedIndex) => {
    rankingTables.forEach((table, index) => {
        if (index === selectedIndex) {
            table.style.display = "table"
        } else {
            table.style.display = "none"
        }
    })
}

const rankingTables = rankingWrapper.querySelectorAll("table")
rankingTables.forEach((table, index) => {
    let firstRow = table.querySelector("tr:first-child")
    let tBody = table.querySelector("tbody")
    let tHead = document.createElement("thead")
    firstRow.querySelectorAll("td").forEach((td) => {
        let th = document.createElement("th")
        th.textContent = td.textContent
        firstRow.replaceChild(th, td)
    })

    tHead.appendChild(firstRow)
    table.insertBefore(tHead, tBody)
    let tRow = tBody.querySelectorAll("tr")
    //pisamos los estilos default de la tabla que es pegada por el usuario para poder setearle nuestros estilos
    tRow.forEach((tr) => {
        tr.querySelectorAll("td").forEach((td) => {
            td.style = ""
        })
    })
    if (index != 0) {
        table.style.display = "none"
    }
})
