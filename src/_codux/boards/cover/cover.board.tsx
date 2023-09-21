import { createBoard } from '@wixc3/react-board';
import styles from './cover.module.scss';
import { ResponsiveBar } from '@nivo/bar';
import { ResponsiveLine } from '@nivo/line';

const data = [
    {
        country: 'AD',
        'hot dog': 21,
        'hot dogColor': 'hsl(193, 70%, 50%)',
        burger: 121,
        burgerColor: 'hsl(42, 70%, 50%)',
        sandwich: 112,
        sandwichColor: 'hsl(285, 70%, 50%)',
        kebab: 39,
        kebabColor: 'hsl(262, 70%, 50%)',
        fries: 114,
        friesColor: 'hsl(146, 70%, 50%)',
        donut: 143,
        donutColor: 'hsl(228, 70%, 50%)',
    },
    {
        country: 'AE',
        'hot dog': 36,
        'hot dogColor': 'hsl(92, 70%, 50%)',
        burger: 167,
        burgerColor: 'hsl(285, 70%, 50%)',
        sandwich: 74,
        sandwichColor: 'hsl(88, 70%, 50%)',
        kebab: 52,
        kebabColor: 'hsl(243, 70%, 50%)',
        fries: 200,
        friesColor: 'hsl(167, 70%, 50%)',
        donut: 118,
        donutColor: 'hsl(150, 70%, 50%)',
    },
    {
        country: 'AF',
        'hot dog': 68,
        'hot dogColor': 'hsl(265, 70%, 50%)',
        burger: 3,
        burgerColor: 'hsl(162, 70%, 50%)',
        sandwich: 101,
        sandwichColor: 'hsl(108, 70%, 50%)',
        kebab: 6,
        kebabColor: 'hsl(238, 70%, 50%)',
        fries: 93,
        friesColor: 'hsl(133, 70%, 50%)',
        donut: 68,
        donutColor: 'hsl(74, 70%, 50%)',
    },
    {
        country: 'AG',
        'hot dog': 199,
        'hot dogColor': 'hsl(51, 70%, 50%)',
        burger: 126,
        burgerColor: 'hsl(287, 70%, 50%)',
        sandwich: 81,
        sandwichColor: 'hsl(330, 70%, 50%)',
        kebab: 198,
        kebabColor: 'hsl(92, 70%, 50%)',
        fries: 15,
        friesColor: 'hsl(138, 70%, 50%)',
        donut: 163,
        donutColor: 'hsl(172, 70%, 50%)',
    },
    {
        country: 'AI',
        'hot dog': 146,
        'hot dogColor': 'hsl(13, 70%, 50%)',
        burger: 86,
        burgerColor: 'hsl(134, 70%, 50%)',
        sandwich: 67,
        sandwichColor: 'hsl(288, 70%, 50%)',
        kebab: 46,
        kebabColor: 'hsl(220, 70%, 50%)',
        fries: 112,
        friesColor: 'hsl(10, 70%, 50%)',
        donut: 169,
        donutColor: 'hsl(80, 70%, 50%)',
    },
    {
        country: 'AL',
        'hot dog': 125,
        'hot dogColor': 'hsl(336, 70%, 50%)',
        burger: 2,
        burgerColor: 'hsl(92, 70%, 50%)',
        sandwich: 67,
        sandwichColor: 'hsl(204, 70%, 50%)',
        kebab: 59,
        kebabColor: 'hsl(278, 70%, 50%)',
        fries: 151,
        friesColor: 'hsl(136, 70%, 50%)',
        donut: 119,
        donutColor: 'hsl(149, 70%, 50%)',
    },
    {
        country: 'AM',
        'hot dog': 83,
        'hot dogColor': 'hsl(247, 70%, 50%)',
        burger: 152,
        burgerColor: 'hsl(360, 70%, 50%)',
        sandwich: 2,
        sandwichColor: 'hsl(275, 70%, 50%)',
        kebab: 43,
        kebabColor: 'hsl(296, 70%, 50%)',
        fries: 28,
        friesColor: 'hsl(80, 70%, 50%)',
        donut: 177,
        donutColor: 'hsl(43, 70%, 50%)',
    },
];

