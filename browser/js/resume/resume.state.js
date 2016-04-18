'use strict';

app.config(function($stateProvider) {
	$stateProvider.state('resume', {
		url: '/resume',
		templateUrl: '/js/resume/resume.html'
	});
});