(function (){
"use strict";
angular.module("SpaApp", [])
    .controller("SpaAppController",function($scope){
      $scope.name="";
      $scope.totalvalue="0";
      
      $scope.displaynumeric=function(){
          var totalnamevalue = CalcNumericString($scope.name);//get the total value
          $scope.totalvalue = totalnamevalue;
      };
      function CalcNumericString(string){
          var totalstringvalue = 0;
          for(var i = 0; i<string.length; i++){
              totalstringvalue += string.charCodeAt(i);
          }
          return totalstringvalue;


      };
    });
}
)();