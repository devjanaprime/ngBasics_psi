var myApp = angular.module( 'myApp', [] );
// set up a controller
myApp.controller( 'InventoryController', function(){
  console.log( 'NG' );
  // variable global to this controller
  var vm = this;
  // array attached to controller (makes it avilable to DOM)
  vm.items = [];
  // "vm" stands for "view model"
  vm.addItem = function(){
    console.log( 'in addItem ng-click' );
    // create object from user input
    var newItem ={
      name: vm.nameIn,
      description: vm.descriptionIn
    };
    console.log( 'adding item:', newItem );
    // push item into array
    vm.items.push( newItem );
    console.log( 'items:', vm.items );
    // empty inputs
    vm.nameIn='';
    vm.descriptionIn='';
  }; //end add item
}); //end inventory controller

myApp.controller('OmdbController', function($http) {

  // view model
  var vm = this;

  $http({
    method: 'GET',
    url: 'http://www.omdbapi.com/?t=jaws'
  }).then(function success(response) {
    console.log('ombd resp ->', response.data);
    vm.movieData = response.data;
  });
});
