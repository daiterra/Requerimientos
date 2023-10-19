const reportDialog = document.getElementById("reportDialog");
const openDialogBtn = document.getElementById("openDialogBtn");
const closeDialogBtn = document.getElementById("closeDialog");
const openDialogBtnIcon = document.getElementById("openDialogBtnIcon")

openDialogBtn.addEventListener("click", () => reportDialog.showModal());
openDialogBtnIcon.addEventListener("click", () => reportDialog.showModal());
closeDialogBtn.addEventListener("click", () => reportDialog.close());

window.addEventListener("scroll", function () {
    var actionBar = document.getElementById("ActionBar");
    actionBar.classList.toggle("sticky", window.scrollY > 300);
  });