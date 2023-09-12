import classNames from 'classnames';
import styles from './first-comp.module.scss';
import { ResponsiveBump, ResponsiveAreaBump } from '@nivo/bump';

export interface FirstCompProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

const data = [
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
                y: 17,
            },
            {
                x: 2003,
                y: 10,
            },
            {
                x: 2004,
                y: 10,
            },
            {
                x: 2005,
                y: 30,
            },
        ],
    },
    {
        id: 'ReasonML',
        data: [
            {
                x: 2000,
                y: 30,
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
                y: 12,
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
                y: 14,
            },
            {
                x: 2004,
                y: 26,
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

const data1 = [
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

const data2 = [
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

const data3 = [
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
export const FirstComp = ({ className }: FirstCompProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.text}>
                <h1 className={styles.h1}>Bump Charts</h1>
                <p className={styles.p}>Bump chart jkfnkd dkwnfkwn dekwnfw wnf 4if </p>
            </div>
            <div className={styles['left-side']}>
                <div style={{ height: '100%' }}>
                    <ResponsiveBump
                        data={data2}
                        colors={{ scheme: 'blues' }}
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
                    />
                </div>
            </div>
            <div className={styles['right-side']}>
                <div style={{ height: '100%' }}>
                    <ResponsiveAreaBump
                        data={data3}
                        spacing={8}
                        colors={{ scheme: 'purple_orange' }}
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
                    />
                </div>
            </div>
        </div>
    );
};
