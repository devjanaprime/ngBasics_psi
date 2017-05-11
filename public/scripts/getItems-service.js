myApp.service('GetItems', function($http){

  var counter = 0;

  //return current value of getCounter
  this.counterGetter = function(){
    return counter;
  }

  this.counterSetter = function(){
    console.log("counter setter running");
    counter++;
  }

  this.getItems = function(){
    console.log( 'in getItems' );

    return $http({
      method: 'GET',
      url: '/inventory'
    }).then( function success( response ) {
      console.log( 'resp:', response );
      return response.data;
    });

  }; // end getItems

});
