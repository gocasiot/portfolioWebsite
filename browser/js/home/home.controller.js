app.controller('HomeCtrl', function($scope) {
	$(function () {
	    $('#name').textillate({ in: { effect: 'flipInY' } });
	    $('#title').textillate({ in: { effect: 'bounceInDown' } });
	});
});