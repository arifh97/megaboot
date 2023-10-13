(() => {
    const donutChartCtx = document.getElementById('barChart').getContext('2d');
    new Chart(donutChartCtx, {
        type: 'doughnut',
        data: {
        labels: ['Liquidity Pool', 'CEX Listing'],
        datasets: [{
            label: 'Sale',
            data: [90, 10,],
            borderWidth: 0,
            backgroundColor: ['#0193FC', '#01E4FC']
        }]
        },
        options: {
            responsive:true,
            maintainAspectRatio:false,
            aspectRatio:1 | 0,
            scales: {
                y: {
                    beginAtZero: true,
                    grid:{
                        display:false,
                    },
                    ticks:{
                        display:false
                    }
                },
                x:{
                    beginAtZero: true,
                    grid:{
                        display:false,
                    },
                    ticks:{
                        display:false
                    }
                }
            },
            plugins:{
                legend:{
                    display:true,
                    position:'bottom',
                    labels:{
                        generateLabels: (chart) => {
                            const datasets = chart.data.datasets;
                            return datasets[0].data.map((data, i) => ({
                                text: `${chart.data.labels[i]} ${data}%`,
                                fillStyle: datasets[0].backgroundColor[i],
                                strokeStyle: datasets[0].backgroundColor[i],
                                index: i,
                                fontColor:'#DADADA',
                            }))
                        },
                        boxWidth:10,
                        boxHeight:10,
                        usePointStyle:true,
                        padding:50,
                        borderRadius:100
                    }
                },
                tooltip:{
                    enabled: false
                }
            }
            
        }
    })
})()