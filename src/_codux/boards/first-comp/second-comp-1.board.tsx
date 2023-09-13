import { createBoard } from '@wixc3/react-board';
import { FirstComp } from '../../../components/first-comp/first-comp';

export default createBoard({
    name: 'SecondComp',
    Board: () => <FirstComp />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 500,
    },
});
