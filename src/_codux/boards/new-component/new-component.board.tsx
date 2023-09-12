import { createBoard } from '@wixc3/react-board';
import { NewComponent } from '../../../components/new-component/new-component';

export default createBoard({
    name: 'NewComponent',
    Board: () => <NewComponent />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1128,
        canvasWidth: 1024,
        windowHeight: 800,
        canvasHeight: 800,
    },
});
