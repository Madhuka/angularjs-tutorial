angular.module('calculator', [])
.controller('FuelCalculatorController', function() {
  this.fuel = 30;
  this.distance = 400;
  this.inFuel = 'Petrol';
  this.fuelTypes = ['Diesel','Petrol','Super Diesel'];
  this.usdToFuelCostRates = {
    'Diesel': 95,
    'Petrol': 135,
    'Super Diesel': 110
  };

  this.mileage = function mileage() {
    return(this.distance / this.fuel);	
  };
  this.fuelCostCalculator = function fuelCostCalculator() {
    return (this.fuel * this.usdToFuelCostRates[this.inFuel]) /this.distance;
  };
  this.showInfor = function showInfor(){
  return({'mileage':this.mileage(), 'cost':this.fuelCostCalculator()})
  };
  
  this.pay = function pay() {
    window.alert("Thanks!"+this.usdToFuelCostRates[this.inFuel]);
  };
});