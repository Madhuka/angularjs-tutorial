# AngularJS Tutorial : Google Chart Tutorial
Here we will use Google chart tools directive Module.Here are the steps:

 - Download ('ng-google-chart.js')[https://github.com/bouil/angular-google-chart/blob/gh-pages/ng-google-chart.js] from github and add a script tag to your html.
 - Create a `div` like:
 ```html
   <div google-chart chart="chart" style="{{chart.cssStyle}}"/>
 ```
 - Add `'googlechart'` to your module like this:
 ```js
angular.module('myApp',[ 'googlechart', ...
```
 - Populate the `$scope.chart` like this: `{{chart | json}}`

###URL
[http://localhost:8000/google-chart/](http://localhost:8000/google-chart/) 

### Version
0.0.0

### Author
[Madhuka](http://madhukaudantha.blogspot.com/)