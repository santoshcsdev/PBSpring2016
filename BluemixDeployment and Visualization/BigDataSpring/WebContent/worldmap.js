google.charts.load('current', {'packages':['geomap']});
google.charts.setOnLoadCallback(drawMap);

function drawMap() {
    var data = google.visualization.arrayToDataTable([
        ['Country', 'Popularity'],
        ['India', 12265],
        ['Pakistan', 4714],
        ['United States', 3355]

    ]);

    var options = {};
    options['dataMode'] = 'regions';

    var container = document.getElementById('regions_div');
    var geomap = new google.visualization.GeoMap(container);

    geomap.draw(data, options);
};

