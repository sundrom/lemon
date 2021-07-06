var menu = {
	init: function() {
		menu.addListener();
	},
	addListener: function() {
		document.querySelector('#burger').addEventListener('click', function() {
			document.querySelector('body').classList.toggle('expand_menu');
		});
	},
};

var web = {
	init: function() {
		console.log('DOM ready state');
		menu.init();
	},
};

document.addEventListener('DOMContentLoaded', web.init);