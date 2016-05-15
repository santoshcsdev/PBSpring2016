var userStatus=[];
var users=[];

$(function () {

    $.get("https://api.mlab.com/api/1/databases/pb/collections/query4?apiKey=Q_u73BV4oOdMGpnu3WFGmJ8YH_lxHDHO", {},function (jsonDetails) {

        //alert('hello');
        obj= jsonDetails;
        //alert('hi');
        //alert(jsonDetails[0].);
        for(var i=0;i<obj.length;i++){

            userStatus[i]=obj[i].userStatus;
            users[i]=obj[i].users;
        }
    $('#container').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: 'Verified users having status count less than 10000<br>Non-Verified users having status count greater than 10000',
            align: 'center',
            verticalAlign: 'left',
            y: 10
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%']
            }
        },
        series: [{
            type: 'pie',
            name: '',
            innerSize: '50%',
            data: [
                [userStatus[0], users[0] ],
                [userStatus[1], users[1]],
                {
                    name: 'Proprietary or Undetectable',
                    y: 0.2,
                    dataLabels: {
                        enabled: false
                    }
                }
            ]
        }]
    });
    });
});
/**
 * Created by santoshkumar on 4/7/16.
 */
