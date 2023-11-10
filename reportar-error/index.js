const reportDialog = document.getElementById("reportDialog");
const openDialogBtn = document.getElementById("openDialogBtn");
const closeDialogBtn = document.getElementById("closeDialog");
const openDialogBtnIcon = document.getElementById("openDialogBtnIcon")
const actionBar = document.getElementById("ActionBar");
const confirmationView = document.getElementById("confirmationView"); 
const reportForm = document.getElementById('reportForm');
openDialogBtn.addEventListener("click", () =>{ reportDialog.showModal()});

openDialogBtnIcon.addEventListener("click", () => {
  reportDialog.showModal()           
  document.getElementById("body").style.overflow = "hidden"
});
closeDialogBtn.addEventListener("click", () => {
  reportDialog.close() 
  confirmationView.classList.remove('active');
  reportForm.style.display = 'flex';
});

window.addEventListener("scroll", function () {
    actionBar.classList.toggle("sticky", window.scrollY > 300);
  });

reportForm.addEventListener('submit', (event) => {
    event.preventDefault(); 
    reportForm.style.display = 'none';
    document.getElementById('confirmationView').classList.add('active');
});