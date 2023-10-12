const reportDialog = document.getElementById("reportDialog");
const openDialogBtn = document.getElementById("openDialog");
const closeDialogBtn = document.getElementById("closeDialog");

openDialogBtn.addEventListener("click", () => reportDialog.showModal());
closeDialogBtn.addEventListener("click", () => reportDialog.close());
