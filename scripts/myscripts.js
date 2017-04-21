// var app = angular.module('pkmnApp', []);
// app.controller('pokemonCtrl', function($scope, $http){
// 	$scope.findPokemon = function() {
// 	$.getJSON("scripts/pokemon.json"  + $("#search").val() ) 
// 	.then(function(response) {
// 		$scope.outputField = response.data.cards.name;
		
// 	});
// };

// });


var app = angular.module('pkmnApp', []);
app.controller('pokemonCtrl', function($scope, $http){
	$scope.findPokemon = function() {
	$http.get("https://api.pokemontcg.io/v1/cards?name="  + $("#search").val()  ) 
	.then(function(response) {
		$scope.outputField = response.data.cards;
	// console.log(card.name);


		
	});
};

});



