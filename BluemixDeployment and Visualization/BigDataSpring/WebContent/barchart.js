var letters=[];
var frequencys=[];

$(function () {


    //alert('hi');
    //get data from mongo lab


    $.get("https://api.mlab.com/api/1/databases/studentcorner/collections/PB_Project?apiKey=Q_u73BV4oOdMGpnu3WFGmJ8YH_lxHDHO", {},function (jsonDetails) {

        //alert('hello');
        //var obj= JSON.parse(jsonDetails);
        //alert('hi');
        //alert(jsonDetails[0].);
        for(var i=0;i<jsonDetails.length;i++){

            letters[i]=jsonDetails[i].letter;
            frequencys[i]=jsonDetails[i].frequency;
        }

       // alert(frequencys[0]);




    })



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
                    format: '{point.y:.1f}'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },

        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: letters[0],
                y: 5

            }, {
                name: letters[1],
                y: 6

            },
                {
                    name: letters[2],
                    y: 7

                },
                {
                    name: letters[3],
                    y: 4

                }]
        }]
    });
});