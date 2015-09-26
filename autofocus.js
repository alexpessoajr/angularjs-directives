
(function(){
	angular.module("ngAutofocus", [])
	  .directive('ngAutofocus', function(){
		  return {
		      restrict : 'A',
			  link : function(scope, element, attrs) {
				  if (scope.$eval(attrs.ngAutofocus)) {
					  element[0].focus();
				  }
			  }
		  }
	  })
	;
}());
