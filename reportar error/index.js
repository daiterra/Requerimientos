const errorDialog = document.getElementById("errorDialog");
const openDialogBtn = document.getElementById("openDialog");
const closeDialogBtn = document.getElementById("closeDialog");

openDialogBtn.addEventListener("click", () => errorDialog.showModal());
closeDialogBtn.addEventListener("click", () => errorDialog.close());
