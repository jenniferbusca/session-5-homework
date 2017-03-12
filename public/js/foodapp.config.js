angular.module('foodApp').config(
	function ($routeProvider, $locationProvider) {
		$routeProvider.
			when('/', {
				template: `<div class="wrap">Home</div>`
			}).
			when('/recipes', {
				template: '<recipe-list></recipe-list>'
			}).
			when('/recipes/:recipeId', {
				template: '<recipe-detail></recipe-detail>'
			}).
			when('/reviews', {
				template: '<review-list></review-list>'
			}).
			when('/reviews/:reviewId', {
				template: '<review-detail></review-detail>'
			}).
			when('/delivery', {
				template: '<delivery-list></delivery-list>'
			}).
			when('/about', {
				template: '<about-list></about-list>'
			}).
			otherwise('/404');
		$locationProvider.html5Mode(true)
	})