const data1 = [
    {
        id: 'japan',
        color: 'hsl(254, 70%, 50%)',
        data: [
            {
                x: 'plane',
                y: 74,
            },
            {
                x: 'helicopter',
                y: 196,
            },
            {
                x: 'boat',
                y: 100,
            },
            {
                x: 'train',
                y: 88,
            },
            {
                x: 'subway',
                y: 234,
            },
            {
                x: 'bus',
                y: 212,
            },
            {
                x: 'car',
                y: 246,
            },
            {
                x: 'moto',
                y: 12,
            },
            {
                x: 'bicycle',
                y: 237,
            },
            {
                x: 'horse',
                y: 3,
            },
            {
                x: 'skateboard',
                y: 55,
            },
            {
                x: 'others',
                y: 266,
            },
        ],
    },
    {
        id: 'france',
        color: 'hsl(276, 70%, 50%)',
        data: [
            {
                x: 'plane',
                y: 273,
            },
            {
                x: 'helicopter',
                y: 42,
            },
            {
                x: 'boat',
                y: 68,
            },
            {
                x: 'train',
                y: 231,
            },
            {
                x: 'subway',
                y: 293,
            },
            {
                x: 'bus',
                y: 113,
            },
            {
                x: 'car',
                y: 239,
            },
            {
                x: 'moto',
                y: 42,
            },
            {
                x: 'bicycle',
                y: 252,
            },
            {
                x: 'horse',
                y: 44,
            },
            {
                x: 'skateboard',
                y: 72,
            },
            {
                x: 'others',
                y: 5,
            },
        ],
    },
    {
        id: 'us',
        color: 'hsl(104, 70%, 50%)',
        data: [
            {
                x: 'plane',
                y: 244,
            },
            {
                x: 'helicopter',
                y: 198,
            },
            {
                x: 'boat',
                y: 152,
            },
            {
                x: 'train',
                y: 187,
            },
            {
                x: 'subway',
                y: 205,
            },
            {
                x: 'bus',
                y: 134,
            },
            {
                x: 'car',
                y: 191,
            },
            {
                x: 'moto',
                y: 198,
            },
            {
                x: 'bicycle',
                y: 271,
            },
            {
                x: 'horse',
                y: 230,
            },
            {
                x: 'skateboard',
                y: 222,
            },
            {
                x: 'others',
                y: 141,
            },
        ],
    },
    {
        id: 'germany',
        color: 'hsl(170, 70%, 50%)',
        data: [
            {
                x: 'plane',
                y: 253,
            },
            {
                x: 'helicopter',
                y: 295,
            },
            {
                x: 'boat',
                y: 17,
            },
            {
                x: 'train',
                y: 65,
            },
            {
                x: 'subway',
                y: 200,
            },
            {
                x: 'bus',
                y: 290,
            },
            {
                x: 'car',
                y: 210,
            },
            {
                x: 'moto',
                y: 94,
            },
            {
                x: 'bicycle',
                y: 132,
            },
            {
                x: 'horse',
                y: 169,
            },
            {
                x: 'skateboard',
                y: 31,
            },
            {
                x: 'others',
                y: 50,
            },
        ],
    },
    {
        id: 'norway',
        color: 'hsl(304, 70%, 50%)',
        data: [
            {
                x: 'plane',
                y: 204,
            },
            {
                x: 'helicopter',
                y: 68,
            },
            {
                x: 'boat',
                y: 110,
            },
            {
                x: 'train',
                y: 199,
            },
            {
                x: 'subway',
                y: 229,
            },
            {
                x: 'bus',
                y: 89,
            },
            {
                x: 'car',
                y: 61,
            },
            {
                x: 'moto',
                y: 122,
            },
            {
                x: 'bicycle',
                y: 270,
            },
            {
                x: 'horse',
                y: 72,
            },
            {
                x: 'skateboard',
                y: 207,
            },
            {
                x: 'others',
                y: 139,
            },
        ],
    },
];
export default createBoard({
    name: 'Cover',
    Board: () => (
        <div className={styles.root}>
            <div className={styles['left-side']}>
                <div className={styles['left-side']}>
                    <ResponsiveBar
                        data={data}
                        keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
                        indexBy="country"
                        padding={0.3}
                        valueScale={{ type: 'linear' }}
                        indexScale={{ type: 'band', round: true }}
                        colors={{ scheme: 'nivo' }}
                        defs={[
                            {
                                id: 'dots',
                                type: 'patternDots',
                                background: 'inherit',
                                color: '#38bcb2',
                                size: 4,
                                padding: 1,
                                stagger: true,
                            },
                            {
                                id: 'lines',
                                type: 'patternLines',
                                background: 'inherit',
                                color: '#eed312',
                                rotation: -45,
                                lineWidth: 6,
                                spacing: 10,
                            },
                        ]}
                        fill={[
                            {
                                match: {
                                    id: 'fries',
                                },
                                id: 'dots',
                            },
                            {
                                match: {
                                    id: 'sandwich',
                                },
                                id: 'lines',
                            },
                        ]}
                        borderColor={{
                            from: 'color',
                            modifiers: [['darker', 1.6]],
                        }}
                        axisTop={null}
                        axisRight={null}
                        axisBottom={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'country',
                            legendPosition: 'middle',
                            legendOffset: 32,
                        }}
                        axisLeft={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'food',
                            legendPosition: 'middle',
                            legendOffset: -40,
                        }}
                        labelSkipWidth={12}
                        labelSkipHeight={12}
                        labelTextColor={{
                            from: 'color',
                            modifiers: [['darker', 1.6]],
                        }}
                        legends={[
                            {
                                dataFrom: 'keys',
                                anchor: 'bottom-right',
                                direction: 'column',
                                justify: false,
                                translateX: 120,
                                translateY: 0,
                                itemsSpacing: 2,
                                itemWidth: 100,
                                itemHeight: 20,
                                itemDirection: 'left-to-right',
                                itemOpacity: 0.85,
                                symbolSize: 20,
                                effects: [
                                    {
                                        on: 'hover',
                                        style: {
                                            itemOpacity: 1,
                                        },
                                    },
                                ],
                            },
                        ]}
                        role="application"
                        ariaLabel="Nivo bar chart demo"
                        barAriaLabel={(e) =>
                            e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue
                        }
                    />
                </div>
            </div>
            <div className={styles['right-side']}>
                <div style={{ width: '800px', height: '400px' }}>
                    <ResponsiveLine
                        data={data1}
                        xScale={{ type: 'point' }}
                        yScale={{
                            type: 'linear',
                            min: 'auto',
                            max: 'auto',
                            stacked: true,
                            reverse: false,
                        }}
                        yFormat=" >-.2f"
                        axisTop={null}
                        axisRight={null}
                        axisBottom={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'transportation',
                            legendOffset: 36,
                            legendPosition: 'middle',
                        }}
                        axisLeft={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'count',
                            legendOffset: -40,
                            legendPosition: 'middle',
                        }}
                        pointSize={10}
                        pointColor={{ theme: 'background' }}
                        pointBorderWidth={2}
                        pointBorderColor={{ from: 'serieColor' }}
                        pointLabelYOffset={-12}
                        legends={[
                            {
                                anchor: 'bottom-right',
                                direction: 'column',
                                justify: false,
                                translateX: 100,
                                translateY: 0,
                                itemsSpacing: 0,
                                itemDirection: 'left-to-right',
                                itemWidth: 80,
                                itemHeight: 20,
                                itemOpacity: 0.75,
                                symbolSize: 12,
                                symbolShape: 'circle',
                                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                                effects: [
                                    {
                                        on: 'hover',
                                        style: {
                                            itemBackground: 'rgba(0, 0, 0, .03)',
                                            itemOpacity: 1,
                                        },
                                    },
                                ],
                            },
                        ]}
                        useMesh={true}
                    />
                </div>
            </div>
        </div>
    ),
    isSnippet: true,
    environmentProps: {
        windowHeight: 640,
        canvasHeight: 640,
    },
});
