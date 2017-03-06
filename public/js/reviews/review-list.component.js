angular.module('foodApp').component('reviewList', {
	templateUrl: 'js/reviews/review-list.template.html',
	controller: function ReviewListController(){
		this.reviews = [
		{
			name: 'resto1',
			title: 'Custards Last Stand',
			date: '2013-09-01',
			description: 'Custard is better than mustard!',
			image: 'resto1.png'
		},
		{
			name: 'resto2',
			title: 'Grillenium Falcom',
			date: '2014-04-15',
			description: 'Cheese pleeze!',
			image: 'resto2.png'
		},
		{
			name: 'resto3',
			title: 'Lebaneser Scrooge',
			date: '2012-10-01',
			description: 'One taste of this food and you will not be a Scrooge!',
			image: 'resto3.png'
		},
		{
			name: 'resto4',
			title: 'Bread Zeppelin',
			date: '2012-10-20',
			description: 'This bread will put you on cloud 9.',
			image: 'resto4.png'
		}
		]
	}
})






















