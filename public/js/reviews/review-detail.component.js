angular.module('foodApp').component('reviewDetail', {
  templateUrl: 'js/reviews/review-detail.template.html',

  controller: function ReviewDetailController($http, $routeParams) {

     $http.get('data/' + $routeParams.reviewId +  '.json')
      .then(response => {
        this.review = response.data;
        this.setImage(this.review.images[2])
        });

      this.setImage = imageUrl => this.mainImageUrl = imageUrl;

  }

});