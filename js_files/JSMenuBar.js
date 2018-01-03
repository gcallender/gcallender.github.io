
function showSubMenuBar() {
	var obj = document.getElementById("_subMenuBar01");
	obj.classList.toggle("jsSubMenu");
}
function showSubMenuBarM() {
	var obj = document.getElementById("_subMenuBarMini");
	obj.classList.toggle("jsSubMenu");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
	if (!e.target.matches('.btnSubMenu')) {
		var obj1 = document.getElementById("_subMenuBar01");
		if (obj1.classList.contains('jsSubMenu'))
			obj1.classList.remove('jsSubMenu');
	}
	if (!e.target.matches('.btnSubMenuM')) {
		var obj2 = document.getElementById("_subMenuBarMini");
		if (obj2.classList.contains('jsSubMenu'))
			obj2.classList.remove('jsSubMenu');
	}
}