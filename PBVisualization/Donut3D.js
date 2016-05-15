$(function () {
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
                ['A-E(44067)', 44067],
                ['F-J(23398)', 23398],
                ['K-O(31322)', 31322],
                ['P-T(49466)', 49466],
                ['U-Z(12771)', 12771]
            ]
        }]
    });
});