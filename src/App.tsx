import styles from './App.module.scss';

import { ResponsiveLine } from '@nivo/line';
import { ResponsiveBoxPlot } from '@nivo/boxplot';
import { getSchemeByIndex } from './_codux/helpers';

const lineData = [
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

const boxPlotData = [
    {
        group: 'Alpha',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 5.614338406303095,
    },
    {
        group: 'Alpha',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 4.736233387897129,
    },
    {
        group: 'Alpha',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 3.7423545963294043,
    },
    {
        group: 'Alpha',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 5.891691035455121,
    },
    {
        group: 'Alpha',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 5.319966069862023,
    },
    {
        group: 'Alpha',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 5.278008768051535,
    },
    {
        group: 'Alpha',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 3.8744087909871867,
    },
    {
        group: 'Alpha',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 4.911273554389038,
    },
    {
        group: 'Alpha',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 4.376297581596941,
    },
    {
        group: 'Alpha',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 4.273237766726605,
    },
    {
        group: 'Alpha',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 4.138517926736263,
    },
    {
        group: 'Alpha',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 5.170645952926186,
    },
    {
        group: 'Alpha',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 5.986945502558752,
    },
    {
        group: 'Alpha',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 4.537406524156852,
    },
    {
        group: 'Alpha',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 4.242202564440438,
    },
    {
        group: 'Alpha',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 6.188921091373581,
    },
    {
        group: 'Alpha',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 4.5995448944176776,
    },
    {
        group: 'Alpha',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 3.5093157500229166,
    },
    {
        group: 'Alpha',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 4.098772068262798,
    },
    {
        group: 'Alpha',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 4.393147062176009,
    },
    {
        group: 'Alpha',
        subgroup: 'B',
        mu: 6,
        sd: 1,
        n: 20,
        value: 7.112539122453197,
    },
    {
        group: 'Alpha',
        subgroup: 'B',
        mu: 6,
        sd: 1,
        n: 20,
        value: 5.379735397090453,
    },
    {
        group: 'Alpha',
        subgroup: 'B',
        mu: 6,
        sd: 1,
        n: 20,
        value: 5.819153100503294,
    },
    {
        group: 'Alpha',
        subgroup: 'B',
        mu: 6,
        sd: 1,
        n: 20,
        value: 7.852470975317308,
    },
    {
        group: 'Alpha',
        subgroup: 'B',
        mu: 6,
        sd: 1,
        n: 20,
        value: 6.115176435406991,
    },
    {
        group: 'Alpha',
        subgroup: 'B',
        mu: 6,
        sd: 1,
        n: 20,
        value: 5.297668063190013,
    },
    {
        group: 'Alpha',
        subgroup: 'B',
        mu: 6,
        sd: 1,
        n: 20,
        value: 5.060261098435165,
    },
    {
        group: 'Alpha',
        subgroup: 'B',
        mu: 6,
        sd: 1,
        n: 20,
        value: 7.136386673991777,
    },
    {
        group: 'Alpha',
        subgroup: 'B',
        mu: 6,
        sd: 1,
        n: 20,
        value: 5.5043840184572455,
    },
    {
        group: 'Alpha',
        subgroup: 'B',
        mu: 6,
        sd: 1,
        n: 20,
        value: 5.446202948652817,
    },
    {
        group: 'Alpha',
        subgroup: 'B',
        mu: 6,
        sd: 1,
        n: 20,
        value: 5.075272492935588,
    },
    {
        group: 'Alpha',
        subgroup: 'B',
        mu: 6,
        sd: 1,
        n: 20,
        value: 6.130967346193147,
    },
    {
        group: 'Alpha',
        subgroup: 'B',
        mu: 6,
        sd: 1,
        n: 20,
        value: 5.369243538475859,
    },
    {
        group: 'Alpha',
        subgroup: 'B',
        mu: 6,
        sd: 1,
        n: 20,
        value: 5.240836693972365,
    },
    {
        group: 'Alpha',
        subgroup: 'B',
        mu: 6,
        sd: 1,
        n: 20,
        value: 5.209303525736,
    },
    {
        group: 'Alpha',
        subgroup: 'B',
        mu: 6,
        sd: 1,
        n: 20,
        value: 6.590910244518362,
    },
    {
        group: 'Alpha',
        subgroup: 'B',
        mu: 6,
        sd: 1,
        n: 20,
        value: 7.430370459352392,
    },
    {
        group: 'Alpha',
        subgroup: 'B',
        mu: 6,
        sd: 1,
        n: 20,
        value: 6.844586936984526,
    },
    {
        group: 'Alpha',
        subgroup: 'B',
        mu: 6,
        sd: 1,
        n: 20,
        value: 6.877889411867192,
    },
    {
        group: 'Alpha',
        subgroup: 'B',
        mu: 6,
        sd: 1,
        n: 20,
        value: 7.478749421137039,
    },
    {
        group: 'Beta',
        subgroup: 'A',
        mu: 8,
        sd: 1.4,
        n: 20,
        value: 8.587055967917292,
    },
    {
        group: 'Beta',
        subgroup: 'A',
        mu: 8,
        sd: 1.4,
        n: 20,
        value: 6.835609319442314,
    },
    {
        group: 'Beta',
        subgroup: 'A',
        mu: 8,
        sd: 1.4,
        n: 20,
        value: 9.839244322602706,
    },
    {
        group: 'Beta',
        subgroup: 'A',
        mu: 8,
        sd: 1.4,
        n: 20,
        value: 9.168701747920762,
    },
    {
        group: 'Beta',
        subgroup: 'A',
        mu: 8,
        sd: 1.4,
        n: 20,
        value: 9.596063967163065,
    },
    {
        group: 'Beta',
        subgroup: 'A',
        mu: 8,
        sd: 1.4,
        n: 20,
        value: 8.457174124028688,
    },
    {
        group: 'Beta',
        subgroup: 'A',
        mu: 8,
        sd: 1.4,
        n: 20,
        value: 7.407753824048159,
    },
    {
        group: 'Beta',
        subgroup: 'A',
        mu: 8,
        sd: 1.4,
        n: 20,
        value: 5.335759265021958,
    },
    {
        group: 'Beta',
        subgroup: 'A',
        mu: 8,
        sd: 1.4,
        n: 20,
        value: 11.56298314070174,
    },
    {
        group: 'Beta',
        subgroup: 'A',
        mu: 8,
        sd: 1.4,
        n: 20,
        value: 8.551884935130813,
    },
    {
        group: 'Beta',
        subgroup: 'A',
        mu: 8,
        sd: 1.4,
        n: 20,
        value: 6.935655488624722,
    },
    {
        group: 'Beta',
        subgroup: 'A',
        mu: 8,
        sd: 1.4,
        n: 20,
        value: 7.821575176620457,
    },
    {
        group: 'Beta',
        subgroup: 'A',
        mu: 8,
        sd: 1.4,
        n: 20,
        value: 8.249276128812822,
    },
    {
        group: 'Beta',
        subgroup: 'A',
        mu: 8,
        sd: 1.4,
        n: 20,
        value: 8.997782278636233,
    },
    {
        group: 'Beta',
        subgroup: 'A',
        mu: 8,
        sd: 1.4,
        n: 20,
        value: 7.128180089797018,
    },
    {
        group: 'Beta',
        subgroup: 'A',
        mu: 8,
        sd: 1.4,
        n: 20,
        value: 5.304852820207868,
    },
    {
        group: 'Beta',
        subgroup: 'A',
        mu: 8,
        sd: 1.4,
        n: 20,
        value: 7.890489071971229,
    },
    {
        group: 'Beta',
        subgroup: 'A',
        mu: 8,
        sd: 1.4,
        n: 20,
        value: 10.283378796074713,
    },
    {
        group: 'Beta',
        subgroup: 'A',
        mu: 8,
        sd: 1.4,
        n: 20,
        value: 8.0844975845989,
    },
    {
        group: 'Beta',
        subgroup: 'A',
        mu: 8,
        sd: 1.4,
        n: 20,
        value: 9.061658137421771,
    },
    {
        group: 'Beta',
        subgroup: 'B',
        mu: 7.5,
        sd: 1.4,
        n: 20,
        value: 8.334176456537232,
    },
    {
        group: 'Beta',
        subgroup: 'B',
        mu: 7.5,
        sd: 1.4,
        n: 20,
        value: 5.099008595924733,
    },
    {
        group: 'Beta',
        subgroup: 'B',
        mu: 7.5,
        sd: 1.4,
        n: 20,
        value: 8.688086284195983,
    },
    {
        group: 'Beta',
        subgroup: 'B',
        mu: 7.5,
        sd: 1.4,
        n: 20,
        value: 6.133467033258955,
    },
    {
        group: 'Beta',
        subgroup: 'B',
        mu: 7.5,
        sd: 1.4,
        n: 20,
        value: 6.612313940868444,
    },
    {
        group: 'Beta',
        subgroup: 'B',
        mu: 7.5,
        sd: 1.4,
        n: 20,
        value: 5.115734950796627,
    },
    {
        group: 'Beta',
        subgroup: 'B',
        mu: 7.5,
        sd: 1.4,
        n: 20,
        value: 5.810876565182594,
    },
    {
        group: 'Beta',
        subgroup: 'B',
        mu: 7.5,
        sd: 1.4,
        n: 20,
        value: 5.795349339201725,
    },
    {
        group: 'Beta',
        subgroup: 'B',
        mu: 7.5,
        sd: 1.4,
        n: 20,
        value: 6.350941850806695,
    },
    {
        group: 'Beta',
        subgroup: 'B',
        mu: 7.5,
        sd: 1.4,
        n: 20,
        value: 7.472809461551464,
    },
    {
        group: 'Beta',
        subgroup: 'B',
        mu: 7.5,
        sd: 1.4,
        n: 20,
        value: 8.05729173475825,
    },
    {
        group: 'Beta',
        subgroup: 'B',
        mu: 7.5,
        sd: 1.4,
        n: 20,
        value: 7.921776115668587,
    },
    {
        group: 'Beta',
        subgroup: 'B',
        mu: 7.5,
        sd: 1.4,
        n: 20,
        value: 7.684114227150423,
    },
    {
        group: 'Beta',
        subgroup: 'B',
        mu: 7.5,
        sd: 1.4,
        n: 20,
        value: 8.523167343512545,
    },
    {
        group: 'Beta',
        subgroup: 'B',
        mu: 7.5,
        sd: 1.4,
        n: 20,
        value: 7.459092277946911,
    },
    {
        group: 'Beta',
        subgroup: 'B',
        mu: 7.5,
        sd: 1.4,
        n: 20,
        value: 6.711719720816748,
    },
    {
        group: 'Beta',
        subgroup: 'B',
        mu: 7.5,
        sd: 1.4,
        n: 20,
        value: 6.6275952943186045,
    },
    {
        group: 'Beta',
        subgroup: 'B',
        mu: 7.5,
        sd: 1.4,
        n: 20,
        value: 8.532676243053526,
    },
    {
        group: 'Beta',
        subgroup: 'B',
        mu: 7.5,
        sd: 1.4,
        n: 20,
        value: 7.408409054297643,
    },
    {
        group: 'Beta',
        subgroup: 'B',
        mu: 7.5,
        sd: 1.4,
        n: 20,
        value: 6.69996144471981,
    },
    {
        group: 'Gamma',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 4.240406716673469,
    },
    {
        group: 'Gamma',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 4.687038229137922,
    },
    {
        group: 'Gamma',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 6.094541571023077,
    },
    {
        group: 'Gamma',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 5.085728287096497,
    },
    {
        group: 'Gamma',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 3.4194944343499207,
    },
    {
        group: 'Gamma',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 5.299471077603518,
    },
    {
        group: 'Gamma',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 5.007157492422413,
    },
    {
        group: 'Gamma',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 5.051626876769033,
    },
    {
        group: 'Gamma',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 4.271158424527963,
    },
    {
        group: 'Gamma',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 4.729987088825468,
    },
    {
        group: 'Gamma',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 5.533992890033471,
    },
    {
        group: 'Gamma',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 5.054515755049228,
    },
    {
        group: 'Gamma',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 5.109752460650542,
    },
    {
        group: 'Gamma',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 4.713987697910055,
    },
    {
        group: 'Gamma',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 5.483928222079094,
    },
    {
        group: 'Gamma',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 4.740462974661366,
    },
    {
        group: 'Gamma',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 4.7517031584386595,
    },
    {
        group: 'Gamma',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 5.361333955456352,
    },
    {
        group: 'Gamma',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 5.711015301618874,
    },
    {
        group: 'Gamma',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 5.052084738323849,
    },
    {
        group: 'Gamma',
        subgroup: 'B',
        mu: 7.2,
        sd: 1.8,
        n: 20,
        value: 5.911795395870058,
    },
    {
        group: 'Gamma',
        subgroup: 'B',
        mu: 7.2,
        sd: 1.8,
        n: 20,
        value: 8.347341473272307,
    },
    {
        group: 'Gamma',
        subgroup: 'B',
        mu: 7.2,
        sd: 1.8,
        n: 20,
        value: 6.702583155503203,
    },
    {
        group: 'Gamma',
        subgroup: 'B',
        mu: 7.2,
        sd: 1.8,
        n: 20,
        value: 5.819817193929369,
    },
    {
        group: 'Gamma',
        subgroup: 'B',
        mu: 7.2,
        sd: 1.8,
        n: 20,
        value: 8.602816388038217,
    },
    {
        group: 'Gamma',
        subgroup: 'B',
        mu: 7.2,
        sd: 1.8,
        n: 20,
        value: 9.44689260418969,
    },
    {
        group: 'Gamma',
        subgroup: 'B',
        mu: 7.2,
        sd: 1.8,
        n: 20,
        value: 5.876559299069244,
    },
    {
        group: 'Gamma',
        subgroup: 'B',
        mu: 7.2,
        sd: 1.8,
        n: 20,
        value: 7.955766468915428,
    },
    {
        group: 'Gamma',
        subgroup: 'B',
        mu: 7.2,
        sd: 1.8,
        n: 20,
        value: 9.126038857436292,
    },
    {
        group: 'Gamma',
        subgroup: 'B',
        mu: 7.2,
        sd: 1.8,
        n: 20,
        value: 6.131521606446526,
    },
    {
        group: 'Gamma',
        subgroup: 'B',
        mu: 7.2,
        sd: 1.8,
        n: 20,
        value: 6.21980802519753,
    },
    {
        group: 'Gamma',
        subgroup: 'B',
        mu: 7.2,
        sd: 1.8,
        n: 20,
        value: 6.972820363130249,
    },
    {
        group: 'Gamma',
        subgroup: 'B',
        mu: 7.2,
        sd: 1.8,
        n: 20,
        value: 6.344438674194448,
    },
    {
        group: 'Gamma',
        subgroup: 'B',
        mu: 7.2,
        sd: 1.8,
        n: 20,
        value: 5.611115007283243,
    },
    {
        group: 'Gamma',
        subgroup: 'B',
        mu: 7.2,
        sd: 1.8,
        n: 20,
        value: 6.8801637195253385,
    },
    {
        group: 'Gamma',
        subgroup: 'B',
        mu: 7.2,
        sd: 1.8,
        n: 20,
        value: 7.725580965978252,
    },
    {
        group: 'Gamma',
        subgroup: 'B',
        mu: 7.2,
        sd: 1.8,
        n: 20,
        value: 7.726831989042542,
    },
    {
        group: 'Gamma',
        subgroup: 'B',
        mu: 7.2,
        sd: 1.8,
        n: 20,
        value: 8.714126278059634,
    },
    {
        group: 'Gamma',
        subgroup: 'B',
        mu: 7.2,
        sd: 1.8,
        n: 20,
        value: 7.251935080197312,
    },
    {
        group: 'Gamma',
        subgroup: 'B',
        mu: 7.2,
        sd: 1.8,
        n: 20,
        value: 6.60455150754509,
    },
    {
        group: 'Delta',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 5.402278200081626,
    },
    {
        group: 'Delta',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 4.7185866500941005,
    },
    {
        group: 'Delta',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 4.8616272193982875,
    },
    {
        group: 'Delta',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 5.484174161207365,
    },
    {
        group: 'Delta',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 5.383184203722673,
    },
    {
        group: 'Delta',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 5.73628074672707,
    },
    {
        group: 'Delta',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 3.92669893086389,
    },
    {
        group: 'Delta',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 4.514577010587292,
    },
    {
        group: 'Delta',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 4.301178076443155,
    },
    {
        group: 'Delta',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 3.7630094546287864,
    },
    {
        group: 'Delta',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 4.777695468179661,
    },
    {
        group: 'Delta',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 5.638811414538527,
    },
    {
        group: 'Delta',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 6.415738471103835,
    },
    {
        group: 'Delta',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 3.984482632936757,
    },
    {
        group: 'Delta',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 5.9176036006567,
    },
    {
        group: 'Delta',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 3.1316054761801766,
    },
    {
        group: 'Delta',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 6.060435068129824,
    },
    {
        group: 'Delta',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 4.914735182273578,
    },
    {
        group: 'Delta',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 4.421163592368492,
    },
    {
        group: 'Delta',
        subgroup: 'A',
        mu: 5,
        sd: 1,
        n: 20,
        value: 3.6440564810495104,
    },
    {
        group: 'Delta',
        subgroup: 'B',
        mu: 6,
        sd: 1,
        n: 20,
        value: 5.376079122297527,
    },
    {
        group: 'Delta',
        subgroup: 'B',
        mu: 6,
        sd: 1,
        n: 20,
        value: 6.114224073939055,
    },
    {
        group: 'Delta',
        subgroup: 'B',
        mu: 6,
        sd: 1,
        n: 20,
        value: 4.95381723637294,
    },
    {
        group: 'Delta',
        subgroup: 'B',
        mu: 6,
        sd: 1,
        n: 20,
        value: 5.198039881408118,
    },
    {
        group: 'Delta',
        subgroup: 'B',
        mu: 6,
        sd: 1,
        n: 20,
        value: 5.518863634850543,
    },
    {
        group: 'Delta',
        subgroup: 'B',
        mu: 6,
        sd: 1,
        n: 20,
        value: 5.5700382025772885,
    },
    {
        group: 'Delta',
        subgroup: 'B',
        mu: 6,
        sd: 1,
        n: 20,
        value: 6.916340969944071,
    },
    {
        group: 'Delta',
        subgroup: 'B',
        mu: 6,
        sd: 1,
        n: 20,
        value: 5.559595058819243,
    },
    {
        group: 'Delta',
        subgroup: 'B',
        mu: 6,
        sd: 1,
        n: 20,
        value: 5.898259540769424,
    },
    {
        group: 'Delta',
        subgroup: 'B',
        mu: 6,
        sd: 1,
        n: 20,
        value: 6.642496114735451,
    },
    {
        group: 'Delta',
        subgroup: 'B',
        mu: 6,
        sd: 1,
        n: 20,
        value: 5.2984294547185495,
    },
    {
        group: 'Delta',
        subgroup: 'B',
        mu: 6,
        sd: 1,
        n: 20,
        value: 4.82287958768682,
    },
    {
        group: 'Delta',
        subgroup: 'B',
        mu: 6,
        sd: 1,
        n: 20,
        value: 6.740654105637455,
    },
    {
        group: 'Delta',
        subgroup: 'B',
        mu: 6,
        sd: 1,
        n: 20,
        value: 5.834288291953216,
    },
    {
        group: 'Delta',
        subgroup: 'B',
        mu: 6,
        sd: 1,
        n: 20,
        value: 6.07034011108159,
    },
    {
        group: 'Delta',
        subgroup: 'B',
        mu: 6,
        sd: 1,
        n: 20,
        value: 5.478688993130144,
    },
    {
        group: 'Delta',
        subgroup: 'B',
        mu: 6,
        sd: 1,
        n: 20,
        value: 5.360953472550212,
    },
    {
        group: 'Delta',
        subgroup: 'B',
        mu: 6,
        sd: 1,
        n: 20,
        value: 5.668266141990418,
    },
    {
        group: 'Delta',
        subgroup: 'B',
        mu: 6,
        sd: 1,
        n: 20,
        value: 4.100998815674703,
    },
    {
        group: 'Delta',
        subgroup: 'B',
        mu: 6,
        sd: 1,
        n: 20,
        value: 5.532559671837303,
    },
    {
        group: 'Epsilon',
        subgroup: 'A',
        mu: 5,
        sd: 1.4,
        n: 20,
        value: 4.884987739541156,
    },
    {
        group: 'Epsilon',
        subgroup: 'A',
        mu: 5,
        sd: 1.4,
        n: 20,
        value: 5.8909783098071875,
    },
    {
        group: 'Epsilon',
        subgroup: 'A',
        mu: 5,
        sd: 1.4,
        n: 20,
        value: 7.001196559355861,
    },
    {
        group: 'Epsilon',
        subgroup: 'A',
        mu: 5,
        sd: 1.4,
        n: 20,
        value: 3.793941255259698,
    },
    {
        group: 'Epsilon',
        subgroup: 'A',
        mu: 5,
        sd: 1.4,
        n: 20,
        value: 4.591689450138183,
    },
    {
        group: 'Epsilon',
        subgroup: 'A',
        mu: 5,
        sd: 1.4,
        n: 20,
        value: 6.3102129212944895,
    },
    {
        group: 'Epsilon',
        subgroup: 'A',
        mu: 5,
        sd: 1.4,
        n: 20,
        value: 1.8409843395988394,
    },
    {
        group: 'Epsilon',
        subgroup: 'A',
        mu: 5,
        sd: 1.4,
        n: 20,
        value: 2.587363332508349,
    },
    {
        group: 'Epsilon',
        subgroup: 'A',
        mu: 5,
        sd: 1.4,
        n: 20,
        value: 3.00975255972717,
    },
    {
        group: 'Epsilon',
        subgroup: 'A',
        mu: 5,
        sd: 1.4,
        n: 20,
        value: 5.694917089334604,
    },
    {
        group: 'Epsilon',
        subgroup: 'A',
        mu: 5,
        sd: 1.4,
        n: 20,
        value: 6.7617363223848646,
    },
    {
        group: 'Epsilon',
        subgroup: 'A',
        mu: 5,
        sd: 1.4,
        n: 20,
        value: 4.71167374634471,
    },
    {
        group: 'Epsilon',
        subgroup: 'A',
        mu: 5,
        sd: 1.4,
        n: 20,
        value: 5.092078573163869,
    },
    {
        group: 'Epsilon',
        subgroup: 'A',
        mu: 5,
        sd: 1.4,
        n: 20,
        value: 5.728745887935859,
    },
    {
        group: 'Epsilon',
        subgroup: 'A',
        mu: 5,
        sd: 1.4,
        n: 20,
        value: 5.977915664513167,
    },
    {
        group: 'Epsilon',
        subgroup: 'A',
        mu: 5,
        sd: 1.4,
        n: 20,
        value: 4.5969326227877865,
    },
    {
        group: 'Epsilon',
        subgroup: 'A',
        mu: 5,
        sd: 1.4,
        n: 20,
        value: 6.443779096977722,
    },
    {
        group: 'Epsilon',
        subgroup: 'A',
        mu: 5,
        sd: 1.4,
        n: 20,
        value: 4.213713334660713,
    },
    {
        group: 'Epsilon',
        subgroup: 'A',
        mu: 5,
        sd: 1.4,
        n: 20,
        value: 3.8342860140259285,
    },
    {
        group: 'Epsilon',
        subgroup: 'A',
        mu: 5,
        sd: 1.4,
        n: 20,
        value: 5.467601104676148,
    },
    {
        group: 'Epsilon',
        subgroup: 'B',
        mu: 6,
        sd: 3,
        n: 20,
        value: 5.925865815177546,
    },
    {
        group: 'Epsilon',
        subgroup: 'B',
        mu: 6,
        sd: 3,
        n: 20,
        value: 5.312647700958209,
    },
    {
        group: 'Epsilon',
        subgroup: 'B',
        mu: 6,
        sd: 3,
        n: 20,
        value: 6.1869739561313315,
    },
    {
        group: 'Epsilon',
        subgroup: 'B',
        mu: 6,
        sd: 3,
        n: 20,
        value: 6.845486165448003,
    },
    {
        group: 'Epsilon',
        subgroup: 'B',
        mu: 6,
        sd: 3,
        n: 20,
        value: 7.634350274740559,
    },
    {
        group: 'Epsilon',
        subgroup: 'B',
        mu: 6,
        sd: 3,
        n: 20,
        value: 7.898756555408466,
    },
    {
        group: 'Epsilon',
        subgroup: 'B',
        mu: 6,
        sd: 3,
        n: 20,
        value: 4.725290953695685,
    },
    {
        group: 'Epsilon',
        subgroup: 'B',
        mu: 6,
        sd: 3,
        n: 20,
        value: 2.140606308271715,
    },
    {
        group: 'Epsilon',
        subgroup: 'B',
        mu: 6,
        sd: 3,
        n: 20,
        value: 6.36452382146467,
    },
    {
        group: 'Epsilon',
        subgroup: 'B',
        mu: 6,
        sd: 3,
        n: 20,
        value: 6.914915522652124,
    },
    {
        group: 'Epsilon',
        subgroup: 'B',
        mu: 6,
        sd: 3,
        n: 20,
        value: 6.934444842753331,
    },
    {
        group: 'Epsilon',
        subgroup: 'B',
        mu: 6,
        sd: 3,
        n: 20,
        value: 8.878447452822378,
    },
    {
        group: 'Epsilon',
        subgroup: 'B',
        mu: 6,
        sd: 3,
        n: 20,
        value: 3.14632712231327,
    },
    {
        group: 'Epsilon',
        subgroup: 'B',
        mu: 6,
        sd: 3,
        n: 20,
        value: 7.914630947442312,
    },
    {
        group: 'Epsilon',
        subgroup: 'B',
        mu: 6,
        sd: 3,
        n: 20,
        value: 7.583035441364792,
    },
    {
        group: 'Epsilon',
        subgroup: 'B',
        mu: 6,
        sd: 3,
        n: 20,
        value: 5.758918276209052,
    },
    {
        group: 'Epsilon',
        subgroup: 'B',
        mu: 6,
        sd: 3,
        n: 20,
        value: 6.91399127019816,
    },
    {
        group: 'Epsilon',
        subgroup: 'B',
        mu: 6,
        sd: 3,
        n: 20,
        value: 2.981286619552718,
    },
    {
        group: 'Epsilon',
        subgroup: 'B',
        mu: 6,
        sd: 3,
        n: 20,
        value: 6.237898804901429,
    },
    {
        group: 'Epsilon',
        subgroup: 'B',
        mu: 6,
        sd: 3,
        n: 20,
        value: 2.39296633353879,
    },
];

const boxPlotScheme = getSchemeByIndex(1);
const lineScheme = getSchemeByIndex(24);

export const App = () => (
    <div className={styles.root}>
        <div style={{ color: 'none', position: 'fixed' }}>
            {boxPlotScheme}, {lineScheme}
        </div>
        <div className={styles.title}>
            <h1>NIVO</h1>
        </div>
        <div className={styles.buttons}>
            <button className={styles.cta} color={''}>
                Read Article
            </button>
            <button className={styles.cta}>Documentation</button>
        </div>
        <div className={styles['left-side']}>
            <ResponsiveBoxPlot
                data={boxPlotData}
                margin={{ top: 60, right: 140, bottom: 60, left: 60 }}
                minValue={0}
                maxValue={10}
                subGroupBy="subgroup"
                padding={0.12}
                enableGridX={true}
                axisTop={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: '',
                    legendOffset: 36,
                }}
                axisRight={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: '',
                    legendOffset: 0,
                }}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'group',
                    legendPosition: 'middle',
                    legendOffset: 32,
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'value',
                    legendPosition: 'middle',
                    legendOffset: -40,
                }}
                colors={{ scheme: boxPlotScheme }}
                borderRadius={2}
                borderWidth={2}
                borderColor={{
                    from: 'color',
                    modifiers: [['darker', 0.5]],
                }}
                medianWidth={2}
                medianColor={{
                    from: 'color',
                }}
                whiskerEndSize={0.6}
                whiskerColor={{
                    from: 'color',
                    modifiers: [['darker', 0.3]],
                }}
                motionConfig="stiff"
                legends={[
                    {
                        anchor: 'right',
                        direction: 'column',
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemWidth: 60,
                        itemHeight: 20,
                        itemsSpacing: 3,
                        itemTextColor: '#999',
                        itemDirection: 'left-to-right',
                        symbolSize: 20,
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
        <div className={styles['right-side']}>
            <ResponsiveLine
                data={lineData}
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
                enableGridX={false}
                enableGridY={false}
                pointBorderColor={{ from: 'serieColor' }}
                colors={{ scheme: lineScheme }}
            />
        </div>
    </div>
);
