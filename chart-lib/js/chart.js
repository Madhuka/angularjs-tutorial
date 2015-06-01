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
                "value": 5
            }, {
                "label": "B",
                "value": 10
            }, {
                "label": "C",
                "value": 24
            }, {
                "label": "D",
                "value": 8
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


        //setting high chart labels and data seriees 
        $scope.loadCarData = function() {
            console.log($scope.chartConfig.series[0].data)
            d3.csv("data/car.csv", function(d) {

                return d.Make;
            }, function(error, rows) {
                $scope.chartConfig.xAxis.categories = rows;
            });
            d3.csv("data/car.csv", function(d) {

                return +d.Length;
            }, function(error, rows) {
                console.log(rows);
                $scope.chartConfig.series[0].data = rows;
            });
        };

        //setting ncd3 labels and data 
        $scope.loadCarDatatoNVD3 = function(labelx) {
            console.log($scope.data[0].values)
            d3.csv("data/car.csv", function(d) {

                return {
                    label: d[labelx],
                    value: +d.Length
                }
            }, function(error, rows) {
                $scope.data[0].values = rows;
            });
            
        };


        $scope.chartConfig = {
            options: {
                chart: {
                    type: 'bar'
                }
            },
            xAxis: {
                categories: ['A', 'B', 'C', 'D']
            },
            series: [{
                data: [10, 15, 12, 8]
            }],
            size: {
                width: 400,
                height: 300
            },
            loading: false
        }

    }]);