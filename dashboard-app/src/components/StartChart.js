import React from 'react'
import { Card } from 'antd';
import Chart from 'react-google-charts'
import { useSelector } from 'react-redux'

export default function StartChart() {

    let branchDataChart = useSelector(state => state.branchDataInChart)

    let finalChartData = [];

    if (branchDataChart) {
        finalChartData.push(branchDataChart.chartField)
        let chartDatas = branchDataChart.datas

        if (chartDatas && chartDatas.length > 0) {
            chartDatas.forEach(data => {
                finalChartData.push([data.month, data.amount]);
            })
        } else {
            finalChartData.push(['', 0]);
        }
    }

    return (
        <div>
            <Card title="Chart" style={{
                width: '100%'
            }}>
                <Chart
                    width={'100%'}
                    height={'400px'}
                    chartType="Line"
                    loader={<div>Loading Chart</div>}
                    data={finalChartData}

                    rootProps={{ 'data-testid': '1' }}
                />
                <p>Card content</p>
            </Card>
        </div>
    )
}
