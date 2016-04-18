'use strict';

window.app = angular.module('portfolio', ['ui.router', 'ngAnimate']);

app.config(function ($urlRouterProvider, $locationProvider) {
	// This turns off hashbang urls (/#about) and changes it to something normal (/about)
	$locationProvider.html5Mode(true);

	// If we go to a URL that ui-router doesn't have registered, go to the "/" url.
	$urlRouterProvider.otherwise('/');
});
// 'use strict';

// app.directive('footer', function() {
// 	return {
// 		restrict: 'E',
// 		templateUrl: 'js/footer/footer.html'
// 	}
// });
'use strict';

app.directive('navbar', function () {
	return {
		restrict: 'E',
		templateUrl: '/js/navbar/navbar.html',
		link: function link(scope) {
			scope.items = [{ label: 'HOME', state: 'home' }, { label: 'PORTFOLIO', state: 'portfolio' }, { label: 'RESUME', state: 'resume' }];
		}
	};
});
app.controller('HomeCtrl', function ($scope) {
	$(function () {
		$('#name').textillate({ 'in': { effect: 'flipInY' } });
		$('#title').textillate({ 'in': { effect: 'bounceInDown' } });
	});
});
app.config(function ($stateProvider) {
	$stateProvider.state('home', {
		url: '/',
		templateUrl: '/js/home/home.html',
		controller: 'HomeCtrl'
	});
});
'use strict';

app.config(function ($stateProvider) {
	$stateProvider.state('portfolio', {
		url: '/portfolio',
		templateUrl: '/js/portfolio/portfolio.html'
	});
});
'use strict';

