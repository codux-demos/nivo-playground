import { createBoard } from '@wixc3/react-board';
import { Chart } from '../../../components/chart/chart';

export default createBoard({
    name: 'Chart',
    Board: () => <Chart img="https://nivo.rocks/static/chord-6892870901033703cc9c2a2391b609ed.png"/>,
    isSnippet: true,
});
