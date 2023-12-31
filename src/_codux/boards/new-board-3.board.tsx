import { createBoard } from '@wixc3/react-board';
import { ResponsiveLine } from '@nivo/line';



const data = [
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
    name: 'New Board 3',
    Board: () => <div>
        <div style={{ width: '800px', height: '400px' }}>
            <ResponsiveLine
                data={data}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
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
                useMesh={true}
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
            />
        </div>
    </div>,
    isSnippet: true,
});
