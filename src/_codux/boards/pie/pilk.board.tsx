import classNames from 'classnames';
import { createBoard } from '@wixc3/react-board';
import styles from './map.module.scss';
import { ResponsiveChord } from '@nivo/chord';
import { ResponsiveRadialBar } from '@nivo/radial-bar';
import { ResponsiveStream } from '@nivo/stream';

const data4 = [
    {
        id: 'stylus',
        label: 'stylus',
        value: 72,
        color: 'hsl(4, 70%, 50%)',
    },
    {
        id: 'css',
        label: 'css',
        value: 32,
        color: 'hsl(326, 70%, 50%)',
    },
    {
        id: 'elixir',
        label: 'elixir',
        value: 60,
        color: 'hsl(145, 70%, 50%)',
    },
    {
        id: 'rust',
        label: 'rust',
        value: 55,
        color: 'hsl(214, 70%, 50%)',
    },
    {
        id: 'hack',
        label: 'hack',
        value: 47,
        color: 'hsl(89, 70%, 50%)',
    },
];

const data5 = [
    [71, 456, 895, 97, 290],
    [1873, 419, 83, 357, 896],
    [58, 298, 444, 200, 97],
    [317, 133, 330, 366, 97],
    [34, 59, 268, 104, 102],
];

const data6 = {
    name: 'nivo',
    color: 'hsl(325, 70%, 50%)',
    children: [
        {
            name: 'viz',
            color: 'hsl(285, 70%, 50%)',
            children: [
                {
                    name: 'stack',
                    color: 'hsl(67, 70%, 50%)',
                    children: [
                        {
                            name: 'cchart',
                            color: 'hsl(337, 70%, 50%)',
                            loc: 67130,
                        },
                        {
                            name: 'xAxis',
                            color: 'hsl(273, 70%, 50%)',
                            loc: 43010,
                        },
                        {
                            name: 'yAxis',
                            color: 'hsl(292, 70%, 50%)',
                            loc: 68020,
                        },
                        {
                            name: 'layers',
                            color: 'hsl(294, 70%, 50%)',
                            loc: 9650,
                        },
                    ],
                },
                {
                    name: 'ppie',
                    color: 'hsl(334, 70%, 50%)',
                    children: [
                        {
                            name: 'chart',
                            color: 'hsl(81, 70%, 50%)',
                            children: [
                                {
                                    name: 'pie',
                                    color: 'hsl(44, 70%, 50%)',
                                    children: [
                                        {
                                            name: 'outline',
                                            color: 'hsl(46, 70%, 50%)',
                                            loc: 19462,
                                        },
                                        {
                                            name: 'slices',
                                            color: 'hsl(108, 70%, 50%)',
                                            loc: 10153,
                                        },
                                        {
                                            name: 'bbox',
                                            color: 'hsl(165, 70%, 50%)',
                                            loc: 36876,
                                        },
                                    ],
                                },
                                {
                                    name: 'donut',
                                    color: 'hsl(178, 70%, 50%)',
                                    loc: 93917,
                                },
                                {
                                    name: 'gauge',
                                    color: 'hsl(360, 70%, 50%)',
                                    loc: 174011,
                                },
                            ],
                        },
                        {
                            name: 'legends',
                            color: 'hsl(39, 70%, 50%)',
                            loc: 13467,
                        },
                    ],
                },
            ],
        },
        {
            name: 'colors',
            color: 'hsl(68, 70%, 50%)',
            children: [
                {
                    name: 'rgb',
                    color: 'hsl(123, 70%, 50%)',
                    loc: 67400,
                },
                {
                    name: 'hsl',
                    color: 'hsl(70, 70%, 50%)',
                    loc: 133404,
                },
            ],
        },
        {
            name: 'utils',
            color: 'hsl(188, 70%, 50%)',
            children: [
                {
                    name: 'randomize',
                    color: 'hsl(193, 70%, 50%)',
                    loc: 178327,
                },
                {
                    name: 'resetClock',
                    color: 'hsl(18, 70%, 50%)',
                    loc: 112547,
                },
                {
                    name: 'noop',
                    color: 'hsl(202, 70%, 50%)',
                    loc: 144691,
                },
                {
                    name: 'tick',
                    color: 'hsl(168, 70%, 50%)',
                    loc: 53661,
                },
                {
                    name: 'forceGC',
                    color: 'hsl(117, 70%, 50%)',
                    loc: 102851,
                },
                {
                    name: 'stackTrace',
                    color: 'hsl(26, 70%, 50%)',
                    loc: 155732,
                },
                {
                    name: 'dbg',
                    color: 'hsl(120, 70%, 50%)',
                    loc: 191077,
                },
            ],
        },
        {
            name: 'generators',
            color: 'hsl(337, 70%, 50%)',
            children: [
                {
                    name: 'address',
                    color: 'hsl(176, 70%, 50%)',
                    loc: 98605,
                },
                {
                    name: 'city',
                    color: 'hsl(130, 70%, 50%)',
                    loc: 119452,
                },
                {
                    name: 'animal',
                    color: 'hsl(17, 70%, 50%)',
                    loc: 30440,
                },
                {
                    name: 'movie',
                    color: 'hsl(83, 70%, 50%)',
                    loc: 112322,
                },
                {
                    name: 'user',
                    color: 'hsl(196, 70%, 50%)',
                    loc: 123288,
                },
            ],
        },
        {
            name: 'set',
            color: 'hsl(320, 70%, 50%)',
            children: [
                {
                    name: 'clone',
                    color: 'hsl(109, 70%, 50%)',
                    loc: 37528,
                },
                {
                    name: 'intersect',
                    color: 'hsl(303, 70%, 50%)',
                    loc: 43949,
                },
                {
                    name: 'merge',
                    color: 'hsl(109, 70%, 50%)',
                    loc: 84087,
                },
                {
                    name: 'reverse',
                    color: 'hsl(115, 70%, 50%)',
                    loc: 121784,
                },
                {
                    name: 'toArray',
                    color: 'hsl(346, 70%, 50%)',
                    loc: 133547,
                },
                {
                    name: 'toObject',
                    color: 'hsl(133, 70%, 50%)',
                    loc: 193819,
                },
                {
                    name: 'fromCSV',
                    color: 'hsl(94, 70%, 50%)',
                    loc: 186101,
                },
                {
                    name: 'slice',
                    color: 'hsl(155, 70%, 50%)',
                    loc: 140186,
                },
                {
                    name: 'append',
                    color: 'hsl(18, 70%, 50%)',
                    loc: 192263,
                },
                {
                    name: 'prepend',
                    color: 'hsl(132, 70%, 50%)',
                    loc: 27416,
                },
                {
                    name: 'shuffle',
                    color: 'hsl(322, 70%, 50%)',
                    loc: 58522,
                },
                {
                    name: 'pick',
                    color: 'hsl(160, 70%, 50%)',
                    loc: 88124,
                },
                {
                    name: 'plouc',
                    color: 'hsl(110, 70%, 50%)',
                    loc: 164564,
                },
            ],
        },
        {
            name: 'text',
            color: 'hsl(281, 70%, 50%)',
            children: [
                {
                    name: 'trim',
                    color: 'hsl(104, 70%, 50%)',
                    loc: 102133,
                },
                {
                    name: 'slugify',
                    color: 'hsl(330, 70%, 50%)',
                    loc: 79694,
                },
                {
                    name: 'snakeCase',
                    color: 'hsl(270, 70%, 50%)',
                    loc: 78091,
                },
                {
                    name: 'camelCase',
                    color: 'hsl(349, 70%, 50%)',
                    loc: 55542,
                },
                {
                    name: 'repeat',
                    color: 'hsl(166, 70%, 50%)',
                    loc: 3957,
                },
                {
                    name: 'padLeft',
                    color: 'hsl(313, 70%, 50%)',
                    loc: 140936,
                },
                {
                    name: 'padRight',
                    color: 'hsl(62, 70%, 50%)',
                    loc: 128933,
                },
                {
                    name: 'sanitize',
                    color: 'hsl(231, 70%, 50%)',
                    loc: 44268,
                },
                {
                    name: 'ploucify',
                    color: 'hsl(103, 70%, 50%)',
                    loc: 183261,
                },
            ],
        },
        {
            name: 'misc',
            color: 'hsl(285, 70%, 50%)',
            children: [
                {
                    name: 'greetings',
                    color: 'hsl(166, 70%, 50%)',
                    children: [
                        {
                            name: 'hey',
                            color: 'hsl(27, 70%, 50%)',
                            loc: 52887,
                        },
                        {
                            name: 'HOWDY',
                            color: 'hsl(292, 70%, 50%)',
                            loc: 76845,
                        },
                        {
                            name: 'aloha',
                            color: 'hsl(230, 70%, 50%)',
                            loc: 22445,
                        },
                        {
                            name: 'AHOY',
                            color: 'hsl(231, 70%, 50%)',
                            loc: 61881,
                        },
                    ],
                },
                {
                    name: 'other',
                    color: 'hsl(178, 70%, 50%)',
                    loc: 133034,
                },
                {
                    name: 'path',
                    color: 'hsl(79, 70%, 50%)',
                    children: [
                        {
                            name: 'pathA',
                            color: 'hsl(221, 70%, 50%)',
                            loc: 123389,
                        },
                        {
                            name: 'pathB',
                            color: 'hsl(123, 70%, 50%)',
                            children: [
                                {
                                    name: 'pathB1',
                                    color: 'hsl(345, 70%, 50%)',
                                    loc: 193710,
                                },
                                {
                                    name: 'pathB2',
                                    color: 'hsl(27, 70%, 50%)',
                                    loc: 76856,
                                },
                                {
                                    name: 'pathB3',
                                    color: 'hsl(172, 70%, 50%)',
                                    loc: 185656,
                                },
                                {
                                    name: 'pathB4',
                                    color: 'hsl(308, 70%, 50%)',
                                    loc: 45433,
                                },
                            ],
                        },
                        {
                            name: 'pathC',
                            color: 'hsl(77, 70%, 50%)',
                            children: [
                                {
                                    name: 'pathC1',
                                    color: 'hsl(181, 70%, 50%)',
                                    loc: 123984,
                                },
                                {
                                    name: 'pathC2',
                                    color: 'hsl(202, 70%, 50%)',
                                    loc: 74946,
                                },
                                {
                                    name: 'pathC3',
                                    color: 'hsl(147, 70%, 50%)',
                                    loc: 19009,
                                },
                                {
                                    name: 'pathC4',
                                    color: 'hsl(356, 70%, 50%)',
                                    loc: 115974,
                                },
                                {
                                    name: 'pathC5',
                                    color: 'hsl(237, 70%, 50%)',
                                    loc: 6746,
                                },
                                {
                                    name: 'pathC6',
                                    color: 'hsl(105, 70%, 50%)',
                                    loc: 59951,
                                },
                                {
                                    name: 'pathC7',
                                    color: 'hsl(255, 70%, 50%)',
                                    loc: 100121,
                                },
                                {
                                    name: 'pathC8',
                                    color: 'hsl(205, 70%, 50%)',
                                    loc: 19447,
                                },
                                {
                                    name: 'pathC9',
                                    color: 'hsl(32, 70%, 50%)',
                                    loc: 141772,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};

const data7 = {
    nodes: [
        {
            id: 'Node 1',
            height: 1,
            size: 24,
            color: 'rgb(97, 205, 187)',
        },
        {
            id: 'Node 2',
            height: 1,
            size: 24,
            color: 'rgb(97, 205, 187)',
        },
        {
            id: 'Node 3',
            height: 1,
            size: 24,
            color: 'rgb(97, 205, 187)',
        },
        {
            id: 'Node 4',
            height: 1,
            size: 24,
            color: 'rgb(97, 205, 187)',
        },
        {
            id: 'Node 5',
            height: 1,
            size: 24,
            color: 'rgb(97, 205, 187)',
        },
        {
            id: 'Node 6',
            height: 1,
            size: 24,
            color: 'rgb(97, 205, 187)',
        },
        {
            id: 'Node 0',
            height: 2,
            size: 32,
            color: 'rgb(244, 117, 96)',
        },
        {
            id: 'Node 1.0',
            height: 0,
            size: 12,
            color: 'rgb(232, 193, 160)',
        },
        {
            id: 'Node 1.1',
            height: 0,
            size: 12,
            color: 'rgb(232, 193, 160)',
        },
        {
            id: 'Node 1.2',
            height: 0,
            size: 12,
            color: 'rgb(232, 193, 160)',
        },
        {
            id: 'Node 1.3',
            height: 0,
            size: 12,
            color: 'rgb(232, 193, 160)',
        },
        {
            id: 'Node 1.4',
            height: 0,
            size: 12,
            color: 'rgb(232, 193, 160)',
        },
        {
            id: 'Node 1.5',
            height: 0,
            size: 12,
            color: 'rgb(232, 193, 160)',
        },
        {
            id: 'Node 1.6',
            height: 0,
            size: 12,
            color: 'rgb(232, 193, 160)',
        },
        {
            id: 'Node 1.7',
            height: 0,
            size: 12,
            color: 'rgb(232, 193, 160)',
        },
        {
            id: 'Node 2.0',
            height: 0,
            size: 12,
            color: 'rgb(232, 193, 160)',
        },
        {
            id: 'Node 2.1',
            height: 0,
            size: 12,
            color: 'rgb(232, 193, 160)',
        },
        {
            id: 'Node 2.2',
            height: 0,
            size: 12,
            color: 'rgb(232, 193, 160)',
        },
        {
            id: 'Node 2.3',
            height: 0,
            size: 12,
            color: 'rgb(232, 193, 160)',
        },
        {
            id: 'Node 2.4',
            height: 0,
            size: 12,
            color: 'rgb(232, 193, 160)',
        },
        {
            id: 'Node 2.5',
            height: 0,
            size: 12,
            color: 'rgb(232, 193, 160)',
        },
        {
            id: 'Node 2.6',
            height: 0,
            size: 12,
            color: 'rgb(232, 193, 160)',
        },
        {
            id: 'Node 2.7',
            height: 0,
            size: 12,
            color: 'rgb(232, 193, 160)',
        },
        {
            id: 'Node 2.8',
            height: 0,
            size: 12,
            color: 'rgb(232, 193, 160)',
        },
        {
            id: 'Node 3.0',
            height: 0,
            size: 12,
            color: 'rgb(232, 193, 160)',
        },
        {
            id: 'Node 3.1',
            height: 0,
            size: 12,
            color: 'rgb(232, 193, 160)',
        },
        {
            id: 'Node 3.2',
            height: 0,
            size: 12,
            color: 'rgb(232, 193, 160)',
        },
        {
            id: 'Node 3.3',
            height: 0,
            size: 12,
            color: 'rgb(232, 193, 160)',
        },
        {
            id: 'Node 4.0',
            height: 0,
            size: 12,
            color: 'rgb(232, 193, 160)',
        },
        {
            id: 'Node 4.1',
            height: 0,
            size: 12,
            color: 'rgb(232, 193, 160)',
        },
        {
            id: 'Node 4.2',
            height: 0,
            size: 12,
            color: 'rgb(232, 193, 160)',
        },
        {
            id: 'Node 4.3',
            height: 0,
            size: 12,
            color: 'rgb(232, 193, 160)',
        },
        {
            id: 'Node 4.4',
            height: 0,
            size: 12,
            color: 'rgb(232, 193, 160)',
        },
        {
            id: 'Node 4.5',
            height: 0,
            size: 12,
            color: 'rgb(232, 193, 160)',
        },
        {
            id: 'Node 4.6',
            height: 0,
            size: 12,
            color: 'rgb(232, 193, 160)',
        },
        {
            id: 'Node 4.7',
            height: 0,
            size: 12,
            color: 'rgb(232, 193, 160)',
        },
        {
            id: 'Node 5.0',
            height: 0,
            size: 12,
            color: 'rgb(232, 193, 160)',
        },
        {
            id: 'Node 5.1',
            height: 0,
            size: 12,
            color: 'rgb(232, 193, 160)',
        },
        {
            id: 'Node 5.2',
            height: 0,
            size: 12,
            color: 'rgb(232, 193, 160)',
        },
        {
            id: 'Node 5.3',
            height: 0,
            size: 12,
            color: 'rgb(232, 193, 160)',
        },
        {
            id: 'Node 5.4',
            height: 0,
            size: 12,
            color: 'rgb(232, 193, 160)',
        },
        {
            id: 'Node 5.5',
            height: 0,
            size: 12,
            color: 'rgb(232, 193, 160)',
        },
        {
            id: 'Node 5.6',
            height: 0,
            size: 12,
            color: 'rgb(232, 193, 160)',
        },
        {
            id: 'Node 6.0',
            height: 0,
            size: 12,
            color: 'rgb(232, 193, 160)',
        },
        {
            id: 'Node 6.1',
            height: 0,
            size: 12,
            color: 'rgb(232, 193, 160)',
        },
        {
            id: 'Node 6.2',
            height: 0,
            size: 12,
            color: 'rgb(232, 193, 160)',
        },
        {
            id: 'Node 6.3',
            height: 0,
            size: 12,
            color: 'rgb(232, 193, 160)',
        },
        {
            id: 'Node 6.4',
            height: 0,
            size: 12,
            color: 'rgb(232, 193, 160)',
        },
        {
            id: 'Node 6.5',
            height: 0,
            size: 12,
            color: 'rgb(232, 193, 160)',
        },
        {
            id: 'Node 6.6',
            height: 0,
            size: 12,
            color: 'rgb(232, 193, 160)',
        },
        {
            id: 'Node 6.7',
            height: 0,
            size: 12,
            color: 'rgb(232, 193, 160)',
        },
        {
            id: 'Node 6.8',
            height: 0,
            size: 12,
            color: 'rgb(232, 193, 160)',
        },
    ],
    links: [
        {
            source: 'Node 0',
            target: 'Node 1',
            distance: 80,
        },
        {
            source: 'Node 1',
            target: 'Node 1.0',
            distance: 50,
        },
        {
            source: 'Node 1',
            target: 'Node 1.1',
            distance: 50,
        },
        {
            source: 'Node 1',
            target: 'Node 1.2',
            distance: 50,
        },
        {
            source: 'Node 1',
            target: 'Node 1.3',
            distance: 50,
        },
        {
            source: 'Node 1',
            target: 'Node 1.4',
            distance: 50,
        },
        {
            source: 'Node 1',
            target: 'Node 1.5',
            distance: 50,
        },
        {
            source: 'Node 1',
            target: 'Node 1.6',
            distance: 50,
        },
        {
            source: 'Node 1',
            target: 'Node 1.7',
            distance: 50,
        },
        {
            source: 'Node 0',
            target: 'Node 2',
            distance: 80,
        },
        {
            source: 'Node 2',
            target: 'Node 2.0',
            distance: 50,
        },
        {
            source: 'Node 2',
            target: 'Node 2.1',
            distance: 50,
        },
        {
            source: 'Node 2',
            target: 'Node 2.2',
            distance: 50,
        },
        {
            source: 'Node 2',
            target: 'Node 2.3',
            distance: 50,
        },
        {
            source: 'Node 2',
            target: 'Node 2.4',
            distance: 50,
        },
        {
            source: 'Node 2',
            target: 'Node 2.5',
            distance: 50,
        },
        {
            source: 'Node 2',
            target: 'Node 2.6',
            distance: 50,
        },
        {
            source: 'Node 2',
            target: 'Node 2.7',
            distance: 50,
        },
        {
            source: 'Node 2',
            target: 'Node 2.8',
            distance: 50,
        },
        {
            source: 'Node 0',
            target: 'Node 3',
            distance: 80,
        },
        {
            source: 'Node 3',
            target: 'Node 3.0',
            distance: 50,
        },
        {
            source: 'Node 3',
            target: 'Node 3.1',
            distance: 50,
        },
        {
            source: 'Node 3',
            target: 'Node 3.2',
            distance: 50,
        },
        {
            source: 'Node 3',
            target: 'Node 3.3',
            distance: 50,
        },
        {
            source: 'Node 0',
            target: 'Node 4',
            distance: 80,
        },
        {
            source: 'Node 4',
            target: 'Node 4.0',
            distance: 50,
        },
        {
            source: 'Node 4',
            target: 'Node 4.1',
            distance: 50,
        },
        {
            source: 'Node 4',
            target: 'Node 4.2',
            distance: 50,
        },
        {
            source: 'Node 4',
            target: 'Node 4.3',
            distance: 50,
        },
        {
            source: 'Node 4',
            target: 'Node 4.4',
            distance: 50,
        },
        {
            source: 'Node 4',
            target: 'Node 4.5',
            distance: 50,
        },
        {
            source: 'Node 4',
            target: 'Node 4.6',
            distance: 50,
        },
        {
            source: 'Node 4',
            target: 'Node 4.7',
            distance: 50,
        },
        {
            source: 'Node 0',
            target: 'Node 5',
            distance: 80,
        },
        {
            source: 'Node 5',
            target: 'Node 5.0',
            distance: 50,
        },
        {
            source: 'Node 5',
            target: 'Node 5.1',
            distance: 50,
        },
        {
            source: 'Node 5',
            target: 'Node 5.2',
            distance: 50,
        },
        {
            source: 'Node 5',
            target: 'Node 5.3',
            distance: 50,
        },
        {
            source: 'Node 5',
            target: 'Node 5.4',
            distance: 50,
        },
        {
            source: 'Node 5',
            target: 'Node 5.5',
            distance: 50,
        },
        {
            source: 'Node 5',
            target: 'Node 5.6',
            distance: 50,
        },
        {
            source: 'Node 0',
            target: 'Node 6',
            distance: 80,
        },
        {
            source: 'Node 6',
            target: 'Node 6.0',
            distance: 50,
        },
        {
            source: 'Node 6',
            target: 'Node 6.1',
            distance: 50,
        },
        {
            source: 'Node 6',
            target: 'Node 6.2',
            distance: 50,
        },
        {
            source: 'Node 6',
            target: 'Node 6.3',
            distance: 50,
        },
        {
            source: 'Node 6',
            target: 'Node 6.4',
            distance: 50,
        },
        {
            source: 'Node 6',
            target: 'Node 6.5',
            distance: 50,
        },
        {
            source: 'Node 6',
            target: 'Node 6.6',
            distance: 50,
        },
        {
            source: 'Node 6',
            target: 'Node 6.7',
            distance: 50,
        },
        {
            source: 'Node 6',
            target: 'Node 6.8',
            distance: 50,
        },
    ],
};

const data8 = [
    {
        id: 'Supermarket',
        data: [
            {
                x: 'Vegetables',
                y: 71,
            },
            {
                x: 'Fruits',
                y: 51,
            },
            {
                x: 'Meat',
                y: 217,
            },
            {
                x: 'Fish',
                y: 111,
            },
        ],
    },
    {
        id: 'Combini',
        data: [
            {
                x: 'Vegetables',
                y: 29,
            },
            {
                x: 'Fruits',
                y: 25,
            },
            {
                x: 'Meat',
                y: 247,
            },
            {
                x: 'Fish',
                y: 61,
            },
        ],
    },
    {
        id: 'Online',
        data: [
            {
                x: 'Vegetables',
                y: 25,
            },
            {
                x: 'Fruits',
                y: 187,
            },
            {
                x: 'Meat',
                y: 267,
            },
            {
                x: 'Fish',
                y: 198,
            },
        ],
    },
];

const data9 = [
    {
        Raoul: 41,
        Josiane: 75,
        Marcel: 85,
        René: 149,
        Paul: 85,
        Jacques: 36,
    },
    {
        Raoul: 95,
        Josiane: 72,
        Marcel: 111,
        René: 197,
        Paul: 131,
        Jacques: 165,
    },
    {
        Raoul: 40,
        Josiane: 94,
        Marcel: 162,
        René: 12,
        Paul: 160,
        Jacques: 140,
    },
    {
        Raoul: 58,
        Josiane: 15,
        Marcel: 94,
        René: 128,
        Paul: 147,
        Jacques: 86,
    },
    {
        Raoul: 182,
        Josiane: 156,
        Marcel: 180,
        René: 99,
        Paul: 160,
        Jacques: 25,
    },
    {
        Raoul: 35,
        Josiane: 16,
        Marcel: 74,
        René: 49,
        Paul: 168,
        Jacques: 200,
    },
    {
        Raoul: 135,
        Josiane: 30,
        Marcel: 101,
        René: 139,
        Paul: 76,
        Jacques: 128,
    },
    {
        Raoul: 120,
        Josiane: 178,
        Marcel: 146,
        René: 166,
        Paul: 46,
        Jacques: 193,
    },
    {
        Raoul: 140,
        Josiane: 56,
        Marcel: 81,
        René: 143,
        Paul: 113,
        Jacques: 111,
    },
];
export default createBoard({
    name: 'pilk',
    Board: () => (
        <div className={classNames(styles.root)}>
            <div className={styles.text}>
                <h1 className={styles.h1}>Chord &amp; Pie</h1>
                <p className={styles.p}>Chord and Pie jkfnkd dkwnfkwn dekwnfw wnf 4if</p>
            </div>
            <div className={styles.vertical}>
                <div className={styles['top']}>
                    <div
                        style={{ overflow: 'hidden', height: '200%' }}
                        className={styles.graphWrapper}
                    >
                        <ResponsiveChord
                            data={data5}
                            keys={['John', 'Raoul', 'Jane', 'Marcel', 'Ibrahim']}
                            valueFormat=".2f"
                            padAngle={0.02}
                            innerRadiusRatio={0.96}
                            innerRadiusOffset={0.02}
                            inactiveArcOpacity={0.25}
                            arcBorderColor={{
                                from: 'color',
                                modifiers: [['darker', 0.6]],
                            }}
                            activeRibbonOpacity={6}
                            inactiveRibbonOpacity={0.25}
                            ribbonBorderColor={{
                                from: 'color',
                                modifiers: [['darker', 0.6]],
                            }}
                            labelRotation={-90}
                            labelTextColor={{
                                from: 'color',
                                modifiers: [['darker', 1]],
                            }}
                            colors={{ scheme: 'paired' }}
                            motionConfig="stiff"
                            legends={[
                                {
                                    anchor: 'bottom',
                                    direction: 'row',
                                    justify: false,
                                    translateX: 0,
                                    translateY: 70,
                                    itemWidth: 80,
                                    itemHeight: 14,
                                    itemsSpacing: 0,
                                    itemTextColor: '#999',
                                    itemDirection: 'left-to-right',
                                    symbolSize: 12,
                                    symbolShape: 'circle',
                                    effects: [
                                        {
                                            on: 'hover',
                                            style: {
                                                itemTextColor: '#000',
                                            },
                                        },
                                    ],
                                },
                            ]}
                        />
                    </div>
                </div>
                <div style={{ width: '800px', height: '400px' }}>
                    <ResponsiveStream
                        data={data9}
                        keys={['Raoul', 'Josiane', 'Marcel', 'René', 'Paul', 'Jacques']}
                        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                        axisTop={null}
                        axisRight={null}
                        axisBottom={{
                            orient: 'bottom',
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: '',
                            legendOffset: 36,
                        }}
                        axisLeft={{
                            orient: 'left',
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: '',
                            legendOffset: -40,
                        }}
                        enableGridX={true}
                        enableGridY={false}
                        offsetType="silhouette"
                        colors={{ scheme: 'nivo' }}
                        fillOpacity={0.85}
                        borderColor={{ theme: 'background' }}
                        defs={[
                            {
                                id: 'dots',
                                type: 'patternDots',
                                background: 'inherit',
                                color: '#2c998f',
                                size: 4,
                                padding: 2,
                                stagger: true,
                            },
                            {
                                id: 'squares',
                                type: 'patternSquares',
                                background: 'inherit',
                                color: '#e4c912',
                                size: 6,
                                padding: 2,
                                stagger: true,
                            },
                        ]}
                        fill={[
                            {
                                match: {
                                    id: 'Paul',
                                },
                                id: 'dots',
                            },
                            {
                                match: {
                                    id: 'Marcel',
                                },
                                id: 'squares',
                            },
                        ]}
                        dotSize={8}
                        dotColor={{ from: 'color' }}
                        dotBorderWidth={2}
                        dotBorderColor={{
                            from: 'color',
                            modifiers: [['darker', 0.7]],
                        }}
                        legends={[
                            {
                                anchor: 'bottom-right',
                                direction: 'column',
                                translateX: 100,
                                itemWidth: 80,
                                itemHeight: 20,
                                itemTextColor: '#999999',
                                symbolSize: 12,
                                symbolShape: 'circle',
                                effects: [
                                    {
                                        on: 'hover',
                                        style: {
                                            itemTextColor: '#000000',
                                        },
                                    },
                                ],
                            },
                        ]}
                    />
                </div>
                <div className={styles.bottom}>
                    <div
                        style={{ height: '200%', zIndex: '1', width: '100%' }}
                        className={styles.graphWrapper}
                    >
                        <ResponsiveRadialBar
                            data={data8}
                            valueFormat=">-.2f"
                            padding={0.4}
                            cornerRadius={2}
                            margin={{ top: 40, right: 120, bottom: 40, left: 40 }}
                            radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
                            circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
                            legends={[
                                {
                                    anchor: 'right',
                                    direction: 'column',
                                    justify: false,
                                    translateX: 80,
                                    translateY: 0,
                                    itemsSpacing: 6,
                                    itemDirection: 'left-to-right',
                                    itemWidth: 100,
                                    itemHeight: 18,
                                    itemTextColor: '#999',
                                    symbolSize: 18,
                                    symbolShape: 'square',
                                    effects: [
                                        {
                                            on: 'hover',
                                            style: {
                                                itemTextColor: '#000',
                                            },
                                        },
                                    ],
                                },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
    ),
    isSnippet: true,
    environmentProps: {
        canvasHeight: 500,
    },
});

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
