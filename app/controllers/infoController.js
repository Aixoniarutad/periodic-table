var Info;

// Main Controller
Biogenesis.controller('infoController', function ($scope, $firebaseObject) {
	Info = $scope;

	$scope.elementSearch = function(text) {
		$scope.text_result = text;
	}
	$scope.elementInfo = function(ele) {
		if(ele){
			$scope.viewing = ele.information();
			$('#element-info').openModal();
		}
	}

	$scope.periodicTable = function() {
		$scope.table = new Array(180);
		Universe.elements.forEach(function(item){
			$scope.table[item.data.table_position] = item;
		});
		$('.modal-trigger').leanModal();
	}

	$scope.alterElements = function() {
		Database.on('value', function(snapshot) {
			snapshot.forEach(function(item) {
				var elem = item.val();
				
				// if(elem.AtomicNumber == "VARIABLE")
				// {
				// 	Database.child('periodic_table/-'+elem.ElementName).update({
				// 		table_color: '',
				// 		table_key: ''
				// 	});
				// }
			});
		});
	}

	$scope.toast = function(text, time){
        var toaster = API.element('toast-container');
        if(toaster){
            toaster.innerHTML = "";
        }
		Materialize.toast(text, time);
	}
});