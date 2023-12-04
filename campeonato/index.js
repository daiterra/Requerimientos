const rankingRugby = document.getElementById("ranking-mundial-rugby")
const rankingWrapper = rankingRugby.parentNode.parentNode.parentNode
rankingWrapper.setAttribute("id", "ranking-rugby-wrapper")
rankingRugby.style.display = "none"

const rankingTables = rankingWrapper.querySelectorAll("table")
rankingTables.forEach((table) => {
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

    table.insertAdjacentHTML(
        "afterend",
        `<ul class="referencias-rugby">
    <li>PJ – Partidos jugados</li>
	<li>PG – Partidos ganados</li>
	<li>PE – Partidos empatados</li>
	<li>PP – Partidos perdidos</li>
	<li>PF – Puntos a favor</li>
	<li>PC – Puntos en contra</li> 
	<li>DIF – Diferencia</li> 
	<li>TF – Tries a favor</li> 
	<li>PB – Punto Bonus</li> 
	<li>PTS – Puntos</li> 
</ul>`
    )
})

const rankingGroupTitles = rankingWrapper.querySelectorAll("h3")
rankingGroupTitles.forEach((title) => {
    title.classList.add(title.innerText.replace(" ", "-").toLowerCase())
})
