var chartConfig = {
        options: {
            chart: {
                type: 'solidgauge'
            },
            pane: {
                center: ['50%', '50%'],
                size: '100%',
                startAngle: -90,
                endAngle: +90,
                background: {
                    backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                    innerRadius: '60%',
                    outerRadius: '100%',
                    shape: 'arc'
                }
            },
            solidgauge: {
                dataLabels: {
                    borderWidth: 0,
                    useHTML: true
                }
            },
            tooltip: {
                enabled: false
            },
            title: null
        },
        series: [{
            data: [75],
            dataLabels: {
              borderColor: 'white',
              y: -10,
              format: '<div style="text-align:center"><span style="font-size:50px;color:black">{y}</span>'
            }
        }],
        yAxis: {
            min: 0,
            max: 100,
            stops: [
                [0.1, '#F08080'], // lightcoral
                [0.5, '#FFA07A'], // lightsalmon
                [0.8, '#90EE90'] // green
            ],
            tickWidth: 0
        },
        loading: false
    };