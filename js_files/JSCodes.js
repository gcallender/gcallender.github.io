
function showSubNavBar() {
	var obj = document.getElementById("_subNavBar01");
	obj.classList.toggle("jsSubNav");
}
function showSubNavBarM() {
	var obj = document.getElementById("_subNavBarMini");
	obj.classList.toggle("jsSubNav");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
	if (!e.target.matches('.btnSubNav')) {
		var obj1 = document.getElementById("_subNavBar01");
		if (obj1.classList.contains('jsSubNav'))
			obj1.classList.remove('jsSubNav');
	}
	if (!e.target.matches('.btnSubNavM')) {
		var obj2 = document.getElementById("_subNavBarMini");
		if (obj2.classList.contains('jsSubNav'))
			obj2.classList.remove('jsSubNav');
	}
}