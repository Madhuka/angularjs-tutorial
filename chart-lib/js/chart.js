angular.module('chart', ['googlechart', 'nvd3', 'highcharts-ng'])
    .controller('ChartController', ['$scope', function($scope) {
        $scope.fileName = 'car';
        $scope.loadData = function() {
            console.log(loadFile($scope.fileName));

        };

        //nvd3 chart
        $scope.options = {
            chart: {
                type: 'discreteBarChart',
                height: 300,
                width: 400,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 60,
                    left: 55
                },
                x: function(d) {
                    return d.valuex;
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
                "value": 5,
                "valuex": 0
            }, {
                "label": "B",
                "value": 10,
                "valuex": 1
            }, {
                "label": "C",
                "value": 24,
                "valuex": 2
            }, {
                "label": "D",
                "value": 8,
                "valuex": 3
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
        $scope.loadCarData = function(fileName) {
            console.log($scope.chartConfig.series[0].data)
            d3.csv("data/" + fileName + ".csv", function(d) {

                return d.Make;
            }, function(error, rows) {
                $scope.chartConfig.xAxis.categories = rows;
            });
            d3.csv("data/" + fileName + ".csv", function(d) {

                return +d.Length;
            }, function(error, rows) {
                console.log(rows);
                $scope.chartConfig.series[0].data = rows;
            });
        };

        //setting ncd3 labels and data 
        $scope.loadCarDatatoNVD3 = function(fileName,labelx) {
            console.log($scope.data[0].values)
            d3.csv("data/" + fileName + ".csv", function(d) {

                return {
                    label: d[labelx],
                    value: +d.Length,
                    valuex: +d.No
                }
            }, function(error, rows) {
                $scope.data[0].values = rows;
            });
            
        };

        //setting google chart labels and data 
        $scope.loadCarDatatoGoogle = function(fileName) {
            console.log($scope.chart.data)
            //cols
            d3.csv("data/" + fileName + ".csv", function(d) {

                return {c: [
            {v: d.Make},
            {v: +d.Length}
        ]}
            }, function(error, rows) {
                console.log(rows);
                $scope.chart.data.rows=rows;
            });
            
        };

        //highchart 
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

        //google chart
        var chart1 = {};


    chart1.type = "BarChart";
    chart1.cssStyle = "height:400px; width:600px;";
    chart1.data = {"cols": [
        {id: "pizza", label: "Pizza", type: "string"},
        {id: "populartiy", label: "Populartiy", type: "number"}
        
    ], "rows": [
        {c: [
            {v: "Pepperoni"},
            {v: 14}
        ]},
        {c: [
            {v: "Mushroom"},
            {v: 6}
        ]},
        {c: [
            {v: "Hawaiian"},
            {v: 5}
        ]},
        {c: [
            {v: "Sausage"},
            {v: 10}
        ]}
    ]};

    chart1.options = {
        "title": "Google Bar Chart",
        "isStacked": "true",
        "fill": 20,
        "displayExactValues": true,
        "vAxis": {
            "title": "V Axis",
            "gridlines": {
                "count": 6
            }
        },
        "hAxis": {
            "title": "hAxis title"
        }
    };

    chart1.formatters = {};

    $scope.chart = chart1;


$scope.switch = function(gchartType,hchartType,dchartType) {
    $scope.chart.type = gchartType;
    $scope.chartConfig.options.chart.type = hchartType;
    $scope.options.chart.type = dchartType;
    //nvd3 
    var nvdLabels = ["A", "B", "C", "D"];
    $scope.options.chart.xAxis = {'axisLabel': 'Models'};
    $scope.options.chart.xAxis = {'tickFormat': function(d){
      return nvdLabels[d]
    } };
};
    }]);