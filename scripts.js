(function(){
	window.addEventListener('load', function() {
		var _navToggle = document.querySelectorAll(".nav__toggleButton");
		_navToggle.forEach(function(_toggleButton) {
			_toggleButton.addEventListener('click', function() {
				var _menuToToggle = _toggleButton.nextElementSibling;
				_menuToToggle.classList.toggle("nav--collapsed");
			});
		});
	});
})();