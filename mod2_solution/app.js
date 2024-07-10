(function (){
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var listToBuy = this;

//Get the items to buy from the service
  listToBuy.items = ShoppingListCheckOffService.getToBuyItems();

//Define the method to move items to the bought list
  listToBuy.buyItem = function(itemIndex){
    ShoppingListCheckOffService.buyItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
var listBought = this;

//Get the bought items to the service
listBought.items = ShoppingListCheckOffService.getBoughtItems();
}

//Define the service to manage the Shopping lists
function ShoppingListCheckOffService(){
  var service = this;

//Initial list of items to buy
  var toBuyItems = [
    { name: "cookies", quantity: 10 },
      { name: "Cola", quantity: 15 },
      { name: "chips", quantity: 2 },
      { name: "milk", quantity: 20 },
      { name: "chocolate", quantity: 5 }
  ];

//Empty list for bought items
  var boughtItems = [];

//Method to get the items to buy
  service.getToBuyItems = function () {
    return toBuyItems;
  };

  //Metod to get the bought items
  service.getBoughtItems = function(){
    return boughtItems;
  }

//Method to move an item from to-buy list to the bought list
  service.buyItem = function(itemIndex) {
    var item = toBuyItems.splice(itemIndex, 1)[0];
  boughtItems.push(item);
};
}
})();
