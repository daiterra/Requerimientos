document.addEventListener("DOMContentLoaded", function () {
    const body = document.body
    let wasSent = false
    const closeDialogBtn = document.getElementById("closeDialog")
    const reportDialog = document.getElementById("reportDialog")
    const reportForm = document.getElementById("reportForm")
    const reportErrorBtn = document.querySelector(
        '[data-function="report-error"]'
    )
    // const reportBackground = document.querySelector(".report-background")
    const reportErrorBelow = document.querySelector(
        '.ReportErrorBelow[data-function="report-error"]'
    )
    const reportInputName = document.querySelector("#report-error-name")
    const reportInputMail = document.querySelector("#report-error-mail")
    const reportInputUsername = document.querySelector("#report-error-username")
    const reportInputLocation = document.querySelector("#report-error-location")
    const messageContainer = jQuery("#messageContainer")
    const profile = elpais.profile()

    function resetForm() {
        reportForm.reset()
    }

    function preloadUserData() {
        if (!profile.loggedIn) return
        reportInputName.value = profile.user.name
        reportInputMail.value = profile.user.email
        reportInputUsername.value = profile.user.username
    }

    // Cargar select
    const opciones = [
        "Error de redacción",
        "Publicidad",
        "Comentarios",
        "Problemas con mi suscripción",
        "Problemas con mi usuario",
        "Otro",
    ]
    const select = jQuery("#report-error-multiple-select").empty()
    for (let opcion in opciones) {
        select.append($("<option />").text(opciones[opcion]))
    }

    closeDialogBtn.addEventListener("click", function () {
        reportDialog.close()
        body.classList.remove("no-scroll")
        // reportBackground.classList.remove("blur-background")
        jQuery(".container-form-fields").show()
        messageContainer.hide()
    })
    reportInputLocation.value = window.location.href

    reportErrorBtn.addEventListener("click", function (e) {
        e.preventDefault()
        preloadUserData()
        reportDialog.showModal()
        body.classList.add("no-scroll")
        // reportBackground.classList.add("blur-background")
    })
    reportErrorBelow.addEventListener("click", function (e) {
        reportDialog.showModal()
        e.preventDefault()
        preloadUserData()
        reportDialog.showModal()
        body.classList.add("no-scroll")
        // reportBackground.classList.add("blur-background")
    })

    function showFormMessage(message, type) {
        messageContainer.text(message).addClass(type).show()
    }

    reportForm.addEventListener("submit", function (event) {
        event.preventDefault()
        jQuery
            .ajax({
                url: "https://redirect.elpais.uy/reportar-error.php",
                type: "post",
                dataType: "json",
                data: jQuery(reportForm).serialize(),
            })
            .done(function (data) {
                if (data.ok) {
                    showFormMessage(
                        "Formulario enviado correctamente",
                        "success"
                    )
                    wasSent = true
                    jQuery(".container-form-fields").hide()
                    resetForm()
                } else {
                    wasSent = false
                    showFormMessage("Error al enviar el formulario", "error")
                }
            })
            .fail(function () {
                wasSent = false
                showFormMessage("Error al enviar el formulario", "error")
            })
    })
})
