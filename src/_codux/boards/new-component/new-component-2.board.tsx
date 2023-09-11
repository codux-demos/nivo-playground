import { createBoard } from '@wixc3/react-board';
import { NewComponent } from '../../../components/new-component/new-component';

export default createBoard({
    name: 'NewComponent 2',
    Board: () => <img src={"https://nivo.rocks/static/chord-6892870901033703cc9c2a2391b609ed.png"}/>,
    isSnippet: true,
});
