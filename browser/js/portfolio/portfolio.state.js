'use strict';

app.config(function($stateProvider){
	$stateProvider.state('portfolio', {
		url: '/portfolio',
		templateUrl: '/js/portfolio/portfolio.html'
	});
});