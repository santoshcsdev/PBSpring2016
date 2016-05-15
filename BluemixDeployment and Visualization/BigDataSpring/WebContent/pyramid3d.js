/**
 * Created by santoshkumar on 4/7/16.
 */
$(function () {

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
                ['en(English)',152522],
                ['hi(Hindi)',15534],
                ['in(Indonesian)',8055],
                ['und(Un-Determined)',7273],
                ['ur(Urdu)',4057],
                ['tl(Tagalog)',3916],
                ['et(Estonian)',2634],
                ['ht(Haitian Creole)',1373],
                ['pl(Polish)',1246],
                ['de(German)',1097],

            ]
        }]
    });
});