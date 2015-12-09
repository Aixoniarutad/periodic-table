var Universe;
var Database;

// Main Controller
Biogenesis.controller('physicsController', function ($scope, $http, $firebaseObject) {
	Universe = $scope;
	Database = new Firebase('https://periodictable.firebaseio.com/');

	$scope.BigBang = function() {
		$scope.elements = [];
		$http.get('matter/periodic_table.json').then(function(response) {
			var data = response.data;
			
			for(ele in data){
				var	element = new Matter(data[ele]);
				$scope.elements.push(element);
				
				if(element.data.AtomicNumber==1){
					Info.viewing = element.information();
				}
			}
			// Load Table
			Info.periodicTable();
		});
	}

	$scope.BigBang();
	var syncElements = $firebaseObject(Database);
});