app.config(function ($stateProvider) {
	$stateProvider.state('resume', {
		url: '/resume',
		templateUrl: '/js/resume/resume.html'
	});
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIm5hdmJhci9uYXZiYXIuZGlyZWN0aXZlLmpzIiwiaG9tZS9ob21lLmNvbnRyb2xsZXIuanMiLCJob21lL2hvbWUuc3RhdGUuanMiLCJwb3J0Zm9saW8vcG9ydGZvbGlvLnN0YXRlLmpzIiwicmVzdW1lL3Jlc3VtZS5zdGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFBLENBQUE7O0FBRUEsTUFBQSxDQUFBLEdBQUEsR0FBQSxPQUFBLENBQUEsTUFBQSxDQUFBLFdBQUEsRUFBQSxDQUFBLFdBQUEsRUFBQSxXQUFBLENBQUEsQ0FBQSxDQUFBOztBQUVBLEdBQUEsQ0FBQSxNQUFBLENBQUEsVUFBQSxrQkFBQSxFQUFBLGlCQUFBLEVBQUE7O0FBRUEsa0JBQUEsQ0FBQSxTQUFBLENBQUEsSUFBQSxDQUFBLENBQUE7OztBQUdBLG1CQUFBLENBQUEsU0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBO0NBQ0EsQ0FBQSxDQUFBOzs7Ozs7Ozs7QUNWQSxZQUFBLENBQUE7O0FBRUEsR0FBQSxDQUFBLFNBQUEsQ0FBQSxRQUFBLEVBQUEsWUFBQTtBQUNBLFFBQUE7QUFDQSxVQUFBLEVBQUEsR0FBQTtBQUNBLGFBQUEsRUFBQSx3QkFBQTtBQUNBLE1BQUEsRUFBQSxjQUFBLEtBQUEsRUFBQTtBQUNBLFFBQUEsQ0FBQSxLQUFBLEdBQUEsQ0FDQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxFQUNBLEVBQUEsS0FBQSxFQUFBLFdBQUEsRUFBQSxLQUFBLEVBQUEsV0FBQSxFQUFBLEVBQ0EsRUFBQSxLQUFBLEVBQUEsUUFBQSxFQUFBLEtBQUEsRUFBQSxRQUFBLEVBQUEsQ0FDQSxDQUFBO0dBQ0E7RUFDQSxDQUFBO0NBQ0EsQ0FBQSxDQUFBO0FDZEEsR0FBQSxDQUFBLFVBQUEsQ0FBQSxVQUFBLEVBQUEsVUFBQSxNQUFBLEVBQUE7QUFDQSxFQUFBLENBQUEsWUFBQTtBQUNBLEdBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQSxVQUFBLENBQUEsRUFBQSxNQUFBLEVBQUEsTUFBQSxFQUFBLFNBQUEsRUFBQSxFQUFBLENBQUEsQ0FBQTtBQUNBLEdBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxVQUFBLENBQUEsRUFBQSxNQUFBLEVBQUEsTUFBQSxFQUFBLGNBQUEsRUFBQSxFQUFBLENBQUEsQ0FBQTtFQUNBLENBQUEsQ0FBQTtDQUNBLENBQUEsQ0FBQTtBQ0xBLEdBQUEsQ0FBQSxNQUFBLENBQUEsVUFBQSxjQUFBLEVBQUE7QUFDQSxlQUFBLENBQUEsS0FBQSxDQUFBLE1BQUEsRUFBQTtBQUNBLEtBQUEsRUFBQSxHQUFBO0FBQ0EsYUFBQSxFQUFBLG9CQUFBO0FBQ0EsWUFBQSxFQUFBLFVBQUE7RUFDQSxDQUFBLENBQUE7Q0FDQSxDQUFBLENBQUE7QUNOQSxZQUFBLENBQUE7O0FBRUEsR0FBQSxDQUFBLE1BQUEsQ0FBQSxVQUFBLGNBQUEsRUFBQTtBQUNBLGVBQUEsQ0FBQSxLQUFBLENBQUEsV0FBQSxFQUFBO0FBQ0EsS0FBQSxFQUFBLFlBQUE7QUFDQSxhQUFBLEVBQUEsOEJBQUE7RUFDQSxDQUFBLENBQUE7Q0FDQSxDQUFBLENBQUE7QUNQQSxZQUFBLENBQUE7O0FBRUEsR0FBQSxDQUFBLE1BQUEsQ0FBQSxVQUFBLGNBQUEsRUFBQTtBQUNBLGVBQUEsQ0FBQSxLQUFBLENBQUEsUUFBQSxFQUFBO0FBQ0EsS0FBQSxFQUFBLFNBQUE7QUFDQSxhQUFBLEVBQUEsd0JBQUE7RUFDQSxDQUFBLENBQUE7Q0FDQSxDQUFBLENBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0Jztcblxud2luZG93LmFwcCA9IGFuZ3VsYXIubW9kdWxlKCdwb3J0Zm9saW8nLCBbJ3VpLnJvdXRlcicsJ25nQW5pbWF0ZSddKTtcblxuYXBwLmNvbmZpZyhmdW5jdGlvbiAoJHVybFJvdXRlclByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcikge1xuICAgIC8vIFRoaXMgdHVybnMgb2ZmIGhhc2hiYW5nIHVybHMgKC8jYWJvdXQpIGFuZCBjaGFuZ2VzIGl0IHRvIHNvbWV0aGluZyBub3JtYWwgKC9hYm91dClcbiAgICAkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUodHJ1ZSk7XG5cbiAgICAvLyBJZiB3ZSBnbyB0byBhIFVSTCB0aGF0IHVpLXJvdXRlciBkb2Vzbid0IGhhdmUgcmVnaXN0ZXJlZCwgZ28gdG8gdGhlIFwiL1wiIHVybC5cbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG59KTsiLCIndXNlIHN0cmljdCc7XG5cbmFwcC5kaXJlY3RpdmUoJ25hdmJhcicsIGZ1bmN0aW9uKCl7XG5cdHJldHVybiB7XG5cdFx0cmVzdHJpY3Q6ICdFJyxcblx0XHR0ZW1wbGF0ZVVybDogJy9qcy9uYXZiYXIvbmF2YmFyLmh0bWwnLFxuXHRcdGxpbms6IGZ1bmN0aW9uKHNjb3BlKSB7XG5cdFx0XHRzY29wZS5pdGVtcyA9IFtcblx0XHRcdFx0eyBsYWJlbDogJ0hPTUUnLCBzdGF0ZTogJ2hvbWUnfSxcblx0XHRcdFx0eyBsYWJlbDogJ1BPUlRGT0xJTycsIHN0YXRlOiAncG9ydGZvbGlvJ30sXG5cdFx0XHRcdHsgbGFiZWw6ICdSRVNVTUUnLCBzdGF0ZTogJ3Jlc3VtZSd9XG5cdFx0XHRdO1xuXHRcdH1cblx0fVxufSk7IiwiYXBwLmNvbnRyb2xsZXIoJ0hvbWVDdHJsJywgZnVuY3Rpb24oJHNjb3BlKSB7XG5cdCQoZnVuY3Rpb24gKCkge1xuXHQgICAgJCgnI25hbWUnKS50ZXh0aWxsYXRlKHsgaW46IHsgZWZmZWN0OiAnZmxpcEluWScgfSB9KTtcblx0ICAgICQoJyN0aXRsZScpLnRleHRpbGxhdGUoeyBpbjogeyBlZmZlY3Q6ICdib3VuY2VJbkRvd24nIH0gfSk7XG5cdH0pO1xufSk7IiwiYXBwLmNvbmZpZyhmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcblx0JHN0YXRlUHJvdmlkZXIuc3RhdGUoJ2hvbWUnLCB7XG5cdFx0dXJsOiAnLycsXG5cdFx0dGVtcGxhdGVVcmw6ICcvanMvaG9tZS9ob21lLmh0bWwnLFxuXHRcdGNvbnRyb2xsZXI6ICdIb21lQ3RybCdcblx0fSk7XG59KTsiLCIndXNlIHN0cmljdCc7XG5cbmFwcC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIpe1xuXHQkc3RhdGVQcm92aWRlci5zdGF0ZSgncG9ydGZvbGlvJywge1xuXHRcdHVybDogJy9wb3J0Zm9saW8nLFxuXHRcdHRlbXBsYXRlVXJsOiAnL2pzL3BvcnRmb2xpby9wb3J0Zm9saW8uaHRtbCdcblx0fSk7XG59KTsiLCIndXNlIHN0cmljdCc7XG5cbmFwcC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIpIHtcblx0JHN0YXRlUHJvdmlkZXIuc3RhdGUoJ3Jlc3VtZScsIHtcblx0XHR1cmw6ICcvcmVzdW1lJyxcblx0XHR0ZW1wbGF0ZVVybDogJy9qcy9yZXN1bWUvcmVzdW1lLmh0bWwnXG5cdH0pO1xufSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
