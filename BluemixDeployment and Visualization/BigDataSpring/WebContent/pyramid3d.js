/**
 * Created by santoshkumar on 4/7/16.
 */

var letters=[];
var users=[];
$(function () {

    $.get("https://api.mlab.com/api/1/databases/pb/collections/query2?apiKey=Q_u73BV4oOdMGpnu3WFGmJ8YH_lxHDHO", {},function (jsonDetails) {

        //alert('hello');
        obj= jsonDetails;
        //alert('hi');
        //alert(jsonDetails[0].);
        for(var i=0;i<obj.length;i++){

            letters[i]=obj[i].Language;
            users[i]=obj[i].Tweets;
        }

    $('#container').highcharts({
        chart: {
            type: 'pyramid',
            marginRight: 150
        },
        title: {
            text: 'Language based tweets',
            x: -50
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b> ({point.y:,.0f})',
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                    softConnector: true
                }
            }
        },
        legend: {
            enabled: false
        },
        series: [{
            name: 'Unique users',
            data: [
                [letters[0],users[0]],
                [letters[1],users[1]],
                [letters[2],users[2]],
                [letters[3],users[3]],
                [letters[4],users[4]],
                [letters[5],users[5]],
                [letters[6],users[6]],
                [letters[7],users[7]],
                [letters[8],users[8]],
                [letters[9],users[9]],

            ]
        }]
    });
    });
});