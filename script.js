function toggleDropdown() {
  let dropdown = document.getElementById("myDropdown");
  dropdown.classList.toggle("active");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropdown-button')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('active')) {
        openDropdown.classList.remove('active');
      }
    }
  }
}