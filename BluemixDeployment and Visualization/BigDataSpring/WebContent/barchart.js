var letters=[];
var frequencys=[];
var obj;
$(function () {


    //alert('hi');
    //get data from mongo lab


    $.get("https://api.mlab.com/api/1/databases/pb/collections/query5?apiKey=Q_u73BV4oOdMGpnu3WFGmJ8YH_lxHDHO", {},function (jsonDetails) {

        //alert('hello');
         obj= jsonDetails;
        //alert('hi');
        //alert(jsonDetails[0].);
        for(var i=0;i<obj.length;i++){

            letters[i]=obj[i].Player;
            frequencys[i]=obj[i].Tweets;
        }

        //alert(letters[0]);
    /*$http({
     method:'GET',
     url:'https://api.mlab.com/api/1/databases/studentcorner/collections/PB_Project?apiKey=Q_u73BV4oOdMGpnu3WFGmJ8YH_lxHDHO'
     }).success(function(jsonDetails) {

     alert('hi');

     var obj= JSON.parse(jsonDetails);

     for(var i=0;i<obj.length;i++){
     letter[i]=obj[i].letter;
     frequency[i]=obj[i].frequency;
     }

     })*/
    // Create the chart
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Popular player from India'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            type: 'Player'
        },
        yAxis: {
            title: {
                text: 'No of tweets on him'
            }

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {

                    enabled: true,
                    format: '{point.y}'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> of total<br/>'
        },

        series: [{
            name: 'Player',
            colorByPoint: true,
            data: [{
                name: letters[0],
                y: frequencys[0]

            }, {
                name: letters[1],
                y: frequencys[1]

            },
                {
                    name: letters[2],
                    y: frequencys[2]

                }]
        }]
    });
    });

});