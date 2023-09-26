import classNames from 'classnames';
import { createBoard } from '@wixc3/react-board';
import styles from './chart.module.scss';
import { ResponsiveScatterPlot } from '@nivo/scatterplot';
import { ResponsiveSwarmPlot } from '@nivo/swarmplot';

const data4 = {
    nodes: [
        {
            id: 'John',
            nodeColor: 'hsl(204, 70%, 50%)',
        },
        {
            id: 'Raoul',
            nodeColor: 'hsl(19, 70%, 50%)',
        },
        {
            id: 'Jane',
            nodeColor: 'hsl(264, 70%, 50%)',
        },
        {
            id: 'Marcel',
            nodeColor: 'hsl(306, 70%, 50%)',
        },
        {
            id: 'Ibrahim',
            nodeColor: 'hsl(155, 70%, 50%)',
        },
        {
            id: 'Junko',
            nodeColor: 'hsl(345, 70%, 50%)',
        },
    ],
    links: [
        {
            source: 'Ibrahim',
            target: 'Raoul',
            value: 121,
        },
        {
            source: 'Ibrahim',
            target: 'Marcel',
            value: 21,
        },
        {
            source: 'Ibrahim',
            target: 'Jane',
            value: 198,
        },
        {
            source: 'Marcel',
            target: 'John',
            value: 130,
        },
        {
            source: 'Marcel',
            target: 'Jane',
            value: 79,
        },
        {
            source: 'Marcel',
            target: 'Raoul',
            value: 124,
        },
        {
            source: 'Marcel',
            target: 'Junko',
            value: 50,
        },
        {
            source: 'Raoul',
            target: 'John',
            value: 6,
        },
        {
            source: 'Junko',
            target: 'Raoul',
            value: 67,
        },
        {
            source: 'Junko',
            target: 'Jane',
            value: 69,
        },
        {
            source: 'Jane',
            target: 'Raoul',
            value: 100,
        },
    ],
};

