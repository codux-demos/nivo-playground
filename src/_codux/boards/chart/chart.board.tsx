import classNames from 'classnames';
import { createBoard } from '@wixc3/react-board';
import { ResponsiveBump, ResponsiveAreaBump } from '@nivo/bump';
import styles from './chart.module.scss';
import { getSchemeByIndex } from '../../helpers';

const bumpData = [
    {
        id: 'Serie 1',
        data: [
            {
                x: 2000,
                y: 8,
            },
            {
                x: 2001,
                y: 4,
            },
            {
                x: 2002,
                y: 8,
            },
            {
                x: 2003,
                y: 5,
            },
            {
                x: 2004,
                y: 2,
            },
        ],
    },
    {
        id: 'Serie 2',
        data: [
            {
                x: 2000,
                y: 2,
            },
            {
                x: 2001,
                y: 3,
            },
            {
                x: 2002,
                y: 11,
            },
            {
                x: 2003,
                y: 8,
            },
            {
                x: 2004,
                y: 7,
            },
        ],
    },
    {
        id: 'Serie 3',
        data: [
            {
                x: 2000,
                y: 4,
            },
            {
                x: 2001,
                y: 1,
            },
            {
                x: 2002,
                y: 12,
            },
            {
                x: 2003,
                y: 4,
            },
            {
                x: 2004,
                y: 5,
            },
        ],
    },
    {
        id: 'Serie 4',
        data: [
            {
                x: 2000,
                y: 6,
            },
            {
                x: 2001,
                y: 9,
            },
            {
                x: 2002,
                y: 3,
            },
            {
                x: 2003,
                y: 2,
            },
            {
                x: 2004,
                y: 4,
            },
        ],
    },
    {
        id: 'Serie 5',
        data: [
            {
                x: 2000,
                y: 12,
            },
            {
                x: 2001,
                y: 11,
            },
            {
                x: 2002,
                y: 6,
            },
            {
                x: 2003,
                y: 10,
            },
            {
                x: 2004,
                y: 11,
            },
        ],
    },
    {
        id: 'Serie 6',
        data: [
            {
                x: 2000,
                y: 10,
            },
            {
                x: 2001,
                y: 12,
            },
            {
                x: 2002,
                y: 10,
            },
            {
                x: 2003,
                y: 1,
            },
            {
                x: 2004,
                y: 3,
            },
        ],
    },
    {
        id: 'Serie 7',
        data: [
            {
                x: 2000,
                y: 7,
            },
            {
                x: 2001,
                y: 10,
            },
            {
                x: 2002,
                y: 2,
            },
            {
                x: 2003,
                y: 3,
            },
            {
                x: 2004,
                y: 10,
            },
        ],
    },
    {
        id: 'Serie 8',
        data: [
            {
                x: 2000,
                y: 11,
            },
            {
                x: 2001,
                y: 5,
            },
            {
                x: 2002,
                y: 5,
            },
            {
                x: 2003,
                y: 9,
            },
            {
                x: 2004,
                y: 1,
            },
        ],
    },
    {
        id: 'Serie 9',
        data: [
            {
                x: 2000,
                y: 3,
            },
            {
                x: 2001,
                y: 8,
            },
            {
                x: 2002,
                y: 7,
            },
            {
                x: 2003,
                y: 7,
            },
            {
                x: 2004,
                y: 12,
            },
        ],
    },
    {
        id: 'Serie 10',
        data: [
            {
                x: 2000,
                y: 9,
            },
            {
                x: 2001,
                y: 7,
            },
            {
                x: 2002,
                y: 9,
            },
            {
                x: 2003,
                y: 6,
            },
            {
                x: 2004,
                y: 8,
            },
        ],
    },
    {
        id: 'Serie 11',
        data: [
            {
                x: 2000,
                y: 5,
            },
            {
                x: 2001,
                y: 6,
            },
            {
                x: 2002,
                y: 4,
            },
            {
                x: 2003,
                y: 12,
            },
            {
                x: 2004,
                y: 6,
            },
        ],
    },
    {
        id: 'Serie 12',
        data: [
            {
                x: 2000,
                y: 1,
            },
            {
                x: 2001,
                y: 2,
            },
            {
                x: 2002,
                y: 1,
            },
            {
                x: 2003,
                y: 11,
            },
            {
                x: 2004,
                y: 9,
            },
        ],
    },
];

