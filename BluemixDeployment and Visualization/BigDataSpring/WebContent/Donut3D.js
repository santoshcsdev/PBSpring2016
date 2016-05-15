var letters=[];
var users=[];

$(function () {

    $.get("https://api.mlab.com/api/1/databases/pb/collections/query1?apiKey=Q_u73BV4oOdMGpnu3WFGmJ8YH_lxHDHO", {},function (jsonDetails) {

        //alert('hello');
        obj= jsonDetails;
        //alert('hi');
        //alert(jsonDetails[0].);
        for(var i=0;i<obj.length;i++){

            letters[i]=obj[i].Letters;
            users[i]=obj[i].Users;
        }
    $('#container').highcharts({
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45
            }
        },
        title: {
            text: 'Categorization of User names based on starting alpahabet'
        },
        subtitle: {
            text: ''
        },
        plotOptions: {
            pie: {
                innerSize: 100,
                depth: 45
            }
        },
        series: [{
            name: 'Number of Users',
            data: [
                [letters[0]+'('+users[0]+')', users[0]],
                [letters[1]+'('+users[1]+')', users[1]],
                [letters[2]+'('+users[2]+')', users[2]],
                [letters[3]+'('+users[3]+')', users[3]],
                [letters[4]+'('+users[4]+')', users[4]]
            ]
        }]
    });
    });
});