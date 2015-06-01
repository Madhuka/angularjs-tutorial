angular.module('chart', ['googlechart', 'nvd3', 'highcharts-ng'])
    .controller('ChartController', ['$scope', function($scope) {
        $scope.fileName = 'car';
        $scope.loadData = function() {
            console.log(loadFile($scope.fileName));

        };
        $scope.options = {
            chart: {
                type: 'discreteBarChart',
                height: 250,
                width: 400,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 60,
                    left: 55
                },
                x: function(d) {
                    return d.label;
                },
                y: function(d) {
                    return d.value;
                },
                showValues: true,                
                transitionDuration: 500,
                xAxis: {
                    axisLabel: 'X Axis'
                },
                yAxis: {
                    axisLabel: 'Y Axis',
                    axisLabelDistance: 10
                }
            }
        };
        $scope.data = [{
            
            values: [{
                "label": "A",
                "value": -29.765957771107
            }, {
                "label": "B",
                "value": 0
            }, {
                "label": "C",
                "value": 32.807804682612
            }, {
                "label": "D",
                "value": 196.45946739256
            }, {
                "label": "E",
                "value": 0.19434030906893
            }, {
                "label": "F",
                "value": -98.079782601442
            }, {
                "label": "G",
                "value": -13.925743130903
            }, {
                "label": "H",
                "value": -5.1387322875705
            }]
        }];

        loadFile = function(fileName) {

            d3.csv("data/" + fileName + ".csv", function(d) {
                return {
                    year: new Date(+d.Year, 0, 1), // convert "Year" column to Date
                    make: d.Make,
                    model: d.Model,
                    length: +d.Length // convert "Length" column to number
                };
            }, function(error, rows) {
                console.log(rows);
            });
        };

$scope.chartConfig = {
        options: {
            chart: {
                type: 'bar'
            }
        },
        series: [{
            data: [10, 15, 12, 8, 7]
        }],
        title: {
            text: 'Hello'
        },
size: {
   width: 400,
   height: 300
  },
        loading: false
    }

    }]);