const data5 = [
    {
        id: 'group A',
        data: [
            {
                x: 76,
                y: 6,
            },
            {
                x: 94,
                y: 91,
            },
            {
                x: 41,
                y: 54,
            },
            {
                x: 72,
                y: 66,
            },
            {
                x: 57,
                y: 29,
            },
            {
                x: 88,
                y: 56,
            },
            {
                x: 66,
                y: 117,
            },
            {
                x: 34,
                y: 100,
            },
            {
                x: 42,
                y: 45,
            },
            {
                x: 70,
                y: 75,
            },
            {
                x: 35,
                y: 12,
            },
            {
                x: 0,
                y: 112,
            },
            {
                x: 71,
                y: 13,
            },
            {
                x: 96,
                y: 45,
            },
            {
                x: 87,
                y: 57,
            },
            {
                x: 94,
                y: 9,
            },
            {
                x: 84,
                y: 47,
            },
            {
                x: 25,
                y: 0,
            },
            {
                x: 72,
                y: 96,
            },
            {
                x: 17,
                y: 59,
            },
            {
                x: 10,
                y: 6,
            },
            {
                x: 61,
                y: 101,
            },
            {
                x: 49,
                y: 105,
            },
            {
                x: 6,
                y: 18,
            },
            {
                x: 88,
                y: 14,
            },
            {
                x: 96,
                y: 106,
            },
            {
                x: 75,
                y: 50,
            },
            {
                x: 52,
                y: 99,
            },
            {
                x: 91,
                y: 91,
            },
            {
                x: 10,
                y: 7,
            },
            {
                x: 59,
                y: 56,
            },
            {
                x: 55,
                y: 85,
            },
            {
                x: 80,
                y: 55,
            },
            {
                x: 62,
                y: 120,
            },
            {
                x: 92,
                y: 75,
            },
            {
                x: 0,
                y: 54,
            },
            {
                x: 65,
                y: 84,
            },
            {
                x: 92,
                y: 74,
            },
            {
                x: 59,
                y: 78,
            },
            {
                x: 81,
                y: 43,
            },
            {
                x: 15,
                y: 94,
            },
            {
                x: 52,
                y: 8,
            },
            {
                x: 31,
                y: 111,
            },
            {
                x: 3,
                y: 46,
            },
            {
                x: 52,
                y: 105,
            },
            {
                x: 62,
                y: 9,
            },
            {
                x: 68,
                y: 10,
            },
            {
                x: 80,
                y: 74,
            },
            {
                x: 79,
                y: 81,
            },
            {
                x: 23,
                y: 69,
            },
        ],
    },
    {
        id: 'group B',
        data: [
            {
                x: 58,
                y: 81,
            },
            {
                x: 51,
                y: 114,
            },
            {
                x: 1,
                y: 113,
            },
            {
                x: 28,
                y: 119,
            },
            {
                x: 82,
                y: 18,
            },
            {
                x: 18,
                y: 98,
            },
            {
                x: 85,
                y: 0,
            },
            {
                x: 6,
                y: 112,
            },
            {
                x: 45,
                y: 67,
            },
            {
                x: 60,
                y: 15,
            },
            {
                x: 23,
                y: 47,
            },
            {
                x: 9,
                y: 31,
            },
            {
                x: 10,
                y: 3,
            },
            {
                x: 75,
                y: 58,
            },
            {
                x: 21,
                y: 42,
            },
            {
                x: 11,
                y: 72,
            },
            {
                x: 28,
                y: 118,
            },
            {
                x: 32,
                y: 74,
            },
            {
                x: 40,
                y: 71,
            },
            {
                x: 67,
                y: 84,
            },
            {
                x: 44,
                y: 72,
            },
            {
                x: 60,
                y: 88,
            },
            {
                x: 98,
                y: 106,
            },
            {
                x: 55,
                y: 89,
            },
            {
                x: 55,
                y: 37,
            },
            {
                x: 13,
                y: 109,
            },
            {
                x: 65,
                y: 85,
            },
            {
                x: 45,
                y: 7,
            },
            {
                x: 40,
                y: 86,
            },
            {
                x: 12,
                y: 96,
            },
            {
                x: 20,
                y: 103,
            },
            {
                x: 84,
                y: 1,
            },
            {
                x: 77,
                y: 109,
            },
            {
                x: 17,
                y: 63,
            },
            {
                x: 67,
                y: 24,
            },
            {
                x: 70,
                y: 33,
            },
            {
                x: 41,
                y: 61,
            },
            {
                x: 17,
                y: 95,
            },
            {
                x: 84,
                y: 11,
            },
            {
                x: 35,
                y: 96,
            },
            {
                x: 77,
                y: 53,
            },
            {
                x: 18,
                y: 119,
            },
            {
                x: 9,
                y: 80,
            },
            {
                x: 93,
                y: 83,
            },
            {
                x: 73,
                y: 70,
            },
            {
                x: 89,
                y: 8,
            },
            {
                x: 26,
                y: 108,
            },
            {
                x: 39,
                y: 67,
            },
            {
                x: 32,
                y: 36,
            },
            {
                x: 83,
                y: 112,
            },
        ],
    },
    {
        id: 'group C',
        data: [
            {
                x: 62,
                y: 48,
            },
            {
                x: 4,
                y: 24,
            },
            {
                x: 90,
                y: 40,
            },
            {
                x: 61,
                y: 115,
            },
            {
                x: 100,
                y: 104,
            },
            {
                x: 70,
                y: 92,
            },
            {
                x: 49,
                y: 53,
            },
            {
                x: 83,
                y: 102,
            },
            {
                x: 73,
                y: 30,
            },
            {
                x: 89,
                y: 58,
            },
            {
                x: 79,
                y: 16,
            },
            {
                x: 90,
                y: 46,
            },
            {
                x: 48,
                y: 48,
            },
            {
                x: 56,
                y: 64,
            },
            {
                x: 34,
                y: 55,
            },
            {
                x: 33,
                y: 100,
            },
            {
                x: 64,
                y: 7,
            },
            {
                x: 51,
                y: 10,
            },
            {
                x: 65,
                y: 105,
            },
            {
                x: 98,
                y: 68,
            },
            {
                x: 58,
                y: 21,
            },
            {
                x: 53,
                y: 59,
            },
            {
                x: 15,
                y: 52,
            },
            {
                x: 22,
                y: 2,
            },
            {
                x: 91,
                y: 47,
            },
            {
                x: 24,
                y: 26,
            },
            {
                x: 90,
                y: 52,
            },
            {
                x: 22,
                y: 108,
            },
            {
                x: 95,
                y: 95,
            },
            {
                x: 31,
                y: 110,
            },
            {
                x: 7,
                y: 112,
            },
            {
                x: 79,
                y: 32,
            },
            {
                x: 24,
                y: 36,
            },
            {
                x: 56,
                y: 7,
            },
            {
                x: 73,
                y: 64,
            },
            {
                x: 32,
                y: 114,
            },
            {
                x: 1,
                y: 80,
            },
            {
                x: 46,
                y: 22,
            },
            {
                x: 78,
                y: 117,
            },
            {
                x: 42,
                y: 32,
            },
            {
                x: 59,
                y: 105,
            },
            {
                x: 24,
                y: 28,
            },
            {
                x: 65,
                y: 77,
            },
            {
                x: 18,
                y: 111,
            },
            {
                x: 25,
                y: 87,
            },
            {
                x: 9,
                y: 20,
            },
            {
                x: 74,
                y: 18,
            },
            {
                x: 39,
                y: 116,
            },
            {
                x: 67,
                y: 79,
            },
            {
                x: 49,
                y: 106,
            },
        ],
    },
    {
        id: 'group D',
        data: [
            {
                x: 23,
                y: 104,
            },
            {
                x: 60,
                y: 80,
            },
            {
                x: 89,
                y: 41,
            },
            {
                x: 93,
                y: 37,
            },
            {
                x: 43,
                y: 72,
            },
            {
                x: 12,
                y: 56,
            },
            {
                x: 66,
                y: 117,
            },
            {
                x: 96,
                y: 62,
            },
            {
                x: 62,
                y: 119,
            },
            {
                x: 74,
                y: 56,
            },
            {
                x: 40,
                y: 23,
            },
            {
                x: 15,
                y: 6,
            },
            {
                x: 75,
                y: 0,
            },
            {
                x: 86,
                y: 83,
            },
            {
                x: 86,
                y: 109,
            },
            {
                x: 89,
                y: 5,
            },
            {
                x: 80,
                y: 17,
            },
            {
                x: 26,
                y: 12,
            },
            {
                x: 5,
                y: 94,
            },
            {
                x: 86,
                y: 16,
            },
            {
                x: 55,
                y: 15,
            },
            {
                x: 28,
                y: 34,
            },
            {
                x: 36,
                y: 81,
            },
            {
                x: 22,
                y: 73,
            },
            {
                x: 46,
                y: 20,
            },
            {
                x: 37,
                y: 3,
            },
            {
                x: 58,
                y: 76,
            },
            {
                x: 31,
                y: 19,
            },
            {
                x: 95,
                y: 104,
            },
            {
                x: 95,
                y: 85,
            },
            {
                x: 49,
                y: 83,
            },
            {
                x: 14,
                y: 100,
            },
            {
                x: 92,
                y: 34,
            },
            {
                x: 89,
                y: 72,
            },
            {
                x: 88,
                y: 15,
            },
            {
                x: 65,
                y: 48,
            },
            {
                x: 89,
                y: 105,
            },
            {
                x: 20,
                y: 7,
            },
            {
                x: 47,
                y: 18,
            },
            {
                x: 70,
                y: 111,
            },
            {
                x: 75,
                y: 27,
            },
            {
                x: 56,
                y: 83,
            },
            {
                x: 45,
                y: 82,
            },
            {
                x: 71,
                y: 23,
            },
            {
                x: 46,
                y: 23,
            },
            {
                x: 8,
                y: 50,
            },
            {
                x: 42,
                y: 5,
            },
            {
                x: 13,
                y: 25,
            },
            {
                x: 71,
                y: 28,
            },
            {
                x: 60,
                y: 93,
            },
        ],
    },
    {
        id: 'group E',
        data: [
            {
                x: 58,
                y: 68,
            },
            {
                x: 59,
                y: 9,
            },
            {
                x: 25,
                y: 9,
            },
            {
                x: 79,
                y: 64,
            },
            {
                x: 52,
                y: 105,
            },
            {
                x: 49,
                y: 43,
            },
            {
                x: 51,
                y: 63,
            },
            {
                x: 66,
                y: 102,
            },
            {
                x: 33,
                y: 94,
            },
            {
                x: 98,
                y: 116,
            },
            {
                x: 82,
                y: 77,
            },
            {
                x: 39,
                y: 40,
            },
            {
                x: 80,
                y: 71,
            },
            {
                x: 70,
                y: 0,
            },
            {
                x: 98,
                y: 36,
            },
            {
                x: 26,
                y: 79,
            },
            {
                x: 76,
                y: 116,
            },
            {
                x: 98,
                y: 85,
            },
            {
                x: 81,
                y: 58,
            },
            {
                x: 69,
                y: 48,
            },
            {
                x: 8,
                y: 4,
            },
            {
                x: 10,
                y: 72,
            },
            {
                x: 47,
                y: 88,
            },
            {
                x: 83,
                y: 33,
            },
            {
                x: 44,
                y: 115,
            },
            {
                x: 35,
                y: 18,
            },
            {
                x: 62,
                y: 101,
            },
            {
                x: 25,
                y: 97,
            },
            {
                x: 92,
                y: 69,
            },
            {
                x: 84,
                y: 37,
            },
            {
                x: 55,
                y: 106,
            },
            {
                x: 95,
                y: 39,
            },
            {
                x: 48,
                y: 81,
            },
            {
                x: 98,
                y: 106,
            },
            {
                x: 23,
                y: 77,
            },
            {
                x: 35,
                y: 9,
            },
            {
                x: 5,
                y: 22,
            },
            {
                x: 95,
                y: 33,
            },
            {
                x: 97,
                y: 88,
            },
            {
                x: 20,
                y: 84,
            },
            {
                x: 0,
                y: 0,
            },
            {
                x: 34,
                y: 115,
            },
            {
                x: 30,
                y: 86,
            },
            {
                x: 30,
                y: 91,
            },
            {
                x: 93,
                y: 74,
            },
            {
                x: 19,
                y: 22,
            },
            {
                x: 49,
                y: 74,
            },
            {
                x: 84,
                y: 57,
            },
            {
                x: 26,
                y: 36,
            },
            {
                x: 40,
                y: 82,
            },
        ],
    },
];

