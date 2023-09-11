import { createBoard } from '@wixc3/react-board';
import { Chart } from '../../components/chart/chart';
import Chart_module from '../../components/chart/chart.module.scss';

export default createBoard({
    name: 'layout',
    Board: () => (
        <div className={Chart_module.layout}>
            <Chart img="https://nivo.rocks/static/chord-6892870901033703cc9c2a2391b609ed.png" />
        </div>
    ),
    isSnippet: true,
});
