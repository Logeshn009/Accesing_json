// Create AngularJS application
var app = angular.module('Book-details',[]);

// Create Controller with name mainCtrl
app.controller('mainCtrl', function($scope,$http){

	
    $scope.rowlimit=5;
    $scope.Bookname ;
    $scope.price;

    $http.get('https://logeshn009.github.io/Lab08_json_file/book.json')
    .success(function(response)
    {
        $scope.bookdetails=response.books;

    });
        
	
});





