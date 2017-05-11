var myApp = angular.module( 'myApp', [] );
// set up a controller (inject $http if using)
myApp.controller( 'InventoryController', function( $http, GetItems ){
  console.log( 'NG' );
  // variable global to this controller
  var vm = this;
  // array attached to controller (makes it avilable to DOM)
  vm.items = [];
  // "vm" stands for "view model"

//current count
  vm.count = GetItems.counterGetter();

  //count up by 1
  vm.counting = function(){
    GetItems.counterSetter();
    vm.count = GetItems.counterGetter();
  }


  vm.getItems = function(){
    GetItems.getItems().then(function(data){
    console.log("using dot then", data)
    vm.items = data;
  });
}


  vm.addItem = function(){
    console.log( 'in addItem ng-click' );
    // create object from user input
    var objectToSend ={
      name: vm.nameIn,
      description: vm.descriptionIn
    };
    console.log( 'adding item:', objectToSend );
    // send item to server
    $http({
      method: 'POST',
      url: '/inventory',
      data: objectToSend
    }).then( function( response ){
      console.log( 'back from server:', response );

      vm.getItems();
    }); //end http
    // empty inputs
    vm.nameIn='';
    vm.descriptionIn='';
    // update from server
  }; //end add item


}); //end inventory controller
