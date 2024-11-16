const burger = document.getElementById("menu");
const burgerMenu = document.getElementById("button-nav");
const cancel = document.getElementById("cancel");

burger.addEventListener("click", () => {
  burgerMenu.style.display = "block";
});

function hideSideBar() {
  burgerMenu.style.display = "none";
}

cancel.addEventListener("click", ()=>{
    hideSideBar()
})