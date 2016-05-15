/**
 * Created by santoshkumar on 4/7/16.
 */


var screenname0;
var screenname1;
var screenname2;
var followerscount0;
var favoritescount0;
var friendscount0;

var followerscount1;
var favoritescount1;
var friendscount1;

var followerscount2;
var favoritescount2;
var friendscount2;


$(function () {

    $.get("https://api.mlab.com/api/1/databases/pb/collections/query1?apiKey=Q_u73BV4oOdMGpnu3WFGmJ8YH_lxHDHO", {},function (jsonDetails) {

        //alert('hello');
        //var obj= JSON.parse(jsonDetails);
        //alert('hi');
        //alert(jsonDetails[0].);
        /*for(var i=0;i<jsonDetails.length;i++){

         letters[i]=jsonDetails[i].letter;
         frequencys[i]=jsonDetails[i].frequency;
         }*/


        //alert(jsonDetails[0].screen_name0);


        screenname0=jsonDetails[0].screen_name0;
        screenname1=jsonDetails[0].screen_name1;
        screenname2=jsonDetails[0].screen_name2;
        followerscount0=jsonDetails[0].followers_count0;
        followerscount1=jsonDetails[0].followers_count1;
        followerscount2=jsonDetails[0].followers_count2;

        favoritescount0=jsonDetails[0].favorites_count0;
        favoritescount1=jsonDetails[0].favorites_count1;
        favoritescount2=jsonDetails[0].favorites_count2;

        friendscount0=jsonDetails[0].friends_count0;
        friendscount1=jsonDetails[0].friends_count1;

        friendscount2=jsonDetails[0].friends_count2;

    alert(screenname0);



    })

   // alert(screenname0);

    $('#container').highcharts({
        title: {
            text: 'Popular users'
        },
        xAxis: {
            categories: ['followers_count', 'favourites_count', 'friends_count']
        },
        labels: {
            items: [{
                html: 'followers_count=value*10000',
                style: {
                    left: '50px',
                    top: '18px',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                }
            }]
        },
        series: [{
            type: 'column',
            name: screenname0,
            data: [favoritescount0/10000,followerscount0,friendscount0]
        }, {
            type: 'column',
            name: screenname1,
            data: [favoritescount1/10000, followerscount1, friendscount1]
        }, {
            type: 'column',
            name: screenname2,
            data: [favoritescount2/10000, followerscount2, friendscount2]
        }]
    });
});

