
var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    names: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    names: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    names: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function sumArray(array){

  var initialValue = 0;
  var sum = array.reduce(function(first, last){
   return first + last}, initialValue);

  return sum;
};



function calculateSalesTax(salesData, taxRates) {

  var TSales = [];
  var BSales = [];
  var tTax = [];
  var bTax = [];

  var resultsObject = {

    Telus : {

      totalSales: 0,
      totalTaxes: 0
    },

    Bombadier : {

      totalSales: 0,
      totalTaxes: 0
      }
  };

    for (salesinfo of salesData){

      if (salesinfo.names === "Telus"){
         for ( arrayofSales of salesinfo.sales){
            TSales.push(arrayofSales)
          };
      } else {
        for (arrayofSales of salesinfo.sales){
          BSales.push(arrayofSales)
        }
      }
    }

    for (salesinfo of salesData){

      if (salesinfo.names === "Telus" && salesinfo.province === "BC"){
         for ( arrayofSales of salesinfo.sales){
             tTax.push(arrayofSales * taxRates.BC);
          }
      } else if (salesinfo.names === "Telus" && salesinfo.province === "SK"){
          for ( arrayofSales of salesinfo.sales){
               tTax.push(arrayofSales * taxRates.SK);
          }
      } else {
          for (arrayofSales of salesinfo.sales){
            bTax.push(arrayofSales * taxRates.AB);
          }
      }
    }

    resultsObject.Telus.totalSales = sumArray(TSales);
    resultsObject.Bombadier.totalSales = sumArray(BSales);
    resultsObject.Telus.totalTaxes = sumArray(tTax);
    resultsObject.Bombadier.totalTaxes = sumArray(bTax);

    return resultsObject;
};

console.log(calculateSalesTax(companySalesData, salesTaxRates))