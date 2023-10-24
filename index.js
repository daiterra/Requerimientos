const reportDialog = document.getElementById("reportDialog");
const openDialogBtn = document.getElementById("openDialogBtn");
const closeDialogBtn = document.getElementById("closeDialog");
const openDialogBtnIcon = document.getElementById("openDialogBtnIcon")
const actionBar = document.getElementById("ActionBar");

openDialogBtn.addEventListener("click", () => reportDialog.showModal());
openDialogBtnIcon.addEventListener("click", () => reportDialog.showModal());
closeDialogBtn.addEventListener("click", () => reportDialog.close());

window.addEventListener("scroll", function () {
    actionBar.classList.toggle("sticky", window.scrollY > 300);
  });