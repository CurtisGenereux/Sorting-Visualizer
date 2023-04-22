function updateGraph() {
    
    Highcharts.chart('container', {
        chart: {
                backgroundColor: '#232429',
                type: 'column'
            },

        title: {
            text: ""
        },

        subtitle: {
            text: ''
        },

        yAxis: {
            title: {
                text: ''
            }
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                color: barColor,
                marker: {
                    enabled: false
                },
                label: {
                    connectorAllowed: false
                },
                pointStart: 1,
                animation: {
                duration: 0
            }
            }
        },
        

        series: [{
            name: "Array",
            data: array
        }],

    });
}

function createGraph() {

    Highcharts.chart('container', {
        chart: {
                backgroundColor: '#232429',
                type: 'column'
            },

        title: {
            text: ""
        },

        subtitle: {
            text: ''
        },

        yAxis: {
            title: {
                text: ''
            }
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                
                color: barColor,
                marker: {
                    enabled: false
                },
                label: {
                    connectorAllowed: false
                },
                pointStart: 1,
            }
        },
        

        series: [{
            name: "Array",
            data: array
        }],

    });
}