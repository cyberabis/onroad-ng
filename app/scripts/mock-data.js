var scoreChartConfig = {
        options: {
            chart: {
                type: 'solidgauge',
                spacing: [0,0,0,0]
            },
            pane: {
                center: ['50%', '50%'],
                size: '85%',
                startAngle: 0,
                endAngle: 360,
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
            data: [63],
            dataLabels: {
              borderColor: 'white',
              y: 0,
              format: '<div style="text-align:center"><span style="font-size:45px;color:black">{y}</span>'
            }
        }],
        yAxis: {
            min: 0,
            max: 100,
            stops: [
                [0.5, '#F08080'], // lightcoral
                [0.75, '#FFA07A'], // lightsalmon
                [1, '#90EE90'] // green
            ],
            tickWidth: 0
        },
        loading: false,
        size: {
          height: 300
        }
    };

var scoreHistoryChartConfig = {
          options: {
              chart: {
                  type: 'line'
              }
          },
          title: {
              text: ''
          },
          series: [
                {
                    name: 'Score',
                    data: [ [1420070400000, 44], [1422748800000, 42], [1425168000000, 55], [1427846400000, 60], [1430438400000, 63] ],
                    color: 'SteelBlue'
                }
          ],
          xAxis: {
              type: 'datetime',
              title: {
                  text: ''
              }
          },
          yAxis: {
              title: {
                  text: ''
              },
              min: 0
          },
          size: {
             height: 250
          }, 
          loading: false
      }