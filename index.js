const menu = document.getElementById("navbar-links-mobile");

function OpenMenu() {
	if (menu.classList.contains("hidden")) {
		menu.classList.remove("hidden");
	} else {
		menu.classList.add("hidden");
	}
}