const areaBumpData = [
    {
        id: 'JavaScript',
        data: [
            {
                x: 2000,
                y: 18,
            },
            {
                x: 2001,
                y: 16,
            },
            {
                x: 2002,
                y: 20,
            },
            {
                x: 2003,
                y: 20,
            },
            {
                x: 2004,
                y: 27,
            },
            {
                x: 2005,
                y: 22,
            },
        ],
    },
    {
        id: 'ReasonML',
        data: [
            {
                x: 2000,
                y: 21,
            },
            {
                x: 2001,
                y: 27,
            },
            {
                x: 2002,
                y: 15,
            },
            {
                x: 2003,
                y: 13,
            },
            {
                x: 2004,
                y: 16,
            },
            {
                x: 2005,
                y: 15,
            },
        ],
    },
    {
        id: 'TypeScript',
        data: [
            {
                x: 2000,
                y: 19,
            },
            {
                x: 2001,
                y: 19,
            },
            {
                x: 2002,
                y: 20,
            },
            {
                x: 2003,
                y: 22,
            },
            {
                x: 2004,
                y: 10,
            },
            {
                x: 2005,
                y: 25,
            },
        ],
    },
    {
        id: 'Elm',
        data: [
            {
                x: 2000,
                y: 18,
            },
            {
                x: 2001,
                y: 21,
            },
            {
                x: 2002,
                y: 14,
            },
            {
                x: 2003,
                y: 26,
            },
            {
                x: 2004,
                y: 19,
            },
            {
                x: 2005,
                y: 18,
            },
        ],
    },
    {
        id: 'CoffeeScript',
        data: [
            {
                x: 2000,
                y: 21,
            },
            {
                x: 2001,
                y: 21,
            },
            {
                x: 2002,
                y: 11,
            },
            {
                x: 2003,
                y: 21,
            },
            {
                x: 2004,
                y: 18,
            },
            {
                x: 2005,
                y: 16,
            },
        ],
    },
];

const bumpScheme = getSchemeByIndex(1)
const areaBumpScheme = getSchemeByIndex(0)


export default createBoard({
    name: 'chart',
    Board: () => (
        <div className={classNames(styles.root)}>
            <div style={{color: 'gold', position: 'fixed'}}>{bumpScheme}, {areaBumpScheme}</div>
            <div className={styles.text}>
                <h1 className={styles.h1}>Bump Charts</h1>
                <p className={styles.p}>
                    <div>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                        roots in a piece of classical Latin literature
                    </div>
                    <div className={styles.p}>1. I wanna know if it ever cross your mind</div>
                    <div className={styles.p}>2. hjoll dijedbdij s ijnsd. n djn</div>
                </p>
            </div>
            <div className={styles['left-side']}>
                <ResponsiveBump
                    data={bumpData}
                    colors={{ scheme: bumpScheme }}
                    lineWidth={3}
                    activeLineWidth={6}
                    inactiveLineWidth={3}
                    inactiveOpacity={0.15}
                    pointSize={10}
                    activePointSize={16}
                    inactivePointSize={0}
                    pointColor={{ theme: 'background' }}
                    pointBorderWidth={3}
                    activePointBorderWidth={3}
                    pointBorderColor={{ from: 'serie.color' }}
                    axisTop={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: '',
                        legendPosition: 'middle',
                        legendOffset: -36,
                    }}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: '',
                        legendPosition: 'middle',
                        legendOffset: 32,
                    }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'ranking',
                        legendPosition: 'middle',
                        legendOffset: -40,
                    }}
                    axisRight={null}
                /></div>
            <div className={styles['right-side']}>
                <ResponsiveAreaBump
                    data={areaBumpData}
                    spacing={8}
                    colors={{ scheme: areaBumpScheme }}
                    blendMode="multiply"
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
                                id: 'CoffeeScript',
                            },
                            id: 'dots',
                        },
                        {
                            match: {
                                id: 'TypeScript',
                            },
                            id: 'lines',
                        },
                    ]}
                    startLabel="id"
                    endLabel="id"
                    axisTop={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: '',
                        legendPosition: 'middle',
                        legendOffset: -36,
                    }}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: '',
                        legendPosition: 'middle',
                        legendOffset: 32,
                    }}
                /></div>
        </div>
    ),
    isSnippet: true,
    environmentProps: {
        canvasHeight: 500,
    },
});


