google.charts.load('current', {'packages':['geomap']});
google.charts.setOnLoadCallback(drawMap);

var Language=[];
var Tweets=[];

$.get("https://api.mlab.com/api/1/databases/pb/collections/query8?apiKey=Q_u73BV4oOdMGpnu3WFGmJ8YH_lxHDHO", {},function (jsonDetails) {

    //alert('hello');
    obj = jsonDetails;
    //alert('hi');
    //alert(jsonDetails[0].);
    for (var i = 0; i < obj.length; i++) {

        Language[i] = obj[i].Language;
        Tweets[i] = obj[i].Tweets;
    }


    function drawMap() {
        var data = google.visualization.arrayToDataTable([
            [Language[0], Tweets[0]],
            [Language[1], Tweets[1]],
            [Language[2], Tweets[2]],
            [Language[3], Tweets[3]]

        ]);

        var options = {};
        options['dataMode'] = 'regions';

        var container = document.getElementById('regions_div');
        var geomap = new google.visualization.GeoMap(container);

        geomap.draw(data, options);
    };

});