const data6 = [
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

const data7 = [
    {
        id: '0.0',
        group: 'group A',
        price: 153,
        volume: 19,
    },
    {
        id: '0.1',
        group: 'group A',
        price: 84,
        volume: 17,
    },
    {
        id: '0.2',
        group: 'group A',
        price: 309,
        volume: 5,
    },
    {
        id: '0.3',
        group: 'group A',
        price: 357,
        volume: 5,
    },
    {
        id: '0.4',
        group: 'group A',
        price: 452,
        volume: 13,
    },
    {
        id: '0.5',
        group: 'group A',
        price: 221,
        volume: 5,
    },
    {
        id: '0.6',
        group: 'group A',
        price: 237,
        volume: 5,
    },
    {
        id: '0.7',
        group: 'group A',
        price: 184,
        volume: 6,
    },
    {
        id: '0.8',
        group: 'group A',
        price: 154,
        volume: 14,
    },
    {
        id: '0.9',
        group: 'group A',
        price: 388,
        volume: 7,
    },
    {
        id: '0.10',
        group: 'group A',
        price: 115,
        volume: 17,
    },
    {
        id: '0.11',
        group: 'group A',
        price: 459,
        volume: 12,
    },
    {
        id: '0.12',
        group: 'group A',
        price: 32,
        volume: 8,
    },
    {
        id: '0.13',
        group: 'group A',
        price: 384,
        volume: 10,
    },
    {
        id: '0.14',
        group: 'group A',
        price: 154,
        volume: 5,
    },
    {
        id: '0.15',
        group: 'group A',
        price: 92,
        volume: 7,
    },
    {
        id: '0.16',
        group: 'group A',
        price: 296,
        volume: 9,
    },
    {
        id: '0.17',
        group: 'group A',
        price: 166,
        volume: 4,
    },
    {
        id: '0.18',
        group: 'group A',
        price: 265,
        volume: 6,
    },
    {
        id: '0.19',
        group: 'group A',
        price: 97,
        volume: 10,
    },
    {
        id: '0.20',
        group: 'group A',
        price: 72,
        volume: 14,
    },
    {
        id: '0.21',
        group: 'group A',
        price: 293,
        volume: 11,
    },
    {
        id: '0.22',
        group: 'group A',
        price: 250,
        volume: 9,
    },
    {
        id: '0.23',
        group: 'group A',
        price: 442,
        volume: 19,
    },
    {
        id: '0.24',
        group: 'group A',
        price: 375,
        volume: 6,
    },
    {
        id: '0.25',
        group: 'group A',
        price: 234,
        volume: 13,
    },
    {
        id: '0.26',
        group: 'group A',
        price: 339,
        volume: 4,
    },
    {
        id: '0.27',
        group: 'group A',
        price: 432,
        volume: 12,
    },
    {
        id: '0.28',
        group: 'group A',
        price: 179,
        volume: 7,
    },
    {
        id: '0.29',
        group: 'group A',
        price: 49,
        volume: 4,
    },
    {
        id: '0.30',
        group: 'group A',
        price: 495,
        volume: 18,
    },
    {
        id: '0.31',
        group: 'group A',
        price: 399,
        volume: 12,
    },
    {
        id: '0.32',
        group: 'group A',
        price: 101,
        volume: 18,
    },
    {
        id: '0.33',
        group: 'group A',
        price: 244,
        volume: 4,
    },
    {
        id: '0.34',
        group: 'group A',
        price: 8,
        volume: 8,
    },
    {
        id: '0.35',
        group: 'group A',
        price: 340,
        volume: 17,
    },
    {
        id: '0.36',
        group: 'group A',
        price: 414,
        volume: 18,
    },
    {
        id: '0.37',
        group: 'group A',
        price: 303,
        volume: 12,
    },
    {
        id: '0.38',
        group: 'group A',
        price: 281,
        volume: 7,
    },
    {
        id: '0.39',
        group: 'group A',
        price: 30,
        volume: 19,
    },
    {
        id: '0.40',
        group: 'group A',
        price: 114,
        volume: 20,
    },
    {
        id: '0.41',
        group: 'group A',
        price: 440,
        volume: 12,
    },
    {
        id: '0.42',
        group: 'group A',
        price: 293,
        volume: 20,
    },
    {
        id: '0.43',
        group: 'group A',
        price: 387,
        volume: 5,
    },
    {
        id: '0.44',
        group: 'group A',
        price: 205,
        volume: 19,
    },
    {
        id: '0.45',
        group: 'group A',
        price: 369,
        volume: 4,
    },
    {
        id: '0.46',
        group: 'group A',
        price: 93,
        volume: 16,
    },
    {
        id: '0.47',
        group: 'group A',
        price: 112,
        volume: 11,
    },
    {
        id: '0.48',
        group: 'group A',
        price: 261,
        volume: 14,
    },
    {
        id: '0.49',
        group: 'group A',
        price: 274,
        volume: 4,
    },
    {
        id: '0.50',
        group: 'group A',
        price: 84,
        volume: 10,
    },
    {
        id: '0.51',
        group: 'group A',
        price: 432,
        volume: 4,
    },
    {
        id: '0.52',
        group: 'group A',
        price: 317,
        volume: 9,
    },
    {
        id: '0.53',
        group: 'group A',
        price: 287,
        volume: 8,
    },
    {
        id: '0.54',
        group: 'group A',
        price: 340,
        volume: 10,
    },
    {
        id: '0.55',
        group: 'group A',
        price: 3,
        volume: 7,
    },
    {
        id: '0.56',
        group: 'group A',
        price: 451,
        volume: 7,
    },
    {
        id: '0.57',
        group: 'group A',
        price: 115,
        volume: 20,
    },
    {
        id: '0.58',
        group: 'group A',
        price: 59,
        volume: 18,
    },
    {
        id: '0.59',
        group: 'group A',
        price: 400,
        volume: 8,
    },
    {
        id: '0.60',
        group: 'group A',
        price: 262,
        volume: 19,
    },
    {
        id: '0.61',
        group: 'group A',
        price: 481,
        volume: 6,
    },
    {
        id: '0.62',
        group: 'group A',
        price: 182,
        volume: 4,
    },
    {
        id: '0.63',
        group: 'group A',
        price: 79,
        volume: 19,
    },
    {
        id: '0.64',
        group: 'group A',
        price: 318,
        volume: 7,
    },
    {
        id: '0.65',
        group: 'group A',
        price: 364,
        volume: 5,
    },
    {
        id: '0.66',
        group: 'group A',
        price: 174,
        volume: 11,
    },
    {
        id: '1.0',
        group: 'group B',
        price: 448,
        volume: 7,
    },
    {
        id: '1.1',
        group: 'group B',
        price: 28,
        volume: 13,
    },
    {
        id: '1.2',
        group: 'group B',
        price: 129,
        volume: 12,
    },
    {
        id: '1.3',
        group: 'group B',
        price: 246,
        volume: 20,
    },
    {
        id: '1.4',
        group: 'group B',
        price: 137,
        volume: 4,
    },
    {
        id: '1.5',
        group: 'group B',
        price: 170,
        volume: 7,
    },
    {
        id: '1.6',
        group: 'group B',
        price: 19,
        volume: 14,
    },
    {
        id: '1.7',
        group: 'group B',
        price: 432,
        volume: 20,
    },
    {
        id: '1.8',
        group: 'group B',
        price: 304,
        volume: 10,
    },
    {
        id: '1.9',
        group: 'group B',
        price: 155,
        volume: 9,
    },
    {
        id: '1.10',
        group: 'group B',
        price: 269,
        volume: 9,
    },
    {
        id: '1.11',
        group: 'group B',
        price: 477,
        volume: 18,
    },
    {
        id: '1.12',
        group: 'group B',
        price: 367,
        volume: 11,
    },
    {
        id: '1.13',
        group: 'group B',
        price: 66,
        volume: 11,
    },
    {
        id: '1.14',
        group: 'group B',
        price: 184,
        volume: 8,
    },
    {
        id: '1.15',
        group: 'group B',
        price: 17,
        volume: 7,
    },
    {
        id: '1.16',
        group: 'group B',
        price: 237,
        volume: 8,
    },
    {
        id: '1.17',
        group: 'group B',
        price: 397,
        volume: 12,
    },
    {
        id: '1.18',
        group: 'group B',
        price: 122,
        volume: 15,
    },
    {
        id: '1.19',
        group: 'group B',
        price: 435,
        volume: 20,
    },
    {
        id: '1.20',
        group: 'group B',
        price: 171,
        volume: 9,
    },
    {
        id: '1.21',
        group: 'group B',
        price: 356,
        volume: 13,
    },
    {
        id: '1.22',
        group: 'group B',
        price: 16,
        volume: 10,
    },
    {
        id: '1.23',
        group: 'group B',
        price: 94,
        volume: 16,
    },
    {
        id: '1.24',
        group: 'group B',
        price: 495,
        volume: 6,
    },
    {
        id: '1.25',
        group: 'group B',
        price: 286,
        volume: 6,
    },
    {
        id: '1.26',
        group: 'group B',
        price: 122,
        volume: 8,
    },
    {
        id: '1.27',
        group: 'group B',
        price: 153,
        volume: 4,
    },
    {
        id: '1.28',
        group: 'group B',
        price: 94,
        volume: 10,
    },
    {
        id: '1.29',
        group: 'group B',
        price: 178,
        volume: 10,
    },
    {
        id: '1.30',
        group: 'group B',
        price: 426,
        volume: 7,
    },
    {
        id: '1.31',
        group: 'group B',
        price: 236,
        volume: 9,
    },
    {
        id: '1.32',
        group: 'group B',
        price: 29,
        volume: 17,
    },
    {
        id: '1.33',
        group: 'group B',
        price: 21,
        volume: 10,
    },
    {
        id: '1.34',
        group: 'group B',
        price: 98,
        volume: 5,
    },
    {
        id: '1.35',
        group: 'group B',
        price: 265,
        volume: 14,
    },
    {
        id: '1.36',
        group: 'group B',
        price: 164,
        volume: 11,
    },
    {
        id: '1.37',
        group: 'group B',
        price: 347,
        volume: 14,
    },
    {
        id: '1.38',
        group: 'group B',
        price: 48,
        volume: 6,
    },
    {
        id: '1.39',
        group: 'group B',
        price: 151,
        volume: 14,
    },
    {
        id: '1.40',
        group: 'group B',
        price: 7,
        volume: 18,
    },
    {
        id: '1.41',
        group: 'group B',
        price: 304,
        volume: 17,
    },
    {
        id: '1.42',
        group: 'group B',
        price: 224,
        volume: 6,
    },
    {
        id: '1.43',
        group: 'group B',
        price: 21,
        volume: 10,
    },
    {
        id: '1.44',
        group: 'group B',
        price: 55,
        volume: 14,
    },
    {
        id: '1.45',
        group: 'group B',
        price: 190,
        volume: 16,
    },
    {
        id: '1.46',
        group: 'group B',
        price: 271,
        volume: 11,
    },
    {
        id: '1.47',
        group: 'group B',
        price: 461,
        volume: 13,
    },
    {
        id: '1.48',
        group: 'group B',
        price: 121,
        volume: 20,
    },
    {
        id: '1.49',
        group: 'group B',
        price: 71,
        volume: 19,
    },
    {
        id: '1.50',
        group: 'group B',
        price: 475,
        volume: 13,
    },
    {
        id: '1.51',
        group: 'group B',
        price: 380,
        volume: 15,
    },
    {
        id: '1.52',
        group: 'group B',
        price: 227,
        volume: 14,
    },
    {
        id: '1.53',
        group: 'group B',
        price: 62,
        volume: 5,
    },
    {
        id: '1.54',
        group: 'group B',
        price: 474,
        volume: 9,
    },
    {
        id: '1.55',
        group: 'group B',
        price: 76,
        volume: 18,
    },
    {
        id: '1.56',
        group: 'group B',
        price: 378,
        volume: 14,
    },
    {
        id: '1.57',
        group: 'group B',
        price: 250,
        volume: 12,
    },
    {
        id: '1.58',
        group: 'group B',
        price: 476,
        volume: 19,
    },
    {
        id: '1.59',
        group: 'group B',
        price: 34,
        volume: 15,
    },
    {
        id: '1.60',
        group: 'group B',
        price: 6,
        volume: 13,
    },
    {
        id: '1.61',
        group: 'group B',
        price: 410,
        volume: 12,
    },
    {
        id: '1.62',
        group: 'group B',
        price: 371,
        volume: 4,
    },
    {
        id: '1.63',
        group: 'group B',
        price: 493,
        volume: 17,
    },
    {
        id: '1.64',
        group: 'group B',
        price: 188,
        volume: 7,
    },
    {
        id: '1.65',
        group: 'group B',
        price: 80,
        volume: 8,
    },
    {
        id: '1.66',
        group: 'group B',
        price: 421,
        volume: 11,
    },
    {
        id: '1.67',
        group: 'group B',
        price: 476,
        volume: 5,
    },
    {
        id: '1.68',
        group: 'group B',
        price: 170,
        volume: 18,
    },
    {
        id: '1.69',
        group: 'group B',
        price: 454,
        volume: 20,
    },
    {
        id: '1.70',
        group: 'group B',
        price: 402,
        volume: 18,
    },
    {
        id: '2.0',
        group: 'group C',
        price: 428,
        volume: 20,
    },
    {
        id: '2.1',
        group: 'group C',
        price: 147,
        volume: 14,
    },
    {
        id: '2.2',
        group: 'group C',
        price: 410,
        volume: 8,
    },
    {
        id: '2.3',
        group: 'group C',
        price: 157,
        volume: 9,
    },
    {
        id: '2.4',
        group: 'group C',
        price: 493,
        volume: 16,
    },
    {
        id: '2.5',
        group: 'group C',
        price: 70,
        volume: 13,
    },
    {
        id: '2.6',
        group: 'group C',
        price: 291,
        volume: 8,
    },
    {
        id: '2.7',
        group: 'group C',
        price: 488,
        volume: 15,
    },
    {
        id: '2.8',
        group: 'group C',
        price: 465,
        volume: 20,
    },
    {
        id: '2.9',
        group: 'group C',
        price: 226,
        volume: 4,
    },
    {
        id: '2.10',
        group: 'group C',
        price: 426,
        volume: 5,
    },
    {
        id: '2.11',
        group: 'group C',
        price: 323,
        volume: 11,
    },
    {
        id: '2.12',
        group: 'group C',
        price: 345,
        volume: 10,
    },
    {
        id: '2.13',
        group: 'group C',
        price: 123,
        volume: 14,
    },
    {
        id: '2.14',
        group: 'group C',
        price: 243,
        volume: 4,
    },
    {
        id: '2.15',
        group: 'group C',
        price: 335,
        volume: 13,
    },
    {
        id: '2.16',
        group: 'group C',
        price: 385,
        volume: 6,
    },
    {
        id: '2.17',
        group: 'group C',
        price: 357,
        volume: 17,
    },
    {
        id: '2.18',
        group: 'group C',
        price: 81,
        volume: 6,
    },
    {
        id: '2.19',
        group: 'group C',
        price: 165,
        volume: 4,
    },
    {
        id: '2.20',
        group: 'group C',
        price: 400,
        volume: 15,
    },
    {
        id: '2.21',
        group: 'group C',
        price: 397,
        volume: 14,
    },
    {
        id: '2.22',
        group: 'group C',
        price: 266,
        volume: 20,
    },
    {
        id: '2.23',
        group: 'group C',
        price: 28,
        volume: 19,
    },
    {
        id: '2.24',
        group: 'group C',
        price: 34,
        volume: 6,
    },
    {
        id: '2.25',
        group: 'group C',
        price: 14,
        volume: 6,
    },
    {
        id: '2.26',
        group: 'group C',
        price: 315,
        volume: 9,
    },
    {
        id: '2.27',
        group: 'group C',
        price: 22,
        volume: 18,
    },
    {
        id: '2.28',
        group: 'group C',
        price: 469,
        volume: 13,
    },
    {
        id: '2.29',
        group: 'group C',
        price: 473,
        volume: 9,
    },
    {
        id: '2.30',
        group: 'group C',
        price: 104,
        volume: 6,
    },
    {
        id: '2.31',
        group: 'group C',
        price: 200,
        volume: 9,
    },
    {
        id: '2.32',
        group: 'group C',
        price: 153,
        volume: 19,
    },
    {
        id: '2.33',
        group: 'group C',
        price: 325,
        volume: 12,
    },
    {
        id: '2.34',
        group: 'group C',
        price: 300,
        volume: 4,
    },
    {
        id: '2.35',
        group: 'group C',
        price: 363,
        volume: 13,
    },
    {
        id: '2.36',
        group: 'group C',
        price: 487,
        volume: 11,
    },
    {
        id: '2.37',
        group: 'group C',
        price: 390,
        volume: 13,
    },
    {
        id: '2.38',
        group: 'group C',
        price: 434,
        volume: 10,
    },
    {
        id: '2.39',
        group: 'group C',
        price: 423,
        volume: 7,
    },
    {
        id: '2.40',
        group: 'group C',
        price: 40,
        volume: 12,
    },
    {
        id: '2.41',
        group: 'group C',
        price: 214,
        volume: 10,
    },
    {
        id: '2.42',
        group: 'group C',
        price: 103,
        volume: 5,
    },
    {
        id: '2.43',
        group: 'group C',
        price: 100,
        volume: 10,
    },
    {
        id: '2.44',
        group: 'group C',
        price: 122,
        volume: 15,
    },
    {
        id: '2.45',
        group: 'group C',
        price: 207,
        volume: 20,
    },
    {
        id: '2.46',
        group: 'group C',
        price: 255,
        volume: 14,
    },
    {
        id: '2.47',
        group: 'group C',
        price: 450,
        volume: 7,
    },
    {
        id: '2.48',
        group: 'group C',
        price: 81,
        volume: 9,
    },
    {
        id: '2.49',
        group: 'group C',
        price: 353,
        volume: 12,
    },
    {
        id: '2.50',
        group: 'group C',
        price: 385,
        volume: 15,
    },
    {
        id: '2.51',
        group: 'group C',
        price: 45,
        volume: 19,
    },
    {
        id: '2.52',
        group: 'group C',
        price: 255,
        volume: 10,
    },
    {
        id: '2.53',
        group: 'group C',
        price: 486,
        volume: 20,
    },
    {
        id: '2.54',
        group: 'group C',
        price: 102,
        volume: 9,
    },
    {
        id: '2.55',
        group: 'group C',
        price: 236,
        volume: 19,
    },
    {
        id: '2.56',
        group: 'group C',
        price: 20,
        volume: 18,
    },
    {
        id: '2.57',
        group: 'group C',
        price: 286,
        volume: 13,
    },
    {
        id: '2.58',
        group: 'group C',
        price: 437,
        volume: 10,
    },
    {
        id: '2.59',
        group: 'group C',
        price: 105,
        volume: 5,
    },
    {
        id: '2.60',
        group: 'group C',
        price: 314,
        volume: 4,
    },
    {
        id: '2.61',
        group: 'group C',
        price: 165,
        volume: 9,
    },
    {
        id: '2.62',
        group: 'group C',
        price: 243,
        volume: 16,
    },
    {
        id: '2.63',
        group: 'group C',
        price: 89,
        volume: 9,
    },
    {
        id: '2.64',
        group: 'group C',
        price: 308,
        volume: 8,
    },
    {
        id: '2.65',
        group: 'group C',
        price: 5,
        volume: 6,
    },
    {
        id: '2.66',
        group: 'group C',
        price: 473,
        volume: 18,
    },
    {
        id: '2.67',
        group: 'group C',
        price: 215,
        volume: 8,
    },
];
export default createBoard({
    name: 'chart 22',
    Board: () => (
        <div className={classNames(styles.root)}>
            <div className={styles.text}>
                <h1 className={styles.h1}>Swarm</h1>
                <p className={styles.p}>
                    <div>Scatter plot showing multi-dimensional data using circles of different sizes and colors.</div>
                    <div className={styles.p}>1. Shows distribution and density of data points within each group or category.</div>
                    <div className={styles.p}>2. Avoid overlapping of data points by using a force simulation that creates a gap between them.</div></p>
            </div>
            <div className={styles['left-side']}>
                <div style={{ height: '100%' }}>
                    <ResponsiveSwarmPlot
                        data={data7}
                        groups={['group A', 'group B', 'group C']}
                        identity="id"
                        value="price"
                        valueFormat="$.2f"
                        valueScale={{ type: 'linear', min: 0, max: 500, reverse: false }}
                        size={{
                            key: 'volume',
                            values: [4, 22],
                            sizes: [6, 22],
                        }}
                        forceStrength={4}
                        simulationIterations={100}
                        borderColor={{
                            from: 'color',
                            modifiers: [
                                ['darker', 0.6],
                                ['opacity', 0.5],
                            ],
                        }}
                        axisTop={{
                            orient: 'top',
                            tickSize: 10,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'group if vertical, price if horizontal',
                            legendPosition: 'middle',
                            legendOffset: -46,
                        }}
                        axisRight={{
                            orient: 'right',
                            tickSize: 10,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'price if vertical, group if horizontal',
                            legendPosition: 'middle',
                            legendOffset: 76,
                        }}
                        axisBottom={{
                            orient: 'bottom',
                            tickSize: 10,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'group if vertical, price if horizontal',
                            legendPosition: 'middle',
                            legendOffset: 46,
                        }}
                        axisLeft={{
                            orient: 'left',
                            tickSize: 10,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'price if vertical, group if horizontal',
                            legendPosition: 'middle',
                            legendOffset: -76,
                        }}
                    />
                </div>
            </div>
            <div className={styles['right-side']}>
                <div style={{ height: '100%' }}>
                    <ResponsiveScatterPlot
                        data={data5}
                        xScale={{ type: 'linear', min: 0, max: 'auto' }}
                        xFormat=">-.2f"
                        yScale={{ type: 'linear', min: 0, max: 'auto' }}
                        yFormat=">-.2f"
                        blendMode="multiply"
                        axisTop={null}
                        axisRight={null}
                        axisBottom={{
                            orient: 'bottom',
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'weight',
                            legendPosition: 'middle',
                            legendOffset: 46,
                        }}
                        axisLeft={{
                            orient: 'left',
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'size',
                            legendPosition: 'middle',
                            legendOffset: -60,
                        }}
                        legends={[
                            {
                                anchor: 'bottom-right',
                                direction: 'column',
                                justify: false,
                                translateX: 130,
                                translateY: 0,
                                itemWidth: 100,
                                itemHeight: 15,
                                itemsSpacing: 5,
                                itemDirection: 'left-to-right',
                                symbolSize: 12,
                                symbolShape: 'circle',
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
                    />
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
