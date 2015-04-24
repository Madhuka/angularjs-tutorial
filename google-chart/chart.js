angular.module('google-chart-example', ['googlechart']).controller("MainCtrl", function ($scope) {

    var chart1 = {};
    chart1.type = "ColumnChart";
    chart1.cssStyle = "height:400px; width:600px;";
    chart1.data = {"cols": [
        {id: "month", label: "Month", type: "string"},
        {id: "usa-id", label: "USA", type: "number"},
        {id: "uk-id", label: "UK", type: "number"},
        {id: "asia-id", label: "Asia", type: "number"},
        {id: "other-id", label: "Other", type: "number"}
    ], "rows": [
        {c: [
            {v: "January"},
            {v: 22, f: "22 Visitors from USA"},
            {v: 12, f: "Only 12 Visitors from UK"},
            {v: 15, f: "15 Asian Visitors"},
            {v: 14, f: "14 Others"}
        ]},
        {c: [
            {v: "February"},
            {v: 14},
            {v: 33, f: "Marketing has happen"},
            {v: 28},
            {v: 6}
        ]},
        {c: [
            {v: "March"},
            {v: 22},
            {v: 8, f: "UK vacation"},
            {v: 11},
            {v: 0}

        ]}
    ]};

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

});