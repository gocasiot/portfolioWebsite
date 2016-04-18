'use strict';

app.directive('navbar', function(){
	return {
		restrict: 'E',
		templateUrl: '/js/navbar/navbar.html',
		link: function(scope) {
			scope.items = [
				{ label: 'HOME', state: 'home'},
				{ label: 'PORTFOLIO', state: 'portfolio'},
				{ label: 'RESUME', state: 'resume'}
			];
		}
	}
});