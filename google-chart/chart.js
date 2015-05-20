angular.module('google-chart-example', ['googlechart']).controller("ChartCtrl", function ($scope) {
var chart1 = {};

    
    chart1.type = "BarChart";
    chart1.cssStyle = "height:400px; width:600px;";
    chart1.data = data;

    chart1.options = {
        "title": "Website Visitors per month",
        "isStacked": "true",
        "fill": 20,
        "displayExactValues": true,
        "vAxis": {
            "title": "Visit Count", "gridlines": {"count": 6}
        },
        "hAxis": {
            "title": "Date"
        }
    };

    chart1.formatters = {};

    $scope.chart = chart1;

$scope.switch = function (chartType) {
    ResetOption();    
    AxisTransform();
    if (chartType=="3DPieChart"){
        AddNewOption('is3D',true);
        $scope.chart.type='PieChart';
    }else if (chartType=="DonutChart") {
        AddNewOption('pieHole',0.4);
        $scope.chart.type='PieChart';
    }else{
        $scope.chart.type=chartType;
    }
        
};

$scope.switchData = function (sampleDataNo) {
    if(sampleDataNo==1){
        $scope.chart.data=data1;
    }else if (sampleDataNo==2) {
        $scope.chart.data=data2;
    }else if (sampleDataNo==3) {
        $scope.chart.data=data3;
    }
};    

AxisTransform = function () {
    tempvAxis = $scope.chart.options.vAxis;
    temphAxis = $scope.chart.options.hAxis;
    $scope.chart.options.vAxis = temphAxis;
    $scope.chart.options.hAxis = tempvAxis;
};

AddNewOption = function (name,value) {
    options = $scope.chart.options
    $scope.chart.options[name] = value;
};

ResetOption = function () {
   options = {
        "title": "Website Visitors per month",
        "isStacked": "true",
        "fill": 20,
        "displayExactValues": true,
        "vAxis": {
            "title": "Visit Count", "gridlines": {"count": 6}
        },
        "hAxis": {
            "title": "Date"
        }
        
    };
    $scope.chart.options=options;
};

});