var menuitem = document.getElementById('menuitem');
menuitem.style.maxHeight = '0px';

function menutoggle() {
  if (menuitem.style.maxHeight == '0px') {
    menuitem.style.maxHeight = '200px';
  } else {
    menuitem.style.maxHeight = '0px';
  }
}

const scrollButton = document.querySelector("#scrollButton");

scrollButton.addEventListener("click", () => {
  window.scrollBy({
    top: 1000,
    behavior: "smooth"
  });
});

